/**
 * Public service API. Screens import from here ONLY — never from src/data.
 * This barrel is the contract; the implementation behind it (mock now, HTTP
 * later) can change freely.
 */
export * from './collections.service';
export * from './products.service';
export * from './creators.service';
export * from './motifs.service';
export * from './articles.service';
export * from './experiences.service';
export * from './discover.service';
export * from './journey.service';
export * from './wishlist.service';
export * from './preferences.service';
export * from './creator-applications.service';
export { NotFoundError, USE_MOCK, API_BASE_URL } from './api.client';
