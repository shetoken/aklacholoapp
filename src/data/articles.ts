import type { Article } from '@/types';
import { img } from '@/constants/images';

/**
 * "The Magic of Bengal" — storytelling content surfaced WITHIN Discover.
 *
 * RETRIEVAL-READY: each article carries a one-paragraph `summary` and an array
 * of `sections`, every section with a STABLE `id`. In Phase 1.5 a grounded chat
 * assistant can chunk on sections, retrieve the relevant ones, and answer using
 * ONLY this content — citing `${article.id}#${section.id}`. No chat is built
 * now; this is purely the clean, typed content layer it will read from.
 */
export const articles: Article[] = [
  // ==========================================================================
  // 1) What is Kolka?
  // ==========================================================================
  {
    id: 'art_kolka',
    slug: 'what-is-kolka',
    title: 'What is Kolka?',
    subtitle: 'The motif at the heart of the brand',
    heroImage: img('article-kolka-hero', 'Kolka paisley motif', {
      width: 1200,
      height: 800,
      aspectRatio: 1.5,
    }),
    readingMinutes: 5,
    summary:
      'Kolka is the Bengali name for the teardrop paisley motif — a curling bud that appears on sari borders, kantha quilts, temple walls, and alpona floor art across Bengal. More than decoration, it is a shared visual language of growth and abundance that ties the region’s crafts together, and it is the motif AklaCholo is built around.',
    sections: [
      {
        id: 'sec_definition',
        heading: 'A bud, a flame, a teardrop',
        body: 'Kolka (কলকা) is the Bengali word for the curling, teardrop-shaped motif the wider world knows as “paisley.” At its simplest it is a single droplet with a hooked tip, like a bud about to open or a flame bending in the wind. You will find it curled into the corner of a sari, marching along a border, blooming at the centre of a kantha quilt, and carved into the red clay of a temple wall. It is, quietly, everywhere in Bengal.',
        pullQuote: 'A single droplet with a hooked tip — a bud about to open.',
        image: img('article-kolka-detail', 'Single kolka bud detail', {
          aspectRatio: 1.4,
        }),
      },
      {
        id: 'sec_origins',
        heading: 'Where the shape comes from',
        body: 'The motif’s deep roots reach back to ancient Persia, where the boteh — a cypress-and-floral form symbolising life and eternity — traveled along trade routes into South Asia. In Bengal it was absorbed and renamed kolka, reshaped by local hands into something softer and more vegetal. The English word “paisley” came much later, borrowed from the Scottish mill town that mass-printed the pattern in the 1800s. But the kolka of Bengal was never a factory print; it was drawn, stitched, and carved by hand, and it carried its own meanings.',
      },
      {
        id: 'sec_meaning',
        heading: 'What it means',
        body: 'Read as a bud or a sprouting seed, the kolka stands for growth, fertility, and abundance — fitting for a fertile delta shaped by its rivers. Strung along a vine (the “lata”), it becomes the endless flow of life; mirrored and repeated in a border, it frames and protects. It is rarely just ornament. A grandmother stitching a kolka into a child’s kantha quilt is wishing that child a flourishing life.',
        pullQuote: 'A grandmother stitching a kolka is wishing the child a flourishing life.',
      },
      {
        id: 'sec_where_you_see_it',
        heading: 'Where you’ll see it',
        body: 'The kolka is a connective thread across nearly every Bengali craft. It edges the par (border) of a Tangail or Baluchari sari. It anchors the freehand running stitch of nakshi kantha. It is carved into the terracotta temples of Bishnupur and pressed into dokra brass. It is drawn in rice-paste alpona on courtyard floors before a festival. Because the same motif recurs across media, learning to see the kolka is learning to read Bengal’s visual language.',
        image: img('article-kolka-across', 'Kolka across crafts', { aspectRatio: 1.5 }),
      },
      {
        id: 'sec_in_aklacholo',
        heading: 'Why AklaCholo begins here',
        body: 'AklaCholo takes the kolka as its first motif because it is the shape that ties everything together — heritage and modern, village loom and digital screen, the physical artisan and the animator. When you explore patterns and palettes in the app’s motif selector, or notice a subtle border on a card, that is the kolka at work: Bengal, everywhere.',
      },
    ],
    relatedCollectionIds: ['col_modern_kolka', 'col_kantha_revival'],
    relatedCreatorIds: ['creator_meera', 'creator_anjali', 'creator_tania'],
    relatedProductIds: ['prod_motif_print', 'prod_kantha_throw', 'prod_stationery_set'],
    tags: ['kolka', 'paisley', 'motif', 'heritage', 'symbolism'],
  },

  // ==========================================================================
  // 2) The Story of Kantha
  // ==========================================================================
  {
    id: 'art_kantha',
    slug: 'story-of-kantha',
    title: 'The Story of Kantha',
    subtitle: 'Bengal’s running-stitch embroidery tradition',
    heroImage: img('article-kantha-hero', 'Kantha embroidery quilt', {
      width: 1200,
      height: 800,
      aspectRatio: 1.5,
    }),
    readingMinutes: 6,
    summary:
      'Kantha is Bengal’s running-stitch embroidery, traditionally made by layering and stitching worn cotton saris into quilts. Born of thrift and made almost entirely by women, the most elaborate “nakshi kantha” are storytelling quilts dense with folk motifs. Today the craft has been revived around Shantiniketan as both heirloom and livelihood.',
    sections: [
      {
        id: 'sec_what_is_kantha',
        heading: 'A quilt made of memory',
        body: 'Kantha (কাঁথা) is at heart a simple thing: several layers of soft, worn cotton — usually old saris and dhotis — held together by rows of small running stitches. That humble running stitch, repeated across the whole cloth, gives kantha its signature rippled, slightly puckered texture. What begins as a way to make warm bedding from cloth too worn to wear becomes, in skilled hands, an art form.',
        pullQuote: 'Cloth too worn to wear, made warm and beautiful again.',
        image: img('article-kantha-stitch', 'Running stitch close-up', {
          aspectRatio: 1.3,
        }),
      },
      {
        id: 'sec_born_of_thrift',
        heading: 'Born of thrift',
        body: 'In rural Bengal nothing was discarded. A sari worn soft over years of washing was too thin to wear but too soft to throw away — so it was layered with others and stitched into a kantha. The thread itself was often pulled from the coloured borders of those same old saris. Kantha is, in this sense, one of the world’s oldest traditions of upcycling: a domestic craft of making-do that quietly turned into making-beautiful.',
      },
      {
        id: 'sec_nakshi',
        heading: 'Nakshi kantha — the storytelling quilt',
        body: 'The most elaborate kanthas are called nakshi kantha, from “naksha,” meaning design. These are dense with embroidered motifs — the lotus, fish, the tree of life, sun and moon, scenes of village life, and of course the curling kolka. A maker would often place a large lotus or kolka medallion at the centre and let the design radiate outward, filling the field with symbols of fertility, protection, and prosperity. A single quilt could take a year, stitched in spare hours, and read almost like a diary.',
        pullQuote: 'A single quilt could take a year — and read almost like a diary.',
        image: img('article-kantha-nakshi', 'Nakshi kantha motifs', {
          aspectRatio: 1.5,
        }),
      },
      {
        id: 'sec_womens_craft',
        heading: 'A craft made by women',
        body: 'Kantha was overwhelmingly women’s work, made not for sale but for the household — a quilt for a newborn, a gift for a daughter’s marriage, a wrap for a sacred book. Because it was domestic and unsigned, it went largely unrecorded by formal art history for generations. Yet within families these quilts were treasured heirlooms, carrying the hand and the well-wishes of the woman who made them.',
      },
      {
        id: 'sec_revival',
        heading: 'The revival',
        body: 'In the twentieth century, cultural movements centred on Shantiniketan — the arts community founded by Rabindranath Tagore — helped lift kantha from the household into the wider world. Today women’s collectives across West Bengal and Bangladesh produce kantha throws, scarves, and cushions both as heirloom craft and as vital income. The running stitch that once mended worn saris now sustains livelihoods, while keeping every piece resolutely handmade.',
        image: img('article-kantha-revival', 'Kantha makers collective', {
          aspectRatio: 1.4,
        }),
      },
    ],
    relatedCollectionIds: ['col_kantha_revival', 'col_everyday_bengal'],
    relatedCreatorIds: ['creator_anjali', 'creator_tania'],
    relatedProductIds: ['prod_kantha_throw', 'prod_kantha_cushion', 'prod_kantha_scarf'],
    tags: ['kantha', 'embroidery', 'textile', 'shantiniketan', 'craft'],
  },

  // ==========================================================================
  // 3) Terracotta of Bishnupur
  // ==========================================================================
  {
    id: 'art_terracotta',
    slug: 'terracotta-of-bishnupur',
    title: 'Terracotta of Bishnupur',
    subtitle: 'Bengal’s iconic temple-terracotta craft',
    heroImage: img('article-terracotta-hero', 'Bishnupur terracotta temple', {
      width: 1200,
      height: 800,
      aspectRatio: 1.5,
    }),
    readingMinutes: 6,
    summary:
      'Bishnupur, in West Bengal, is famous for temples built and decorated entirely in carved terracotta. Lacking local stone, its 17th-century Malla-dynasty rulers turned the region’s iron-rich clay into an architecture of fired earth, its walls covered with narrative panels. The craft survives today in the hands of local potter-sculptors making tiles, reliefs, and figures.',
    sections: [
      {
        id: 'sec_town_of_clay',
        heading: 'A town built of clay',
        body: 'Bishnupur, in the Bankura district of West Bengal, is unlike anywhere else in the region. Its skyline is dotted with temples whose every surface — walls, arches, towers — is sheathed in intricately carved terracotta. Where other regions built in stone, Bishnupur built in fired earth, and turned a humble material into one of India’s most distinctive architectural traditions.',
        pullQuote: 'Where other regions built in stone, Bishnupur built in fired earth.',
        image: img('article-terracotta-temple', 'Terracotta temple façade', {
          aspectRatio: 1.4,
        }),
      },
      {
        id: 'sec_malla_dynasty',
        heading: 'The Malla kings and a stoneless land',
        body: 'The great temples rose under the Malla dynasty, especially during its golden age in the 17th century. The Bengal delta has rich alluvial clay but almost no building stone — so the Mallas’ builders made a virtue of necessity. They perfected brick and terracotta construction, pressing and carving the local clay into ornamental panels and firing them to a warm, durable red. Temples like the Rasmancha, Shyamrai, and Jor Bangla remain standing testaments to this ingenuity.',
      },
      {
        id: 'sec_panels',
        heading: 'Walls that tell stories',
        body: 'What makes Bishnupur terracotta extraordinary is its narrative density. The temple walls are covered in panels depicting scenes from the Ramayana and Mahabharata, the life of Krishna, processions, hunts, boats, musicians, and everyday village life — alongside decorative borders of lotus and kolka. In a largely non-literate society, these fired-clay panels were a public scripture and chronicle, readable by anyone who walked past.',
        pullQuote: 'A public scripture, readable by anyone who walked past.',
        image: img('article-terracotta-panels', 'Narrative terracotta panels', {
          aspectRatio: 1.5,
        }),
      },
      {
        id: 'sec_making',
        heading: 'How it is made',
        body: 'The craft begins with the region’s fine, iron-rich clay, cleaned and kneaded to a smooth body. The artisan presses it into carved moulds or models and carves it freehand, then dries the piece slowly before firing. The iron content is what gives Bishnupur terracotta its characteristic deep red-orange when wood-fired. Beyond temple panels, the same hands produce the famous Bankura horse — a tall, stylised terracotta figure that has become a symbol of Bengali folk art itself.',
        image: img('article-terracotta-horse', 'Bankura terracotta horse', {
          aspectRatio: 0.9,
        }),
      },
      {
        id: 'sec_living_craft',
        heading: 'A living craft',
        body: 'Bishnupur terracotta is not a museum relic. Families of potter-sculptors still work the clay, supplying restoration work for the old temples and creating new pieces — wall panels, planters, tiles, and figures — for contemporary homes. Carrying a Geographical Indication tag that protects its origin, the craft continues to bring the temple wall into the living room, fired earth telling new stories.',
      },
    ],
    relatedCollectionIds: ['col_terracotta_tales', 'col_everyday_bengal'],
    relatedCreatorIds: ['creator_rahim', 'creator_tania'],
    relatedProductIds: ['prod_terracotta_panel', 'prod_terracotta_planter'],
    tags: ['terracotta', 'bishnupur', 'temple', 'malla', 'craft'],
  },
];
