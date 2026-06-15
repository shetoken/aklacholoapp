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
export { articles } from './articles';
export { experiences } from './experiences';
export { discoverRails } from './discover-rails';
export { learnTopics } from './learn-topics';
export { journeyNodes, JOURNEY_NODE_ORDER, JOURNEY_FIRST_NODE_ID } from './journey';
