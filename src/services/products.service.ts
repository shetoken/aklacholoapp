import type { Category, Product } from '@/types';
import { products } from '@/data';
import { mockResponse, NotFoundError } from './api.client';

export function getProducts(): Promise<Product[]> {
  return mockResponse(products);
}

export async function getProductById(id: string): Promise<Product> {
  const found = products.find((p) => p.id === id);
  if (!found) throw new NotFoundError('Product', id);
  return mockResponse(found);
}

export function getProductsByCategory(category: Category): Promise<Product[]> {
  return mockResponse(products.filter((p) => p.category === category));
}

export function getProductsByIds(ids: string[]): Promise<Product[]> {
  const set = new Set(ids);
  // Preserve the order of the requested ids.
  const ordered = ids
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p) && set.has(p!.id));
  return mockResponse(ordered);
}

export function getProductsByCreator(creatorId: string): Promise<Product[]> {
  return mockResponse(products.filter((p) => p.creatorId === creatorId));
}

/** Filter products by title, subtitle, category, story, and tags. */
export function filterProducts(items: Product[], query: string): Product[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];

  return items.filter((product) => {
    const haystack =
      `${product.title} ${product.subtitle ?? ''} ${product.category} ${product.story} ${product.tags.join(' ')}`.toLowerCase();
    return terms.every((term) => haystack.includes(term));
  });
}
