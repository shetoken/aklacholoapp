/**
 * AklaCholo domain models.
 *
 * These mirror the shape a real API would return so the swap from mock data to
 * HTTP (see src/services) is invisible to screens. Entities cross-reference each
 * other by ID, making "related X" links data-driven and letting the future
 * grounded-chat traverse the content graph.
 */

import type {
  CreatorCategoryId,
  CreatorService,
  SpecialtyTagId,
} from '@/data/creator-taxonomy';

export type { CreatorCategoryId, CreatorService, SpecialtyTagId };

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
  /** Short card headline, e.g. "Kantha embroiderer". */
  discipline: string;
  /** Top-level taxonomy buckets — one or more. */
  categories: CreatorCategoryId[];
  /** Defined specialty tags; each must belong to one of `categories`. */
  specialtyTags: SpecialtyTagId[];
  /** What they offer: commissions, teaching, performance, shop products. */
  services: CreatorService[];
  region: BengalRegion | string;
  avatar: ImageRef;
  bio: string;
  story?: string;
  portfolio: ImageRef[];
  productIds: ID[];
  socials?: { label: string; url: string }[];
  /** @deprecated — use `categories` + `services` for filtering. */
  disciplineType?: DisciplineType;
}

// ----------------------------------------------------------------------------
// Creator onboarding — applications & scouting (not public until published)
// ----------------------------------------------------------------------------
export type CreatorApplicationStatus =
  | 'submitted'
  | 'in_review'
  | 'interview_scheduled'
  | 'sample_requested'
  | 'sample_ordered'
  | 'approved'
  | 'declined'
  | 'published'
  | 'suspended';

/** `application` = self-serve form; `scouted` = founder-added (e.g. Instagram). */
export type CreatorSource = 'application' | 'scouted';

/** Shop / studio location when disciplineType is physical. */
export type ShopCountry = 'India' | 'Bangladesh';

export interface ShopAddress {
  town: string;
  state: string;
  zipCode: string;
  country: ShopCountry;
}

export interface CreatorApplicationInput {
  name: string;
  email: string;
  phone?: string;
  discipline: string;
  disciplineType: DisciplineType;
  region: BengalRegion;
  bio: string;
  story?: string;
  instagramUrl?: string;
  portfolioUrl?: string;
  /** What they could send for a vetting sample order. */
  sampleDescription?: string;
  shopAddress?: ShopAddress;
}

export interface CreatorApplication extends CreatorApplicationInput {
  id: ID;
  source: CreatorSource;
  status: CreatorApplicationStatus;
  submittedAt: number;
  updatedAt: number;
  /** Internal — founder notes (calls, sample order refs, vision fit). */
  adminNotes?: string;
  /** When source is scouted — e.g. "@weaver.kolkata". */
  scoutedFrom?: string;
}

export interface ScoutedCreatorInput extends CreatorApplicationInput {
  scoutedFrom: string;
  adminNotes?: string;
  /** Scouted creators can skip straight to review or approved. */
  status?: Extract<
    CreatorApplicationStatus,
    'in_review' | 'approved' | 'sample_requested'
  >;
}

// ----------------------------------------------------------------------------
// Bengali Sarees — encyclopedia hub inside Discover (Magic of Bengal)
// ----------------------------------------------------------------------------
export type SareeAxis = 'type' | 'style' | 'drape';

export type SareeFabric =
  | 'cotton'
  | 'muslin'
  | 'silk'
  | 'tussar-silk'
  | 'matka-silk'
  | 'mixed'
  | 'n-a';

/** Pan-Bengal origins — distinct from creator `BengalRegion`. */
export type SareeRegion =
  | 'dhaka-bangladesh'
  | 'murshidabad-wb'
  | 'bishnupur-wb'
  | 'shantipur-phulia-wb'
  | 'tangail'
  | 'nadia-wb'
  | 'birbhum-wb'
  | 'across-bengal';

export type SareeHeritageTag =
  | 'unesco-intangible-heritage'
  | 'gi-protected'
  | 'ceremonial'
  | 'everyday';

/** Subset of creator taxonomy `SpecialtyTagId` for saree ↔ maker links. */
export type SareeCreatorTag = Extract<
  SpecialtyTagId,
  | 'jamdani'
  | 'tant'
  | 'baluchari'
  | 'kantha'
  | 'block-print-dye'
  | 'saree-artisan'
>;

export interface SareeBodySection {
  id: ID;
  heading: string;
  body: string;
}

export interface Saree {
  id: ID;
  slug: string;
  axis: SareeAxis;
  name: string;
  nameBengali?: string;
  nameRomanized?: string;
  subtitle: string;
  fabric: SareeFabric;
  regions: SareeRegion[];
  heritage: SareeHeritageTag[];
  motifs?: string[];
  occasions?: string[];
  shortDescription: string;
  bodySections: SareeBodySection[];
  relatedCreatorTags: SareeCreatorTag[];
  relatedShopProductIds: ID[];
  relatedArticleIds: ID[];
  relatedSareeIds: ID[];
  heroImage: ImageRef;
  gallery?: ImageRef[];
  isFlagship: boolean;
  isStub: boolean;
}

// ----------------------------------------------------------------------------
// Voices of Bengal — literary hub inside Discover (Magic of Bengal)
// ----------------------------------------------------------------------------
export type LiteraryEra =
  | 'renaissance'
  | 'early-modern'
  | 'modern'
  | 'contemporary';

export type AuthorForm =
  | 'poet'
  | 'novelist'
  | 'short-story'
  | 'playwright'
  | 'essayist'
  | 'reformer'
  | 'childrens'
  | 'songwriter';

/** Pan-Bengal literary geography — distinct from creator `BengalRegion`. */
export type AuthorRegion =
  | 'kolkata-wb'
  | 'west-bengal'
  | 'bangladesh'
  | 'undivided-bengal'
  | 'diaspora';

export type AuthorRecognition =
  | 'nobel-literature'
  | 'jnanpith'
  | 'sahitya-akademi'
  | 'padma-vibhushan'
  | 'padma-bhushan'
  | 'padma-shri'
  | 'national-poet';

/** Maps to Words & Story specialty tags via the authors service. */
export type AuthorCreatorTag =
  | 'writing'
  | 'poetry'
  | 'storytelling'
  | 'translation';

export interface AuthorBodySection {
  id: ID;
  heading: string;
  body: string;
}

export interface Author {
  id: ID;
  slug: string;
  name: string;
  nameBengali?: string;
  alsoKnownAs?: string;
  lifespan?: string;
  era: LiteraryEra;
  forms: AuthorForm[];
  regions: AuthorRegion[];
  recognitions: AuthorRecognition[];
  subtitle: string;
  shortDescription: string;
  bodySections: AuthorBodySection[];
  notableWorks: string[];
  relatedAuthorIds: ID[];
  relatedArticleIds: ID[];
  relatedCreatorTags: AuthorCreatorTag[];
  relatedSareeIds?: ID[];
  portraitImage: ImageRef;
  isFlagship: boolean;
  isStub: boolean;
}

// ----------------------------------------------------------------------------
// World of Tagore — Rabindra Sangeet & creations hub (Magic of Bengal)
// ----------------------------------------------------------------------------
export type Parjaay =
  | 'puja'
  | 'prem'
  | 'prakriti'
  | 'swadesh'
  | 'anushthanik'
  | 'bichitro'
  | 'nrityonatya';

export interface ParjaayInfo {
  id: Parjaay;
  name: string;
  nameBengali: string;
  meaning: string;
  approxSongCount?: number;
  subClassCount?: number;
  description: string;
  exampleSongs: string[];
}

export type TagoreWorkForm =
  | 'poetry'
  | 'novel'
  | 'short-story'
  | 'play'
  | 'dance-drama'
  | 'essay'
  | 'song-collection'
  | 'painting'
  | 'institution';

export interface TagoreWork {
  id: ID;
  slug: string;
  form: TagoreWorkForm;
  title: string;
  titleBengali?: string;
  year?: string;
  subtitle: string;
  description: string;
  significance?: string;
  relatedParjaay?: Parjaay[];
  relatedArticleIds: ID[];
  isFlagship: boolean;
  isStub: boolean;
  image: ImageRef;
}

export interface TagoreOverview {
  name: string;
  nameBengali: string;
  epithet: string;
  lifespan: string;
  oneLine: string;
  songCount: number;
  authorId: ID;
}

// ----------------------------------------------------------------------------
// Palaces & Rajbaris — heritage buildings hub (Magic of Bengal)
// ----------------------------------------------------------------------------
export type HeritageBuildingType =
  | 'royal-palace'
  | 'rajbari'
  | 'merchant-house'
  | 'nawabi-palace';

export type HeritageCurrentStatus =
  | 'museum'
  | 'heritage-hotel'
  | 'ruin-abandoned'
  | 'private-residence'
  | 'for-sale'
  | 'partial-public'
  | 'film-location';

export type HeritageArchitecturalStyle =
  | 'indo-saracenic'
  | 'italian-renaissance'
  | 'greek-doric'
  | 'neoclassical'
  | 'colonial'
  | 'bengali-traditional'
  | 'terracotta'
  | 'mixed';

/** Pan-Bengal geography for heritage sites — distinct from creator `BengalRegion`. */
export type HeritageBuildingRegion =
  | 'murshidabad'
  | 'hooghly'
  | 'south-24-parganas'
  | 'north-24-parganas'
  | 'cooch-behar'
  | 'bankura'
  | 'purulia'
  | 'kolkata'
  | 'east-medinipur'
  | 'west-bengal-other'
  | 'bangladesh';

export interface HeritageBodySection {
  id: ID;
  heading: string;
  body: string;
}

export interface HeritageBuilding {
  id: ID;
  slug: string;
  name: string;
  nameBengali?: string;
  alsoKnownAs?: string;
  type: HeritageBuildingType;
  currentStatus: HeritageCurrentStatus[];
  style: HeritageArchitecturalStyle[];
  region: HeritageBuildingRegion;
  location: string;
  builtPeriod: string;
  builtBy?: string;
  dynastyOrFamily?: string;
  subtitle: string;
  shortDescription: string;
  bodySections: HeritageBodySection[];
  historicalSignificance: string;
  visitorNote?: string;
  notableFor?: string[];
  relatedBuildingIds: ID[];
  relatedArticleIds: ID[];
  relatedSareeIds?: ID[];
  heroImage: ImageRef;
  gallery?: ImageRef[];
  isFlagship: boolean;
  isStub: boolean;
}

// ----------------------------------------------------------------------------
// Festivals & Faiths — calendar and sacred sites hub (Magic of Bengal)
// ----------------------------------------------------------------------------
export type FaithTradition =
  | 'hindu'
  | 'islam'
  | 'christian'
  | 'buddhist'
  | 'jain'
  | 'sikh'
  | 'interfaith'
  | 'secular';

export type FestivalSeason = 'spring' | 'summer' | 'monsoon' | 'autumn' | 'winter';

/** Pan-Bengal geography for festivals & sites — distinct from other region enums. */
export type FaithRegion =
  | 'kolkata'
  | 'howrah'
  | 'hooghly'
  | 'north-24-parganas'
  | 'south-24-parganas'
  | 'murshidabad'
  | 'bankura'
  | 'birbhum'
  | 'malda'
  | 'darjeeling'
  | 'west-bengal-other'
  | 'bangladesh'
  | 'across-bengal';

export interface FestivalBodySection {
  id: ID;
  heading: string;
  body: string;
}

/** Subset of creator taxonomy tags for festival ↔ maker links. */
export type FestivalCreatorTag = Extract<SpecialtyTagId, 'dhaki' | 'terracotta'>;

export interface Festival {
  id: ID;
  slug: string;
  name: string;
  nameBengali?: string;
  faith: FaithTradition;
  season: FestivalSeason;
  timeOfYear: string;
  subtitle: string;
  shortDescription: string;
  bodySections: FestivalBodySection[];
  heritageNote?: string;
  relatedSiteIds: ID[];
  relatedArticleIds: ID[];
  relatedCreatorTags?: FestivalCreatorTag[];
  heroImage: ImageRef;
  isFlagship: boolean;
  isStub: boolean;
}

export type ReligiousSiteType =
  | 'temple'
  | 'mosque'
  | 'church'
  | 'monastery'
  | 'gurudwara'
  | 'jain-temple'
  | 'shrine';

export type ReligiousSiteStatus =
  | 'active-worship'
  | 'heritage-monument'
  | 'pilgrimage'
  | 'unesco-listed';

export interface SiteBodySection {
  id: ID;
  heading: string;
  body: string;
}

export interface ReligiousSite {
  id: ID;
  slug: string;
  name: string;
  nameBengali?: string;
  faith: FaithTradition;
  type: ReligiousSiteType;
  status: ReligiousSiteStatus[];
  region: FaithRegion;
  location: string;
  builtPeriod?: string;
  builtBy?: string;
  architecturalStyle?: string;
  subtitle: string;
  shortDescription: string;
  bodySections: SiteBodySection[];
  historicalSignificance: string;
  visitorNote?: string;
  relatedSiteIds: ID[];
  relatedFestivalIds: ID[];
  relatedArticleIds: ID[];
  heroImage: ImageRef;
  isFlagship: boolean;
  isStub: boolean;
}

// ----------------------------------------------------------------------------
// Sons & Daughters of Bengal — freedom fighters memorial (Magic of Bengal)
// ----------------------------------------------------------------------------
export type FighterGender = 'male' | 'female';

export type StruggleRole =
  | 'armed-revolutionary'
  | 'political-leader'
  | 'mass-mobiliser'
  | 'ideologue-thinker'
  | 'ina-azad-hind'
  | 'women-revolutionary';

export type FighterFate =
  | 'executed'
  | 'killed-in-action'
  | 'died-in-prison'
  | 'died-in-exile'
  | 'self-sacrifice'
  | 'survived'
  | 'disappeared'
  | 'fate-unverified';

export type BorderSide =
  | 'west-bengal-india'
  | 'bangladesh'
  | 'undivided-bengal';

export type StruggleMovement =
  | 'anushilan-jugantar'
  | 'chittagong-uprising'
  | 'swadeshi'
  | 'ina-azad-hind'
  | 'quit-india'
  | 'congress'
  | 'other';

export interface FighterBodySection {
  id: ID;
  heading: string;
  body: string;
}

export interface FreedomFighter {
  id: ID;
  slug: string;
  name: string;
  nameBengali?: string;
  alsoKnownAs?: string;
  gender: FighterGender;
  lifespan?: string;
  ageAtDeath?: number;
  borderSide: BorderSide;
  birthplace?: string;
  roles: StruggleRole[];
  movements: StruggleMovement[];
  fate: FighterFate;
  subtitle: string;
  shortDescription: string;
  bodySections: FighterBodySection[];
  martyrdom?: string;
  notableFor: string[];
  relatedFighterIds: ID[];
  relatedArticleIds: ID[];
  portraitImage: ImageRef;
  isFlagship: boolean;
  isStub: boolean;
}

export interface VerifiedCellularJailMartyr {
  name: string;
  gender?: FighterGender;
  ageAtDeath?: number;
  shortBio?: string;
  circumstancesOfDeath?: string;
  source: string;
}

export interface CellularJailOverview {
  title: string;
  titleBengali: string;
  location: string;
  builtPeriod: string;
  summary: string;
  significance: string;
  dataIntegrityNote: string;
  authoritativeSources: string[];
  verifiedMartyrs: VerifiedCellularJailMartyr[];
}

export interface CellularJailNote {
  headline: string;
  body: string;
  sources: string[];
}

/** Documented Cellular Jail prisoners — separate register from FreedomFighter profiles. */
export type CellularJailPrisonerFate =
  | 'died-in-jail'
  | 'released'
  | 'survived-released'
  | 'broke-mentally'
  | 'unknown';

export interface CellularJailPrisoner {
  id: ID;
  name: string;
  nameBengali?: string;
  gender: FighterGender;
  lifespan?: string;
  origin: string;
  borderSide: BorderSide;
  movements: StruggleMovement[];
  case?: string;
  yearDeported?: string;
  fate: CellularJailPrisonerFate;
  circumstances: string;
  source: string;
}

/** Unified memorial hub tile — fighter profile or Kala Pani register entry. */
export type MemorialTile =
  | { kind: 'fighter'; key: string; fighter: FreedomFighter }
  | { kind: 'prisoner'; key: string; prisoner: CellularJailPrisoner };

// ----------------------------------------------------------------------------
// Icons of Bengal — notable Bengalis across film, music, science, etc.
// (Writers live in authors.ts; revolutionaries in freedom-fighters.ts.)
// ----------------------------------------------------------------------------
export type IconField =
  | 'film'
  | 'music'
  | 'science'
  | 'economics'
  | 'visual-art'
  | 'thought-reform'
  | 'stage-screen';

export type IconBorderSide =
  | 'west-bengal-india'
  | 'bangladesh'
  | 'undivided-bengal'
  | 'diaspora';

export interface IconBodySection {
  heading: string;
  body: string;
}

export interface Icon {
  id: ID;
  slug: string;
  name: string;
  nameBengali?: string;
  alsoKnownAs?: string;
  gender: FighterGender;
  lifespan?: string;
  field: IconField;
  secondaryFields?: IconField[];
  borderSide: IconBorderSide;
  subtitle: string;
  shortDescription: string;
  bodySections: IconBodySection[];
  notableWorks?: string[];
  honours?: string[];
  relatedIconIds: ID[];
  relatedArticleIds: ID[];
  relatedAuthorId?: ID;
  portraitImage: ImageRef;
  isFlagship: boolean;
  isStub: boolean;
}

// ----------------------------------------------------------------------------
// Natural Bengal — rivers, hills, wildlife, agriculture, and the delta
// ----------------------------------------------------------------------------
export type ResourceCategory =
  | 'river'
  | 'mountain-hill'
  | 'mangrove-forest'
  | 'wildlife'
  | 'mineral'
  | 'agriculture'
  | 'beach-coast'
  | 'wetland'
  | 'protected-area';

export type NaturalResourceRegion =
  | 'darjeeling-hills'
  | 'dooars-terai'
  | 'gangetic-plain'
  | 'sundarbans-delta'
  | 'rarh-western'
  | 'coastal'
  | 'across-bengal'
  | 'bangladesh'
  | 'india-bangladesh-shared';

export type HeritageTag =
  | 'unesco-world-heritage'
  | 'ramsar-wetland'
  | 'gi-protected'
  | 'national-park'
  | 'tiger-reserve'
  | 'biosphere-reserve';

export interface ResourceBodySection {
  heading: string;
  body: string;
}

export interface NaturalResource {
  id: ID;
  slug: string;
  category: ResourceCategory;
  name: string;
  nameBengali?: string;
  alsoKnownAs?: string;
  region: NaturalResourceRegion;
  heritage: HeritageTag[];
  subtitle: string;
  shortDescription: string;
  bodySections: ResourceBodySection[];
  keyFacts?: string[];
  significance?: string;
  relatedResourceIds: ID[];
  relatedArticleIds: ID[];
  relatedBuildingIds?: ID[];
  heroImage: ImageRef;
  isFlagship: boolean;
  isStub: boolean;
}

// ----------------------------------------------------------------------------
// Music of Bengal — genres, traditions, and instruments
// ----------------------------------------------------------------------------
export type GenreFamily =
  | 'panchakavi'
  | 'folk'
  | 'devotional'
  | 'classical-rooted'
  | 'modern';

export type MusicBorderSide =
  | 'west-bengal-india'
  | 'bangladesh'
  | 'undivided-bengal'
  | 'across-bengal';

export interface GenreBodySection {
  heading: string;
  body: string;
}

export interface MusicGenre {
  id: ID;
  slug: string;
  name: string;
  nameBengali?: string;
  alsoKnownAs?: string;
  family: GenreFamily;
  borderSide: MusicBorderSide;
  songCount?: number;
  songCountNote?: string;
  founderOrKeyFigure?: string;
  subtitle: string;
  shortDescription: string;
  bodySections: GenreBodySection[];
  heritageNote?: string;
  typicalInstruments: ID[];
  relatedGenreIds: ID[];
  relatedIconIds?: ID[];
  relatedAuthorIds?: ID[];
  relatedArticleIds: ID[];
  heroImage: ImageRef;
  isFlagship: boolean;
  isStub: boolean;
}

export type InstrumentType = 'string' | 'wind' | 'percussion' | 'keyboard-reed';

export interface Instrument {
  id: ID;
  slug: string;
  name: string;
  nameBengali?: string;
  type: InstrumentType;
  subtitle: string;
  description: string;
  associatedGenreIds: ID[];
  isFlagship: boolean;
  isStub: boolean;
  image: ImageRef;
}

// ----------------------------------------------------------------------------
// Bagan — flora of Bengal (fruits, vegetables, flowers)
// ----------------------------------------------------------------------------
export type FloraCategory = 'fruit' | 'vegetable' | 'flower';

export type FloraSeason =
  | 'summer'
  | 'monsoon'
  | 'autumn'
  | 'late-autumn'
  | 'winter'
  | 'spring'
  | 'year-round';

export type FloraBorderSide = 'west-bengal-india' | 'bangladesh' | 'across-bengal';

export interface FloraBodySection {
  heading: string;
  body: string;
}

export interface FloraItem {
  id: ID;
  slug: string;
  category: FloraCategory;
  name: string;
  nameBengali?: string;
  alsoKnownAs?: string;
  season: FloraSeason;
  borderSide: FloraBorderSide;
  hasGITag?: boolean;
  giNote?: string;
  subtitle: string;
  shortDescription: string;
  bodySections: FloraBodySection[];
  culturalNote?: string;
  varieties?: string[];
  relatedFestivalIds?: ID[];
  relatedItemIds: ID[];
  relatedArticleIds: ID[];
  image: ImageRef;
  isFlagship: boolean;
  isStub: boolean;
}

// ----------------------------------------------------------------------------
// Pakhi — birds of Bengal
// ----------------------------------------------------------------------------
export type BirdHabitat =
  | 'mangrove-sundarbans'
  | 'wetland'
  | 'river-delta'
  | 'forest'
  | 'himalayan-hills'
  | 'grassland-dooars'
  | 'urban-village'
  | 'widespread';

export type BirdResidency =
  | 'resident'
  | 'winter-migrant'
  | 'summer-visitor'
  | 'passage';

export type OfficialBirdStatus =
  | 'none'
  | 'state-bird-west-bengal'
  | 'national-bird-bangladesh';

export type ConservationStatus =
  | 'common'
  | 'near-threatened'
  | 'vulnerable'
  | 'endangered'
  | 'critically-endangered'
  | 'unknown';

export type BirdBorderSide = 'west-bengal-india' | 'bangladesh' | 'across-bengal';

export interface BirdBodySection {
  heading: string;
  body: string;
}

export interface Bird {
  id: ID;
  slug: string;
  name: string;
  nameBengali?: string;
  alsoKnownAs?: string;
  scientificName?: string;
  habitats: BirdHabitat[];
  residency: BirdResidency;
  officialStatus: OfficialBirdStatus;
  conservation: ConservationStatus;
  borderSide: BirdBorderSide;
  subtitle: string;
  shortDescription: string;
  bodySections: BirdBodySection[];
  culturalNote?: string;
  bestSeenAt?: string[];
  relatedBirdIds: ID[];
  relatedResourceIds?: ID[];
  relatedArticleIds: ID[];
  image: ImageRef;
  isFlagship: boolean;
  isStub: boolean;
}

// ----------------------------------------------------------------------------
// Maachhe Bhaate — fish & dal of Bengal
// ----------------------------------------------------------------------------
export type FishWaterType =
  | 'freshwater'
  | 'brackish-estuarine'
  | 'sea'
  | 'dried';

export type FishGroup =
  | 'carp'
  | 'catfish'
  | 'prawn-shellfish'
  | 'hilsa-herring'
  | 'perch'
  | 'featherback'
  | 'sea-fish'
  | 'dried-fish';

export type FishSeason = 'monsoon' | 'winter' | 'summer' | 'year-round';

export type FishBorderSide = 'west-bengal-india' | 'bangladesh' | 'across-bengal';

export interface FoodBodySection {
  heading: string;
  body: string;
}

export interface Fish {
  id: ID;
  slug: string;
  name: string;
  nameBengali?: string;
  alsoKnownAs?: string;
  group: FishGroup;
  waterType: FishWaterType;
  season: FishSeason;
  borderSide: FishBorderSide;
  subtitle: string;
  shortDescription: string;
  bodySections: FoodBodySection[];
  signatureDishes?: string[];
  culturalNote?: string;
  relatedFishIds: ID[];
  relatedArticleIds: ID[];
  image: ImageRef;
  isFlagship: boolean;
  isStub: boolean;
}

export interface Dal {
  id: ID;
  slug: string;
  name: string;
  nameBengali?: string;
  alsoKnownAs?: string;
  subtitle: string;
  shortDescription: string;
  bodySections: FoodBodySection[];
  typicalPreparation?: string;
  signatureDishes?: string[];
  culturalNote?: string;
  relatedDalIds: ID[];
  relatedArticleIds: ID[];
  image: ImageRef;
  isFlagship: boolean;
  isStub: boolean;
}

// ----------------------------------------------------------------------------
// Rannaghar — dishes of Bengal (capstone food hub)
// ----------------------------------------------------------------------------
export type MealType =
  | 'breakfast'
  | 'lunch'
  | 'snack'
  | 'dinner'
  | 'sweet'
  | 'drink'
  | 'condiment';

export type Diet = 'vegan' | 'vegetarian' | 'non-vegetarian';

export type Allergen =
  | 'dairy'
  | 'tree-nuts'
  | 'peanuts'
  | 'mustard'
  | 'fish'
  | 'shellfish'
  | 'egg'
  | 'gluten'
  | 'sesame'
  | 'soy'
  | 'coconut';

export type DishKind =
  | 'home-dish'
  | 'street-food'
  | 'mishti'
  | 'drink'
  | 'condiment';

export type FoodSeason = 'monsoon' | 'winter' | 'summer' | 'year-round';

export interface RecipeStep {
  step: number;
  text: string;
}

export interface Dish {
  id: ID;
  slug: string;
  name: string;
  nameBengali?: string;
  alsoKnownAs?: string;
  kind: DishKind;
  mealTypes: MealType[];
  diet: Diet;
  season: FoodSeason;
  subtitle: string;
  shortDescription: string;
  bodySections: FoodBodySection[];
  hasRecipe: boolean;
  ingredients?: string[];
  steps?: RecipeStep[];
  servesNote?: string;
  allergens: Allergen[];
  mayContain?: Allergen[];
  allergenNote?: string;
  fishIds?: ID[];
  dalIds?: ID[];
  floraIds?: ID[];
  relatedDishIds: ID[];
  relatedFestivalIds?: ID[];
  relatedArticleIds: ID[];
  image: ImageRef;
  isFlagship: boolean;
  isStub: boolean;
}

export interface DishIngredientLinkIds {
  fishIds: ID[];
  dalIds: ID[];
  floraIds: ID[];
}

export interface DishIngredientLinks {
  fish: Fish[];
  dals: Dal[];
  flora: FloraItem[];
}

// ----------------------------------------------------------------------------
// Hastoshilpo — arts & crafts of Bengal
// ----------------------------------------------------------------------------
export type CraftMedium =
  | 'textile-embroidery'
  | 'metal'
  | 'painting'
  | 'clay-terracotta'
  | 'spongewood'
  | 'shell'
  | 'wood'
  | 'fibre';

export type CraftBorderSide = 'west-bengal-india' | 'bangladesh' | 'across-bengal';

export type CraftCreatorTag = Extract<
  SpecialtyTagId,
  'kantha' | 'dokra' | 'patachitra' | 'terracotta' | 'sholapith' | 'conch-jewelry'
>;

export interface CraftBodySection {
  heading: string;
  body: string;
}

export interface Craft {
  id: ID;
  slug: string;
  name: string;
  nameBengali?: string;
  alsoKnownAs?: string;
  medium: CraftMedium;
  borderSide: CraftBorderSide;
  originRegion?: string;
  subtitle: string;
  shortDescription: string;
  bodySections: CraftBodySection[];
  technique?: string;
  modernUses?: string[];
  creatorTags?: CraftCreatorTag[];
  relatedCraftIds: ID[];
  relatedSareeIds?: ID[];
  relatedBuildingIds?: ID[];
  relatedArticleIds: ID[];
  heroImage: ImageRef;
  isFlagship: boolean;
  isStub: boolean;
}

// ----------------------------------------------------------------------------
// Saaj o Poshak — attire & adornment of Bengal
// ----------------------------------------------------------------------------
export type AttireCategory = 'clothing' | 'jewellery' | 'adornment';

export type AttireWornBy = 'women' | 'men' | 'all' | 'bride' | 'groom';

export type AttireBorderSide = 'west-bengal-india' | 'bangladesh' | 'across-bengal';

export interface AttireBodySection {
  heading: string;
  body: string;
}

export interface AttireItem {
  id: ID;
  slug: string;
  name: string;
  nameBengali?: string;
  alsoKnownAs?: string;
  category: AttireCategory;
  wornBy: AttireWornBy;
  borderSide: AttireBorderSide;
  isBridal?: boolean;
  isMarriedSymbol?: boolean;
  subtitle: string;
  shortDescription: string;
  bodySections: AttireBodySection[];
  materialNote?: string;
  culturalNote?: string;
  relatedCraftIds?: ID[];
  relatedSareeIds?: ID[];
  relatedItemIds: ID[];
  relatedFestivalIds?: ID[];
  relatedArticleIds: ID[];
  image: ImageRef;
  isFlagship: boolean;
  isStub: boolean;
}

// ----------------------------------------------------------------------------
// Boi — landmark books of Bengal
// ----------------------------------------------------------------------------
export type LiteraryForm =
  | 'novel'
  | 'poetry'
  | 'short-story-collection'
  | 'play'
  | 'essay'
  | 'memoir'
  | 'childrens';

export type BookBorderSide =
  | 'west-bengal-india'
  | 'bangladesh'
  | 'undivided-bengal'
  | 'across-bengal';

export interface BookBodySection {
  heading: string;
  body: string;
}

export interface Book {
  id: ID;
  slug: string;
  title: string;
  titleBengali?: string;
  englishTitle?: string;
  form: LiteraryForm;
  year?: string;
  borderSide: BookBorderSide;
  authorId: ID;
  authorName: string;
  subtitle: string;
  shortDescription: string;
  bodySections: BookBodySection[];
  significance?: string;
  adaptedFilmIds?: ID[];
  relatedBookIds: ID[];
  relatedArticleIds: ID[];
  coverImage: ImageRef;
  isFlagship: boolean;
  isStub: boolean;
}

// ----------------------------------------------------------------------------
// Cholochitro — cinema of Bengal
// ----------------------------------------------------------------------------
export type CinemaEntryType = 'film' | 'movement-era';

export type CinemaBorderSide =
  | 'west-bengal-india'
  | 'bangladesh'
  | 'undivided-bengal'
  | 'across-bengal';

export interface CinemaBodySection {
  heading: string;
  body: string;
}

export interface CinemaEntry {
  id: ID;
  slug: string;
  type: CinemaEntryType;
  title: string;
  titleBengali?: string;
  englishTitle?: string;
  year?: string;
  borderSide: CinemaBorderSide;
  subtitle: string;
  shortDescription: string;
  bodySections: CinemaBodySection[];
  directorIconId?: ID;
  directorName?: string;
  castIconIds?: ID[];
  sourceBookId?: ID;
  honours?: string[];
  relatedCinemaIds: ID[];
  relatedArticleIds: ID[];
  posterImage: ImageRef;
  isFlagship: boolean;
  isStub: boolean;
}

// ----------------------------------------------------------------------------
// Bangabda — Bengali calendar & ritual year
// ----------------------------------------------------------------------------
export type RituId =
  | 'grishmo'
  | 'borsha'
  | 'sharat'
  | 'hemonto'
  | 'sheet'
  | 'boshonto';

export interface Ritu {
  id: RituId;
  name: string;
  nameBengali: string;
  englishName: string;
  monthIds: ID[];
  gregorianSpan: string;
  subtitle: string;
  description: string;
  floraIds?: ID[];
  fishIds?: ID[];
  festivalIds?: ID[];
}

export interface BengaliMonth {
  id: ID;
  order: number;
  name: string;
  nameBengali: string;
  ritu: RituId;
  gregorianSpan: string;
  highlight: string;
  festivalIds?: ID[];
}

export type RitualKind =
  | 'seasonal-observance'
  | 'rite-of-passage'
  | 'family-custom'
  | 'broto'
  | 'daily-ritual';

export type RitualFaith = 'hindu' | 'secular' | 'across-communities';

export interface RitualBodySection {
  heading: string;
  body: string;
}

export interface Ritual {
  id: ID;
  slug: string;
  name: string;
  nameBengali?: string;
  kind: RitualKind;
  faith: RitualFaith;
  timing: string;
  subtitle: string;
  shortDescription: string;
  bodySections: RitualBodySection[];
  relatedMonthId?: ID;
  relatedRituId?: RituId;
  relatedFestivalIds?: ID[];
  relatedArticleIds: ID[];
  image: ImageRef;
  isFlagship: boolean;
  isStub: boolean;
}

export interface CalendarOverview {
  name: string;
  nameBengali: string;
  era: string;
  newYearDay: string;
  yearFormula: string;
  oneLine: string;
  note: string;
}

export type PanjikaSystem = 'surya-siddhanta' | 'bisuddha-siddhanta';

export interface PanjikaEdition {
  name: string;
  nameBengali?: string;
  founded?: string;
  system: PanjikaSystem;
  note: string;
}

export interface PanjikaBodySection {
  heading: string;
  body: string;
}

export interface Panjika {
  id: ID;
  slug: string;
  name: string;
  nameBengali: string;
  subtitle: string;
  shortDescription: string;
  fiveElements: string[];
  bodySections: PanjikaBodySection[];
  editions: PanjikaEdition[];
  scopeNote: string;
  relatedFestivalIds: ID[];
}

// ----------------------------------------------------------------------------
// Bhraman — places & attractions
// ----------------------------------------------------------------------------
export type PlaceType =
  | 'monument'
  | 'cultural-hub'
  | 'neighbourhood'
  | 'market'
  | 'religious-site'
  | 'museum'
  | 'park-nature'
  | 'riverfront'
  | 'city'
  | 'hill-station'
  | 'heritage-town'
  | 'wildlife';

export type PlaceRegion =
  | 'kolkata'
  | 'north-bengal'
  | 'sundarbans-south'
  | 'shantiniketan-birbhum'
  | 'murshidabad'
  | 'bishnupur-bankura'
  | 'coastal'
  | 'across-bengal';

export interface PlaceBodySection {
  heading: string;
  body: string;
}

export interface Place {
  id: ID;
  slug: string;
  name: string;
  nameBengali?: string;
  alsoKnownAs?: string;
  type: PlaceType;
  region: PlaceRegion;
  parentCity?: string;
  subtitle: string;
  shortDescription: string;
  bodySections: PlaceBodySection[];
  whyVisit: string;
  howToReach: string;
  bestTime?: string;
  suggestedDuration?: string;
  relatedBuildingId?: ID;
  relatedSiteId?: ID;
  relatedResourceId?: ID;
  relatedFestivalIds?: ID[];
  relatedPlaceIds: ID[];
  relatedArticleIds: ID[];
  heroImage: ImageRef;
  isFlagship: boolean;
  isStub: boolean;
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
