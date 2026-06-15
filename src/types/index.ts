/**
 * AklaCholo domain models.
 *
 * These mirror the shape a real API would return so the swap from mock data to
 * HTTP (see src/services) is invisible to screens. Entities cross-reference each
 * other by ID, making "related X" links data-driven and letting the future
 * grounded-chat traverse the content graph.
 */

export type ID = string;

export type BengalRegion =
  | 'Dhaka'
  | 'Kolkata'
  | 'Bishnupur'
  | 'Shantiniketan'
  | 'Murshidabad'
  | 'Sylhet'
  | 'Tangail'
  | 'Nadia'
  | 'Other';

export type Category =
  | 'Kitchen'
  | 'Living'
  | 'Stationery'
  | 'Wearables'
  | 'Wall Art';

export interface ImageRef {
  uri: string; // placeholder now → CDN URL later
  alt: string;
  blurhash?: string;
  aspectRatio?: number; // width / height, for masonry layout
}

// ----------------------------------------------------------------------------
// Creator — artisans AND digital designers/animators/teachers
// ----------------------------------------------------------------------------
export type DisciplineType = 'physical' | 'digital' | 'teacher';

export interface Creator {
  id: ID;
  name: string;
  /** Flexible free-text, e.g. "Kantha artisan", "3D motion designer". */
  discipline: string;
  /** Coarse bucket for filtering. */
  disciplineType: DisciplineType;
  region: BengalRegion;
  avatar: ImageRef;
  bio: string; // short, card-sized
  story?: string; // long-form profile narrative
  portfolio: ImageRef[];
  productIds: ID[];
  socials?: { label: string; url: string }[];
}

// ----------------------------------------------------------------------------
// Product / Design
// ----------------------------------------------------------------------------
export interface Product {
  id: ID;
  title: string;
  subtitle?: string;
  category: Category;
  images: ImageRef[]; // gallery / carousel
  story: string; // "the story behind this"
  creatorId: ID;
  collectionIds: ID[];
  relatedProductIds: ID[];
  relatedArticleIds: ID[]; // ties product → Magic of Bengal
  motifIds: ID[];
  /** Display-only — NO commerce in Phase 1. */
  priceLabel?: string;
  tags: string[];
}

// ----------------------------------------------------------------------------
// Collection — story-driven groupings
// ----------------------------------------------------------------------------
export interface Collection {
  id: ID;
  title: string;
  tagline: string;
  cover: ImageRef;
  narrative: string;
  productIds: ID[];
  featuredCreatorIds: ID[];
  relatedArticleIds: ID[];
  /** Theme color key for accenting the detail screen. */
  accentColor?: string;
}

// ----------------------------------------------------------------------------
// Kolka motif + palette
// ----------------------------------------------------------------------------
export interface Palette {
  id: ID;
  name: string;
  colors: string[]; // ordered hex list
}

export interface Motif {
  id: ID;
  name: string;
  description: string;
  /** Maps to a registered SVG component in components/brand/motifs. */
  svgKey: string;
  defaultPalette: Palette;
  alternatePalettes: Palette[];
}

// ----------------------------------------------------------------------------
// Magic of Bengal article — RETRIEVAL-READY for Phase 1.5 grounded chat
// ----------------------------------------------------------------------------
export interface ArticleSection {
  /** Stable ID → citation target ("articleId#sectionId") for grounded chat. */
  id: ID;
  heading: string;
  body: string; // rich text (light markdown)
  pullQuote?: string;
  image?: ImageRef;
}

export interface Article {
  id: ID;
  slug: string; // "what-is-kolka"
  title: string;
  subtitle: string;
  heroImage: ImageRef;
  readingMinutes: number;
  /** One-paragraph abstract — strong anchor for chat context. */
  summary: string;
  sections: ArticleSection[];
  relatedCollectionIds: ID[];
  relatedCreatorIds: ID[];
  relatedProductIds: ID[];
  tags: string[];
}

// ----------------------------------------------------------------------------
// Curated Experience — compact travel advisor style guidance
// ----------------------------------------------------------------------------
export interface ExperienceGuideContact {
  name: string;
  role: string;
  phone: string;
}

export interface Experience {
  id: ID;
  title: string;
  location: BengalRegion;
  heroImage: ImageRef;
  shortBlurb: string;
  doTip: string;
  dontTip: string;
  guideContact: ExperienceGuideContact;
  tags: string[];
}

// ----------------------------------------------------------------------------
// Discover rails — festivals, calendar, palaces topic tiles
// ----------------------------------------------------------------------------
export interface DiscoverTopic {
  id: ID;
  title: string;
  subtitle?: string;
  image: ImageRef;
  /** When set, tile navigates to this article. */
  articleId?: ID;
}

export interface DiscoverRails {
  festivals: DiscoverTopic[];
  calendar: DiscoverTopic[];
  palaces: DiscoverTopic[];
}

export interface LearnTopic {
  id: ID;
  title: string;
  detail: string;
  image: ImageRef;
}

// ----------------------------------------------------------------------------
// Journey Through Bengal — unfolding map nodes
// ----------------------------------------------------------------------------
export type JourneyNodeStatus = 'locked' | 'current' | 'unlocked' | 'completed';

/** Static node definition (status applied at runtime from progress). */
export interface JourneyNodeDefinition {
  id: ID;
  title: string;
  subtitle: string;
  /** Maps to KolkaMotif svgKey. */
  motifKey: string;
  articleId: ID;
  connections: ID[];
  order: number;
}

export interface JourneyNode extends JourneyNodeDefinition {
  status: JourneyNodeStatus;
}

export interface JourneyProgress {
  currentNodeId: ID | null;
  unlockedNodeIds: ID[];
  completedNodeIds: ID[];
  skippedOnboarding: boolean;
  onboardingSeen: boolean;
  rewardClaimed: boolean;
  bonusUnlocked: boolean;
}

/** Phase 2 reward payload hook (Shop discount / early access). */
export interface JourneyShopRewardHook {
  type: 'shop_discount';
  code: string | null;
}

// ----------------------------------------------------------------------------
// Wishlist
// ----------------------------------------------------------------------------
export type WishlistKind = 'product' | 'collection' | 'creator';

export interface WishlistItem {
  id: ID;
  kind: WishlistKind;
  addedAt: number; // epoch ms
}

// ----------------------------------------------------------------------------
// User preferences — first sign-in onboarding
// ----------------------------------------------------------------------------
export type BengalConnection =
  | 'diaspora'
  | 'exploring'
  | 'heritage'
  | 'creative';

export type HomeInterest =
  | 'stories'
  | 'crafts'
  | 'food'
  | 'music'
  | 'travel'
  | 'learn'
  | 'shop'
  | 'hire';

export interface UserPreferences {
  connection: BengalConnection;
  interests: HomeInterest[];
  completedAt: number;
}
