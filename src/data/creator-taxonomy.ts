/**
 * Creator taxonomy v2 — single source of truth for categories, specialty tags,
 * and services. Consumed by services and onboarding; screens never import this
 * directly.
 *
 * To add a specialty tag: add one key under the category's specialtyTags object.
 */

export const CREATOR_TAXONOMY = {
  'visual-surface': {
    label: 'Visual & Surface Artists',
    description:
      'Painters, illustrators, and muralists working in Bengal’s visual traditions — from kolka and alpona to Kalighat and contemporary fine art.',
    specialtyTags: {
      'kolka-alpona': {
        label: 'Kolka / Alpona',
        description:
          'The paisley vine and rice-paste floor-painting motif tradition — AklaCholo’s signature visual language.',
      },
      patachitra: {
        label: 'Patachitra / Scroll Painters',
        description:
          'Narrative scroll painting — a famous Bengal folk form telling myth and story in sequential panels.',
      },
      kalighat: {
        label: 'Kalighat Painters',
        description:
          'The bold, satirical Kolkata painting style born near the Kalighat temple.',
      },
      'fine-art': {
        label: 'Fine Artists / Painters',
        description:
          'Contemporary and traditional painters working on canvas, paper, and mixed media.',
      },
      'illustration-digital': {
        label: 'Illustrators & Digital Artists',
        description:
          'Book, editorial, and screen-based illustration — hand-drawn or digital.',
      },
      muralist: {
        label: 'Muralists',
        description:
          'Alpona and motif work at architectural scale — walls, ceilings, and ceremonial spaces.',
      },
    },
  },

  'textile-fiber': {
    label: 'Textile & Fiber Artisans',
    description:
      'Weavers, embroiderers, dyers, and saree makers — Bengal’s living textile heritage.',
    specialtyTags: {
      kantha: {
        label: 'Kantha Embroiderers',
        description:
          'The running-stitch quilt tradition — layered cotton reworked into narrative cloth.',
      },
      jamdani: {
        label: 'Jamdani Weavers',
        description:
          'Supplementary-weft muslin weaving — UNESCO-recognized intangible heritage.',
      },
      tant: {
        label: 'Tant Weavers',
        description:
          'Fine cotton handloom from West Bengal — light, airy everyday sarees.',
      },
      baluchari: {
        label: 'Baluchari Weavers',
        description:
          'Silk sarees woven with narrative pallu scenes from myth and court life.',
      },
      muslin: {
        label: 'Muslin Weavers',
        description:
          'The legendary fine cotton once woven for emperors — a lost-and-revived art.',
      },
      'block-print-dye': {
        label: 'Block Printers & Natural Dyers',
        description:
          'Hand-carved blocks, indigo vats, and plant-based colour on cloth.',
      },
      batik: {
        label: 'Batik Artists',
        description:
          'Wax-resist dyeing on fabric — contemporary and folk-inspired surface pattern.',
      },
      'saree-artisan': {
        label: 'Saree Artisans',
        description:
          'Hand-painted, embroidered, and embellished sarees — wearable art.',
      },
    },
  },

  'clay-metal-material': {
    label: 'Clay, Metal & Material Crafts',
    description:
      'Sculptors and makers working earth, metal, shell, and wood — temple craft to studio objects.',
    specialtyTags: {
      terracotta: {
        label: 'Terracotta Artisans',
        description:
          'Bishnupur panels, Panchmura horses, and red-clay relief in the temple tradition.',
      },
      'kumartuli-sculptor': {
        label: 'Kumartuli Idol Sculptors',
        description:
          'Clay-idol makers who sculpt Durga and festival deities from river clay in Kumartuli.',
      },
      sholapith: {
        label: 'Shola / Sholapith Artists',
        description:
          'White pith craft for idol decoration, headpieces, and ritual ornament.',
      },
      pottery: {
        label: 'Potters / Ceramicists',
        description:
          'Functional and decorative ware — wheel-thrown, moulded, and wood-fired.',
      },
      dokra: {
        label: 'Dokra Metal Casters',
        description:
          'Ancient lost-wax bronze casting — the thread-wound texture of tribal metalwork.',
      },
      'conch-jewelry': {
        label: 'Conch Shell & Jewelry Artisans',
        description:
          'Shankha bangles, filigree, and ornament — culturally significant Bengali jewelry.',
      },
      woodcarving: {
        label: 'Woodcarvers',
        description:
          'Carved panels, toys, and ritual objects in hardwood and softwood.',
      },
    },
  },

  'performing-sonic': {
    label: 'Performing & Sonic Arts',
    description:
      'Musicians, drummers, dancers, and theatre artists carrying Bengal’s sonic and stage traditions.',
    specialtyTags: {
      'rabindra-sangeet': {
        label: 'Rabindra Sangeet',
        description:
          'Tagore’s song repertoire — poetry set to melody, central to Bengali cultural life.',
      },
      'nazrul-geeti': {
        label: 'Nazrul Geeti',
        description:
          'Kazi Nazrul Islam’s revolutionary and devotional song tradition.',
      },
      baul: {
        label: 'Baul Musicians',
        description:
          'Wandering mystic minstrels — philosophy sung with ektara and dugdugi.',
      },
      'classical-music': {
        label: 'Classical Musicians',
        description:
          'Hindustani and Bengali classical — raga, dhrupad, and gharana lineages.',
      },
      'singers-instrumentalists': {
        label: 'Singers & Instrumentalists',
        description:
          'Contemporary and traditional vocalists and instrumental performers.',
      },
      dhaki: {
        label: 'Dhakis',
        description:
          'Traditional dhak drummers — the heartbeat of Durga Puja processions and festival ritual.',
      },
      dance: {
        label: 'Dancers',
        description:
          'Classical (Kathak, Manipuri, Bharatanatyam in Bengal) and folk dance forms.',
      },
      'theatre-jatra': {
        label: 'Theatre / Jatra Performers',
        description:
          'Proscenium theatre and travelling jatra — Bengal’s popular stage tradition.',
      },
    },
  },

  'words-story': {
    label: 'Words & Story',
    description:
      'Writers, poets, storytellers, and translators keeping Bengal’s literary voice alive.',
    specialtyTags: {
      'writers-poets': {
        label: 'Writers & Poets',
        description:
          'Fiction, non-fiction, and poetry in Bengali and English.',
      },
      storytellers: {
        label: 'Storytellers',
        description:
          'Folklore, oral tradition, and live narrative performance.',
      },
      translators: {
        label: 'Translators',
        description:
          'Bengali to/from other languages — making literature cross borders.',
      },
    },
  },

  'modern-digital': {
    label: 'Modern / Digital Creators',
    description:
      'Animators, designers, photographers, and installation artists — heritage motifs in modern media.',
    specialtyTags: {
      animation: {
        label: 'Animators',
        description:
          'Motion design and character animation — including AI-assisted workflows.',
      },
      'graphic-brand-design': {
        label: 'Graphic & Brand Designers',
        description:
          'Visual identity, packaging, and brand systems with Bengali aesthetic sensibility.',
      },
      'photography-film': {
        label: 'Photographers & Filmmakers',
        description:
          'Documentary, portrait, and narrative film rooted in Bengal.',
      },
      'pattern-surface-design': {
        label: 'Pattern / Surface Designers',
        description:
          'Repeat patterns and surface art for textiles, products, and homeware.',
      },
      'light-installation': {
        label: 'Light & Installation Artists',
        description:
          'Pandal lighting, festival installations, and immersive spatial design.',
      },
    },
  },

  culinary: {
    label: 'Culinary',
    description:
      'Chefs and cooking teachers sharing Bengali food as living culture.',
    specialtyTags: {
      'bengali-chef-teacher': {
        label: 'Bengali Chefs & Cooking Teachers',
        description:
          'Regional home cooking, festival food, and hands-on culinary instruction.',
      },
    },
  },
} as const;

export const CREATOR_SERVICES = [
  'commission',
  'teach',
  'perform',
  'sell-products',
] as const;

export const CREATOR_SERVICE_META = {
  commission: {
    label: 'Commissions',
    description: 'Custom work made to order — art, craft, or design.',
  },
  teach: {
    label: 'Classes & workshops',
    description:
      'Teaching across any category — not a separate taxonomy bucket.',
  },
  perform: {
    label: 'Live performance',
    description:
      'Concerts, dhak, dance, theatre, storytelling, and pop-up events.',
  },
  'sell-products': {
    label: 'Shop products',
    description: 'Physical pieces listed in Treasures of Bengal.',
  },
} as const;

export type CreatorCategoryId = keyof typeof CREATOR_TAXONOMY;

export type SpecialtyTagId = {
  [C in CreatorCategoryId]: keyof typeof CREATOR_TAXONOMY[C]['specialtyTags'];
}[CreatorCategoryId];

export type CreatorService = (typeof CREATOR_SERVICES)[number];

type TagMeta = { label: string; description: string };

const TAG_TO_CATEGORY = (() => {
  const map = new Map<SpecialtyTagId, CreatorCategoryId>();
  for (const categoryId of Object.keys(CREATOR_TAXONOMY) as CreatorCategoryId[]) {
    for (const tag of Object.keys(
      CREATOR_TAXONOMY[categoryId].specialtyTags,
    ) as SpecialtyTagId[]) {
      map.set(tag, categoryId);
    }
  }
  return map;
})();

export function getCategoryLabel(id: CreatorCategoryId): string {
  return CREATOR_TAXONOMY[id].label;
}

export function getCategoryDescription(id: CreatorCategoryId): string {
  return CREATOR_TAXONOMY[id].description;
}

export function getTagMeta(tag: SpecialtyTagId): TagMeta {
  const categoryId = categoryForTag(tag);
  if (!categoryId) {
    return { label: String(tag), description: '' };
  }
  const tags = CREATOR_TAXONOMY[categoryId].specialtyTags;
  return tags[tag as keyof typeof tags] as TagMeta;
}

export function getTagLabel(tag: SpecialtyTagId): string {
  return getTagMeta(tag).label;
}

export function getTagDescription(tag: SpecialtyTagId): string {
  return getTagMeta(tag).description;
}

export function getServiceLabel(service: CreatorService): string {
  return CREATOR_SERVICE_META[service].label;
}

export function getServiceDescription(service: CreatorService): string {
  return CREATOR_SERVICE_META[service].description;
}

export function categoryForTag(tag: SpecialtyTagId): CreatorCategoryId | undefined {
  return TAG_TO_CATEGORY.get(tag);
}

export function tagsForCategory(
  categoryId: CreatorCategoryId,
): SpecialtyTagId[] {
  return Object.keys(
    CREATOR_TAXONOMY[categoryId].specialtyTags,
  ) as SpecialtyTagId[];
}

export function allCategoryIds(): CreatorCategoryId[] {
  return Object.keys(CREATOR_TAXONOMY) as CreatorCategoryId[];
}

export function isTagAllowedForCategories(
  categories: readonly CreatorCategoryId[],
  tag: SpecialtyTagId,
): boolean {
  const owner = categoryForTag(tag);
  return owner !== undefined && categories.includes(owner);
}

export function allSpecialtyTags(): SpecialtyTagId[] {
  return allCategoryIds().flatMap((id) => tagsForCategory(id));
}

export function allCategories(): {
  id: CreatorCategoryId;
  label: string;
  description: string;
}[] {
  return allCategoryIds().map((id) => ({
    id,
    label: getCategoryLabel(id),
    description: getCategoryDescription(id),
  }));
}
