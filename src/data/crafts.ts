/**
 * Hastoshilpo — arts & crafts of Bengal.
 *
 * Craft techniques and traditions. Makers cross-link via creatorTags.
 * Photography placeholders via img().
 */
import type { Craft } from '@/types';
import { img } from '@/constants/images';

export const crafts: Craft[] = [
  {
    id: 'craft-kantha',
    slug: 'kantha',
    name: 'Kantha',
    nameBengali: 'কাঁথা',
    alsoKnownAs: 'Nakshi Kantha (figured quilts)',
    medium: 'textile-embroidery',
    borderSide: 'across-bengal',
    originRegion: 'Across Bengal (esp. Bolpur/Birbhum, and Bangladesh)',
    subtitle: 'Running-stitch embroidery that turns old cloth into art.',
    shortDescription:
      'Bengal’s signature running-stitch embroidery, traditionally made by layering and stitching worn saris and dhotis into quilts. Figured quilts telling stories are called Nakshi Kantha.',
    bodySections: [
      {
        heading: 'Thrift turned into art',
        body:
          'Kantha began as a way to give old cloth new life — layered and quilted with simple running stitches. In the hands of village women it became a storytelling art, the Nakshi Kantha, dense with motifs of lotus, fish, vines, and folk tales.',
      },
      {
        heading: 'Kantha today',
        body:
          'The kantha stitch now adorns saris, dupattas, jackets, cushion covers and bags — one of Bengal’s most commercially vibrant living crafts.',
      },
    ],
    technique:
      'Layered cloth joined with running (kantha) stitch; motifs built up in coloured thread.',
    modernUses: ['Kantha saris & dupattas', 'jackets', 'cushion covers', 'bags', 'quilts'],
    creatorTags: ['kantha'],
    relatedCraftIds: ['craft-patachitra'],
    relatedSareeIds: ['saree-kantha-stitch'],
    relatedArticleIds: ['art_kantha'],
    heroImage: img('craft-kantha', 'Kantha embroidery', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'craft-dokra',
    slug: 'dokra',
    name: 'Dokra',
    nameBengali: 'ডোকরা',
    alsoKnownAs: 'Dhokra (lost-wax metal casting)',
    medium: 'metal',
    borderSide: 'across-bengal',
    originRegion: 'Bankura, Burdwan, Purulia (Bengal’s tribal belt)',
    subtitle: 'Ancient lost-wax metalcraft of folk figures.',
    shortDescription:
      'A tribal metal-casting craft using the ancient lost-wax (cire perdue) technique, producing distinctive folk figures — horses, elephants, deities, tribal forms — with a characteristic rough, woven surface.',
    bodySections: [
      {
        heading: 'Lost-wax, ancient craft',
        body:
          'In dokra, a clay core is wrapped in fine wax threads, coated in clay, then fired so the wax melts out and molten metal takes its place. Each piece is unique, the mould broken to release it — a technique thousands of years old.',
      },
    ],
    technique: 'Cire perdue (lost-wax) casting in brass/bronze over a clay core.',
    modernUses: ['Figurines', 'home décor', 'jewellery', 'lamps'],
    creatorTags: ['dokra'],
    relatedCraftIds: ['craft-terracotta'],
    relatedArticleIds: [],
    heroImage: img('craft-dokra', 'Dokra metal casting', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'craft-patachitra',
    slug: 'patachitra',
    name: 'Patachitra',
    nameBengali: 'পটচিত্র',
    alsoKnownAs: 'Pata scroll painting',
    medium: 'painting',
    borderSide: 'across-bengal',
    originRegion: 'Naya (Medinipur), Kalighat (Kolkata), Birbhum, Nabadwip',
    subtitle: 'Scroll paintings sung aloud by travelling patuas.',
    shortDescription:
      'Narrative scroll paintings made by the patua community, who paint epics and legends in natural colours and sing the tales as they unroll the scroll. Famous schools include Kalighat Patachitra and Medinipur Patachitra.',
    bodySections: [
      {
        heading: 'Painting that sings',
        body:
          'A patua paints a long scroll (pat) of linked panels and performs the story in song (pater gaan) as it unrolls. Made with vegetable and mineral colours, the tradition spans Durga Pat, Chalchitra, and the bold Kalighat style.',
      },
    ],
    technique: 'Hand-painted scrolls/panels in natural pigments; performed with narrative song.',
    modernUses: ['Wall art on canvas', 'greeting cards', 'painted apparel', 'décor'],
    creatorTags: ['patachitra'],
    relatedCraftIds: ['craft-kantha'],
    relatedArticleIds: [],
    heroImage: img('craft-patachitra', 'Patachitra scroll painting', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'craft-terracotta',
    slug: 'terracotta',
    name: 'Terracotta',
    nameBengali: 'পোড়ামাটি',
    alsoKnownAs: 'Pora-mati (fired clay)',
    medium: 'clay-terracotta',
    borderSide: 'across-bengal',
    originRegion: 'Bishnupur (Bankura) and across Bengal',
    subtitle: 'Bengal’s signature art of fired clay.',
    shortDescription:
      'The art of fired clay, from the famous terracotta temple panels of Bishnupur to votive horses, plaques, idols and kitchenware — perhaps Bengal’s most defining material craft.',
    bodySections: [
      {
        heading: 'Stories in clay',
        body:
          'With little stone available, Bengal turned to clay — and mastered it. The Bishnupur temples are clad in terracotta reliefs of gods and epics, while Bankura’s elongated terracotta horse has become an emblem of Bengali folk art.',
      },
    ],
    technique: 'Moulded/sculpted clay, fired to a deep red-brown.',
    modernUses: ['Bankura horse figurines', 'wall plaques', 'kitchenware', 'jewellery'],
    creatorTags: ['terracotta'],
    relatedCraftIds: ['craft-dokra'],
    relatedArticleIds: ['art_terracotta'],
    heroImage: img('craft-terracotta', 'Terracotta craft', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'craft-shola',
    slug: 'sholapith',
    name: 'Sholapith',
    nameBengali: 'শোলা',
    alsoKnownAs: 'Shola / spongewood craft',
    medium: 'spongewood',
    borderSide: 'across-bengal',
    subtitle: 'Delicate white craft — and the bridal crown.',
    shortDescription:
      'Intricate craft carved from shola, the milky-white spongewood of a marsh plant — used for delicate flowers, decorations, deity ornaments, and the ceremonial topor (groom’s crown) and mukut.',
    bodySections: [
      {
        heading: 'The white art',
        body:
          'Shola artisans carve the soft, paper-white pith into astonishingly delicate flowers, garlands, and the conical topor worn by Bengali grooms and the mukut crowns adorning Durga idols.',
      },
    ],
    technique: 'Hand-carving and shaping of soft shola pith into white decorative forms.',
    modernUses: ['Wedding topor & mukut', 'idol decoration', 'décor flowers'],
    creatorTags: ['sholapith'],
    relatedCraftIds: ['craft-conch-shell'],
    relatedArticleIds: [],
    heroImage: img('craft-shola', 'Sholapith craft', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'craft-conch-shell',
    slug: 'conch-shell-shankha',
    name: 'Conch-Shell Craft (Shankha)',
    nameBengali: 'শাঁখা শিল্প',
    alsoKnownAs: 'Shankha; makers = shankhakara',
    medium: 'shell',
    borderSide: 'across-bengal',
    subtitle: 'Sacred bangles carved from the conch.',
    shortDescription:
      'The craft of cutting, polishing and engraving marine conch shells — most famously into the sacred white shankha bangles worn by married Bengali Hindu women, and the conch blown in worship.',
    bodySections: [
      {
        heading: 'From sea to sacred',
        body:
          'Artisans called shankhakara saw, file, polish and engrave conch shells into the white shakha bangles central to Bengali marriage, as well as decorative carved conches used in ritual.',
      },
    ],
    technique: 'Cutting, polishing and engraving of conch shells into bangles and objects.',
    modernUses: ['Shakha bangles', 'engraved decorative conches', 'jewellery'],
    creatorTags: ['conch-jewelry'],
    relatedCraftIds: ['craft-shola'],
    relatedArticleIds: [],
    heroImage: img('craft-conch-shell', 'Conch-shell craft', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
];
