/** Barrel for the raw mock dataset. Consumed ONLY by the service layer. */
export { collections } from './collections';
export { products } from './products';
export { creators } from './creators';
export {
  CREATOR_TAXONOMY,
  CREATOR_SERVICES,
  CREATOR_SERVICE_META,
  allCategories,
  allCategoryIds,
  allSpecialtyTags,
  categoryForTag,
  getCategoryDescription,
  getCategoryLabel,
  getServiceDescription,
  getServiceLabel,
  getTagDescription,
  getTagLabel,
  getTagMeta,
  isTagAllowedForCategories,
  tagsForCategory,
} from './creator-taxonomy';
export type {
  CreatorCategoryId,
  CreatorService,
  SpecialtyTagId,
} from './creator-taxonomy';
export { motifs, palettes } from './motifs';
export { sarees } from './sarees';
export { authors } from './authors';
export { tagoreOverview, tagoreWorks, parjaays } from './tagore';
export { heritageBuildings } from './heritage-buildings';
export { festivals, religiousSites } from './festivals-faith';
export { freedomFighters } from './freedom-fighters';
export { icons } from './icons';
export { naturalResources } from './natural-bengal';
export { instruments, musicGenres } from './music';
export { floraItems } from './flora';
export { birds } from './birds';
export { fish, dals } from './fish-dal';
export { dishes } from './food';
export { crafts } from './crafts';
export { attireItems } from './attire';
export { books } from './books';
export { cinemaEntries } from './cinema';
export { ritus, months, rituals, CALENDAR_OVERVIEW, panjika } from './calendar';
export { places } from './places';
export {
  cellularJailPrisoners,
  CELLULAR_JAIL_NOTE,
  cellularJailIntro,
} from './cellular-jail';
export { articles } from './articles';
export { experiences } from './experiences';
export { discoverRails } from './discover-rails';
export { learnTopics } from './learn-topics';
export { journeyNodes, JOURNEY_NODE_ORDER, JOURNEY_FIRST_NODE_ID } from './journey';
