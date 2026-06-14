import type { Creator } from '@/types';
import { img } from '@/constants/images';

/**
 * Creators span the full spectrum AklaCholo celebrates: village artisans,
 * studio designers, animators, and teachers. `discipline` is free-text;
 * `disciplineType` buckets them for filtering.
 */
export const creators: Creator[] = [
  {
    id: 'creator_anjali',
    name: 'Anjali Dasgupta',
    discipline: 'Kantha embroidery artisan',
    disciplineType: 'physical',
    region: 'Shantiniketan',
    avatar: img('anjali-portrait', 'Anjali Dasgupta', { width: 400, height: 400 }),
    bio: 'Third-generation kantha stitcher turning worn cotton into running-stitch landscapes.',
    story:
      'Anjali learned the kantha running stitch at her grandmother’s knee, where old saris were never discarded but layered and re-stitched into nakshi kantha quilts. Today she leads a collective of forty women in Shantiniketan, translating folk motifs — fish, lotus, the curling kolka — into contemporary throws and wall pieces while keeping every stitch by hand.',
    portfolio: [
      img('anjali-work-1', 'Kantha quilt detail', { aspectRatio: 0.8 }),
      img('anjali-work-2', 'Running stitch close-up', { aspectRatio: 1 }),
      img('anjali-work-3', 'Embroidered cushion', { aspectRatio: 0.75 }),
      img('anjali-work-4', 'Folk motif sampler', { aspectRatio: 1.2 }),
    ],
    productIds: ['prod_kantha_throw', 'prod_kantha_cushion'],
    socials: [{ label: 'Instagram', url: 'https://instagram.com' }],
  },
  {
    id: 'creator_rahim',
    name: 'Rahim Sheikh',
    discipline: 'Terracotta temple sculptor',
    disciplineType: 'physical',
    region: 'Bishnupur',
    avatar: img('rahim-portrait', 'Rahim Sheikh', { width: 400, height: 400 }),
    bio: 'Shapes Bishnupur’s signature red clay into tiles and reliefs in the temple tradition.',
    story:
      'Rahim’s family has worked the iron-rich clay of Bishnupur for generations, the same earth that built the town’s 17th-century terracotta temples. He presses, carves, and wood-fires each panel, reviving panel scenes — Ramayana friezes, dancing figures, lotus medallions — for modern walls and tabletops.',
    portfolio: [
      img('rahim-work-1', 'Terracotta relief panel', { aspectRatio: 1.3 }),
      img('rahim-work-2', 'Clay tile detail', { aspectRatio: 1 }),
      img('rahim-work-3', 'Fired terracotta horse', { aspectRatio: 0.8 }),
    ],
    productIds: ['prod_terracotta_panel', 'prod_terracotta_planter'],
  },
  {
    id: 'creator_meera',
    name: 'Meera Bose',
    discipline: '3D motion & pattern designer',
    disciplineType: 'digital',
    region: 'Kolkata',
    avatar: img('meera-portrait', 'Meera Bose', { width: 400, height: 400 }),
    bio: 'Animates kolka motifs into looping digital art and surface patterns.',
    story:
      'Trained in graphic design and self-taught in 3D, Meera takes the flat vocabulary of Bengali folk art and gives it motion — paisleys that bloom and breathe in loops, generative borders, and printable surface patterns licensed for homeware. Her studio bridges the village loom and the screen.',
    portfolio: [
      img('meera-work-1', 'Animated kolka loop still', { aspectRatio: 1 }),
      img('meera-work-2', 'Generative border pattern', { aspectRatio: 1.6 }),
      img('meera-work-3', 'Surface pattern tile', { aspectRatio: 1 }),
      img('meera-work-4', 'Digital paisley study', { aspectRatio: 0.9 }),
    ],
    productIds: ['prod_motif_print', 'prod_stationery_set'],
    socials: [
      { label: 'Behance', url: 'https://behance.net' },
      { label: 'Instagram', url: 'https://instagram.com' },
    ],
  },
  {
    id: 'creator_sukanta',
    name: 'Sukanta Pal',
    discipline: 'Dokra metal caster',
    disciplineType: 'physical',
    region: 'Nadia',
    avatar: img('sukanta-portrait', 'Sukanta Pal', { width: 400, height: 400 }),
    bio: 'Lost-wax brass caster keeping the 4,000-year-old dokra craft alive.',
    story:
      'Sukanta practises dokra — the ancient lost-wax casting that produces brass figures with a distinctive thread-wound texture. Each piece is modelled in wax thread over a clay core, encased, and cast in a single pour. He reinterprets tribal forms as candle stands, bowls, and small sculptures.',
    portfolio: [
      img('sukanta-work-1', 'Dokra brass figure', { aspectRatio: 0.7 }),
      img('sukanta-work-2', 'Cast brass bowl', { aspectRatio: 1.1 }),
      img('sukanta-work-3', 'Lost-wax detail', { aspectRatio: 1 }),
    ],
    productIds: ['prod_dokra_bowl'],
  },
  {
    id: 'creator_tania',
    name: 'Tania Rahman',
    discipline: 'Craft historian & teacher',
    disciplineType: 'teacher',
    region: 'Dhaka',
    avatar: img('tania-portrait', 'Tania Rahman', { width: 400, height: 400 }),
    bio: 'Writes and teaches the histories behind Bengal’s living crafts.',
    story:
      'Tania researches and teaches the social history of Bengali craft — who made these objects, why, and what the motifs meant. She runs workshops connecting makers with new audiences and authors much of the “Magic of Bengal” story content, ensuring the heritage is documented as faithfully as it is sold.',
    portfolio: [
      img('tania-work-1', 'Workshop session', { aspectRatio: 1.4 }),
      img('tania-work-2', 'Archive of motifs', { aspectRatio: 1 }),
    ],
    productIds: [],
    socials: [{ label: 'Website', url: 'https://example.com' }],
  },
];
