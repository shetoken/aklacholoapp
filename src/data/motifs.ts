import type { Motif, Palette } from '@/types';

/**
 * Kolka motif catalogue. `svgKey` maps to a registered SVG component in
 * components/brand/motifs/registry.tsx. Palettes draw from the brand theme.
 */

export const palettes: Palette[] = [
  {
    id: 'pal_terracotta_dusk',
    name: 'Terracotta Dusk',
    colors: ['#C45A3B', '#E8A33D', '#F7F0E3', '#2E3A59'],
  },
  {
    id: 'pal_indigo_night',
    name: 'Indigo Night',
    colors: ['#2E3A59', '#48567F', '#E8A33D', '#F7F0E3'],
  },
  {
    id: 'pal_marigold_field',
    name: 'Marigold Field',
    colors: ['#E8A33D', '#C45A3B', '#2F5D50', '#FDFBF6'],
  },
  {
    id: 'pal_temple_green',
    name: 'Temple Green',
    colors: ['#2F5D50', '#74A290', '#E8A33D', '#F7F0E3'],
  },
  {
    id: 'pal_river_clay',
    name: 'River Clay',
    colors: ['#853722', '#C45A3B', '#D4C2A2', '#F7F0E3'],
  },
];

const byId = (id: string) => palettes.find((p) => p.id === id)!;

export const motifs: Motif[] = [
  {
    id: 'motif_classic_kolka',
    name: 'Classic Kolka',
    description:
      'The archetypal teardrop paisley — a curling bud that anchors nearly every Bengali border. Balanced, symmetrical, endlessly repeatable.',
    svgKey: 'classic',
    defaultPalette: byId('pal_terracotta_dusk'),
    alternatePalettes: [byId('pal_indigo_night'), byId('pal_temple_green')],
  },
  {
    id: 'motif_vine_kolka',
    name: 'Vine Kolka',
    description:
      'Kolka buds strung along a flowing stem (the "lata"), echoing kantha embroidery that wanders across a quilt like a living vine.',
    svgKey: 'vine',
    defaultPalette: byId('pal_temple_green'),
    alternatePalettes: [byId('pal_marigold_field'), byId('pal_river_clay')],
  },
  {
    id: 'motif_lotus_kolka',
    name: 'Lotus Kolka',
    description:
      'A radial bloom fusing the paisley with the lotus — the flower carved across Bishnupur’s terracotta temples.',
    svgKey: 'lotus',
    defaultPalette: byId('pal_marigold_field'),
    alternatePalettes: [byId('pal_indigo_night'), byId('pal_terracotta_dusk')],
  },
  {
    id: 'motif_border_kolka',
    name: 'Border Kolka',
    description:
      'A repeating band of mirrored buds, drawn from the "par" (border) of a Tangail sari — built to frame and divide.',
    svgKey: 'border',
    defaultPalette: byId('pal_river_clay'),
    alternatePalettes: [byId('pal_indigo_night'), byId('pal_temple_green')],
  },
];
