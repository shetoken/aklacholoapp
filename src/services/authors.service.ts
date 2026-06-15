import type {
  Author,
  AuthorCreatorTag,
  AuthorForm,
  Creator,
  LiteraryEra,
  SpecialtyTagId,
} from '@/types';
import { authors } from '@/data/authors';
import { creators } from '@/data/creators';
import { mockResponse, NotFoundError } from './api.client';

const AUTHOR_TAG_TO_CREATOR_TAG: Record<AuthorCreatorTag, SpecialtyTagId> = {
  writing: 'writers-poets',
  poetry: 'writers-poets',
  storytelling: 'storytellers',
  translation: 'translators',
};

export function getAuthors(): Promise<Author[]> {
  return mockResponse(authors);
}

export async function getAuthorById(id: string): Promise<Author> {
  const found = authors.find((a) => a.id === id);
  if (!found) throw new NotFoundError('Author', id);
  return mockResponse(found);
}

export async function getAuthorBySlug(slug: string): Promise<Author> {
  const found = authors.find((a) => a.slug === slug);
  if (!found) throw new NotFoundError('Author', slug);
  return mockResponse(found);
}

export function getFlagshipAuthors(): Promise<Author[]> {
  return mockResponse(authors.filter((a) => a.isFlagship));
}

export function getAuthorsByEra(era: LiteraryEra): Promise<Author[]> {
  return mockResponse(authors.filter((a) => a.era === era));
}

export function getAuthorsByForm(form: AuthorForm): Promise<Author[]> {
  return mockResponse(authors.filter((a) => a.forms.includes(form)));
}

export function getRelatedAuthors(id: string): Promise<Author[]> {
  const author = authors.find((a) => a.id === id);
  if (!author) return mockResponse([]);
  const related = author.relatedAuthorIds
    .map((relatedId) => authors.find((a) => a.id === relatedId))
    .filter((a): a is Author => Boolean(a));
  return mockResponse(related);
}

/** Living creators whose Words & Story tags overlap the author’s literary themes. */
export function getLivingWritersForAuthor(authorId: string): Promise<Creator[]> {
  const tags = authors.find((a) => a.id === authorId)?.relatedCreatorTags ?? [];
  if (tags.length === 0) return mockResponse([]);

  const creatorTags = [
    ...new Set(tags.map((tag) => AUTHOR_TAG_TO_CREATOR_TAG[tag])),
  ];

  const matched = creators.filter((creator) =>
    creator.specialtyTags.some((tag) => creatorTags.includes(tag)),
  );
  return mockResponse(matched);
}

export function filterAuthors(items: Author[], query: string): Author[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];

  return items.filter((author) => {
    const haystack = [
      author.name,
      author.nameBengali ?? '',
      author.alsoKnownAs ?? '',
      author.subtitle,
      author.shortDescription,
      author.lifespan ?? '',
      ...author.forms,
      ...author.regions,
      ...author.notableWorks,
    ]
      .join(' ')
      .toLowerCase();

    return terms.every((term) => haystack.includes(term));
  });
}
