import React from 'react';
import Svg, { Path, Circle, G } from 'react-native-svg';
import { brand } from '@/theme';

/**
 * Placeholder kolka (paisley) motifs drawn as SVG. Each takes an ordered color
 * list (a Palette.colors array): [0] = fill, [1] = inner accent, [2] = detail,
 * [3] = background dot/optional.
 */
export interface KolkaMotifProps {
  size?: number;
  palette?: string[];
}

type MotifComponent = React.FC<KolkaMotifProps>;

const fallback = [
  brand.terracotta,
  brand.marigold,
  brand.ivory,
  brand.indigo,
];

function useColors(palette?: string[]) {
  const p = palette && palette.length ? palette : fallback;
  return {
    fill: p[0] ?? fallback[0],
    accent: p[1] ?? fallback[1],
    detail: p[2] ?? fallback[2],
    extra: p[3] ?? fallback[3],
  };
}

/** Classic single paisley bud. */
const ClassicKolka: MotifComponent = ({ size = 96, palette }) => {
  const c = useColors(palette);
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100">
      <Path
        d="M50 8 C24 8 16 36 26 58 C33 74 50 80 62 72 C76 63 76 44 64 40 C55 37 48 44 50 54 C51 60 58 62 62 58"
        fill="none"
        stroke={c.fill}
        strokeWidth={6}
        strokeLinecap="round"
      />
      <Path
        d="M50 20 C34 20 28 40 35 56 C40 68 52 72 60 66"
        fill="none"
        stroke={c.accent}
        strokeWidth={4}
        strokeLinecap="round"
      />
      <Circle cx={56} cy={50} r={4} fill={c.extra} />
    </Svg>
  );
};

/** Buds strung along a flowing vine. */
const VineKolka: MotifComponent = ({ size = 96, palette }) => {
  const c = useColors(palette);
  const bud = (x: number, y: number, s: number) => (
    <Path
      d={`M${x} ${y} c -8 0 -12 8 -8 16 c 3 6 11 7 15 2 c 4 -5 1 -12 -4 -12 c -3 0 -5 3 -3 6`}
      fill={c.accent}
      stroke={c.fill}
      strokeWidth={2}
      transform={`scale(${s})`}
    />
  );
  return (
    <Svg width={size} height={size} viewBox="0 0 120 60">
      <Path
        d="M6 40 C30 10 50 50 70 24 C86 4 104 30 116 18"
        fill="none"
        stroke={c.fill}
        strokeWidth={4}
        strokeLinecap="round"
      />
      <G>{bud(22, 18, 1)}</G>
      <G>{bud(70, 28, 1)}</G>
      <Circle cx={50} cy={36} r={3} fill={c.extra} />
      <Circle cx={100} cy={20} r={3} fill={c.extra} />
    </Svg>
  );
};

/** Radial lotus-paisley bloom. */
const LotusKolka: MotifComponent = ({ size = 96, palette }) => {
  const c = useColors(palette);
  const petals = Array.from({ length: 8 });
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100">
      <G>
        {petals.map((_, i) => (
          <Path
            key={i}
            d="M50 50 C44 30 56 30 50 12 C44 30 56 30 50 50"
            fill={i % 2 === 0 ? c.fill : c.accent}
            transform={`rotate(${i * 45} 50 50)`}
            opacity={0.92}
          />
        ))}
      </G>
      <Circle cx={50} cy={50} r={9} fill={c.detail} />
      <Circle cx={50} cy={50} r={4} fill={c.extra} />
    </Svg>
  );
};

/** Repeating mirrored border band. */
const BorderKolka: MotifComponent = ({ size = 96, palette }) => {
  const c = useColors(palette);
  const unit = (x: number, flip: boolean) => (
    <Path
      d="M0 24 c 0 -14 10 -20 10 -8 c 0 6 -6 8 -8 4"
      fill="none"
      stroke={c.fill}
      strokeWidth={3}
      strokeLinecap="round"
      transform={`translate(${x} 0) ${flip ? 'scale(-1 1) translate(-14 0)' : ''}`}
    />
  );
  return (
    <Svg width={size} height={size / 3} viewBox="0 0 120 30">
      <Path d="M2 26 H118" stroke={c.accent} strokeWidth={2} />
      {[0, 14, 28, 42, 56, 70, 84, 98].map((x, i) => (
        <G key={x}>{unit(x, i % 2 === 1)}</G>
      ))}
    </Svg>
  );
};

const registry: Record<string, MotifComponent> = {
  classic: ClassicKolka,
  vine: VineKolka,
  lotus: LotusKolka,
  border: BorderKolka,
};

/** Render a motif by its registry key (Motif.svgKey). */
export function KolkaMotif({
  svgKey,
  ...props
}: KolkaMotifProps & { svgKey: string }) {
  const Comp = registry[svgKey] ?? ClassicKolka;
  return <Comp {...props} />;
}

export { ClassicKolka, VineKolka, LotusKolka, BorderKolka, registry };
