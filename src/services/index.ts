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
export * from './sarees.service';
export * from './authors.service';
export * from './tagore.service';
export * from './heritage-buildings.service';
export * from './festivals-faith.service';
export * from './memorial.service';
export * from './icons.service';
export * from './natural-bengal.service';
export * from './music.service';
export * from './flora.service';
export * from './birds.service';
export * from './fish-dal.service';
export * from './food.service';
export * from './crafts.service';
export * from './attire.service';
export * from './books.service';
export * from './cinema.service';
export * from './calendar.service';
export * from './places.service';
export * from './experiences.service';
export * from './discover.service';
export * from './journey.service';
export * from './wishlist.service';
export * from './preferences.service';
export * from './creator-applications.service';
export { NotFoundError, USE_MOCK, API_BASE_URL } from './api.client';
