import type { Book, LiteraryForm } from '@/types';
import { books } from '@/data/books';
import {
  LITERARY_FORM_FILTER_ORDER,
  LITERARY_FORM_LABELS,
} from '@/constants/books';
import { mockResponse, NotFoundError } from './api.client';
import { getAuthorById } from './authors.service';
import { getCinemaForBook } from './cinema.service';

export { LITERARY_FORM_LABELS, LITERARY_FORM_FILTER_ORDER };

export function getBooks(): Promise<Book[]> {
  return mockResponse(books);
}

export function getFlagshipBooks(): Promise<Book[]> {
  return mockResponse(books.filter((book) => book.isFlagship));
}

export function getBooksByForm(form: LiteraryForm): Promise<Book[]> {
  return mockResponse(books.filter((book) => book.form === form));
}

export function getBooksByAuthor(authorId: string): Promise<Book[]> {
  return mockResponse(books.filter((book) => book.authorId === authorId));
}

export function getAdaptedBooks(): Promise<Book[]> {
  return mockResponse(books.filter((book) => (book.adaptedFilmIds?.length ?? 0) > 0));
}

export async function getBookBySlug(slug: string): Promise<Book> {
  const found = books.find((book) => book.slug === slug);
  if (!found) throw new NotFoundError('Book', slug);
  return mockResponse(found);
}

export async function getBookById(id: string): Promise<Book> {
  const found = books.find((book) => book.id === id);
  if (!found) throw new NotFoundError('Book', id);
  return mockResponse(found);
}

export function getRelatedBooks(bookId: string): Promise<Book[]> {
  const book = books.find((entry) => entry.id === bookId);
  if (!book) return mockResponse([]);
  const related = book.relatedBookIds
    .map((id) => books.find((entry) => entry.id === id))
    .filter((entry): entry is Book => Boolean(entry));
  return mockResponse(related);
}

export function getFilmsForBook(bookId: string) {
  return getCinemaForBook(bookId);
}

export async function getAuthorForBook(bookId: string) {
  const authorId = books.find((entry) => entry.id === bookId)?.authorId;
  if (!authorId) throw new NotFoundError('Author for book', bookId);
  return getAuthorById(authorId);
}
