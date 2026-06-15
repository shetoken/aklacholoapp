import type { Article, ArticleSection } from '@/types';
import { articles } from '@/data';
import { encyclopediaOrder } from '@/data/encyclopedia-articles';
import { mockResponse, NotFoundError } from './api.client';

export function getArticles(): Promise<Article[]> {
  return mockResponse(articles);
}

/** Encyclopedia rail — ordered for Home “Magic of Bengal” tiles. */
export function getEncyclopediaArticles(): Promise<Article[]> {
  const byId = new Map(articles.map((a) => [a.id, a]));
  const ordered = encyclopediaOrder
    .map((id) => byId.get(id))
    .filter((a): a is Article => Boolean(a));
  return mockResponse(ordered);
}

/** Filter articles by title, subtitle, summary, and tags (client-side helper). */
export function filterArticles(items: Article[], query: string): Article[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];

  return items.filter((article) => {
    const haystack =
      `${article.title} ${article.subtitle} ${article.summary} ${article.tags.join(' ')}`.toLowerCase();
    return terms.every((term) => haystack.includes(term));
  });
}

export function searchArticles(query: string): Promise<Article[]> {
  return mockResponse(filterArticles(articles, query));
}

export async function getArticleById(id: string): Promise<Article> {
  const found = articles.find((a) => a.id === id);
  if (!found) throw new NotFoundError('Article', id);
  return mockResponse(found);
}

export async function getArticleBySlug(slug: string): Promise<Article> {
  const found = articles.find((a) => a.slug === slug);
  if (!found) throw new NotFoundError('Article', slug);
  return mockResponse(found);
}

export function getArticlesByIds(ids: string[]): Promise<Article[]> {
  const ordered = ids
    .map((id) => articles.find((a) => a.id === id))
    .filter((a): a is Article => Boolean(a));
  return mockResponse(ordered);
}

// ---------------------------------------------------------------------------
// PHASE 1.5 SCAFFOLD — retrieval primitives for a grounded chat assistant.
// The chat is NOT built now. These helpers expose the article content as
// citable chunks so a future assistant can answer using ONLY this content.
// ---------------------------------------------------------------------------

export interface ArticleChunk {
  /** Stable citation id: "articleId#sectionId". */
  citation: string;
  articleId: string;
  articleTitle: string;
  sectionId: string;
  heading: string;
  text: string;
}

/** Flatten all articles into per-section chunks for indexing/retrieval. */
export function getArticleChunks(): Promise<ArticleChunk[]> {
  const chunks: ArticleChunk[] = articles.flatMap((article) =>
    article.sections.map((section: ArticleSection) => ({
      citation: `${article.id}#${section.id}`,
      articleId: article.id,
      articleTitle: article.title,
      sectionId: section.id,
      heading: section.heading,
      text: section.body,
    })),
  );
  return mockResponse(chunks);
}

/**
 * Naïve keyword search over chunks — a placeholder for the real retrieval
 * (embeddings / vector search) that Phase 1.5 will introduce. Lives here so the
 * upgrade touches only the service layer.
 */
export async function searchArticleChunks(
  query: string,
  limit = 5,
): Promise<ArticleChunk[]> {
  const chunks = await getArticleChunks();
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const scored = chunks
    .map((chunk) => {
      const haystack = `${chunk.heading} ${chunk.text}`.toLowerCase();
      const score = terms.reduce(
        (acc, t) => acc + (haystack.includes(t) ? 1 : 0),
        0,
      );
      return { chunk, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.chunk);
  return scored;
}
