import React from 'react';
import { View, type ViewStyle } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

import type { Ritu } from '@/types';
import { AppText } from '@/components/ui/Text';
import { ClassicKolka } from '@/components/brand/motifs/KolkaMotif';
import { brand } from '@/theme';

type RituSeasonPosterProps = {
  ritu: Pick<Ritu, 'name' | 'nameBengali' | 'englishName' | 'gregorianSpan'>;
  height?: number;
  featured?: boolean;
  style?: ViewStyle;
};

const palette = [brand.terracotta, brand.marigold, brand.ivory, brand.ink];

export function RituSeasonPoster({
  ritu,
  height = 220,
  featured = false,
  style,
}: RituSeasonPosterProps) {
  const motifSize = featured ? 72 : 52;

  return (
    <View
      style={[
        {
          height,
          backgroundColor: brand.ink,
          borderBottomWidth: 2,
          borderBottomColor: brand.terracotta,
        },
        style,
      ]}
    >
      <View className="absolute top-0 right-0 opacity-[0.14]">
        <ClassicKolka size={motifSize} palette={palette} />
      </View>
      <View className="flex-1 justify-end p-md">
        <AppText
          variant={featured ? 'quote' : 'caption'}
          className="text-brand-marigold font-serif-italic mb-xs"
        >
          {ritu.nameBengali}
        </AppText>
        <AppText variant={featured ? 'h2' : 'title'} className="text-brand-ivory font-serif">
          {ritu.name}
        </AppText>
        <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
          {ritu.englishName} · {ritu.gregorianSpan}
        </AppText>
      </View>
    </View>
  );
}

type YearWheelProps = {
  ritus: Ritu[];
  size?: number;
  onRituPress?: (ritu: Ritu) => void;
  renderRitu: (ritu: Ritu, index: number) => React.ReactNode;
};

export function YearWheel({ ritus, size = 320, renderRitu }: YearWheelProps) {
  const center = size / 2;
  const radius = size * 0.34;
  const nodeSize = 88;

  return (
    <View style={{ width: size, height: size, alignSelf: 'center' }}>
      <Svg width={size} height={size} style={{ position: 'absolute' }}>
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke={brand.border}
          strokeWidth={1.5}
          fill="none"
          opacity={0.45}
        />
        <Circle
          cx={center}
          cy={center}
          r={radius * 0.55}
          stroke={brand.marigold}
          strokeWidth={1}
          fill="none"
          opacity={0.2}
        />
      </Svg>

      <View
        className="absolute items-center justify-center rounded-full border"
        style={{
          width: radius * 1.05,
          height: radius * 1.05,
          left: center - (radius * 1.05) / 2,
          top: center - (radius * 1.05) / 2,
          borderColor: brand.border,
          backgroundColor: brand.surface,
        }}
      >
        <AppText variant="caption" className="text-brand-marigold font-serif-italic">
          বঙ্গাব্দ
        </AppText>
        <AppText variant="title" className="text-brand-ivory font-serif mt-xs">
          6 Ritus
        </AppText>
        <AppText variant="caption" className="text-brand-ivory-soft mt-xs text-center px-md">
          12 months
        </AppText>
      </View>

      {ritus.map((ritu, index) => {
        const angle = ((index * 60 - 90) * Math.PI) / 180;
        const x = center + radius * Math.cos(angle) - nodeSize / 2;
        const y = center + radius * Math.sin(angle) - nodeSize / 2;

        return (
          <View
            key={ritu.id}
            style={{ position: 'absolute', left: x, top: y, width: nodeSize, height: nodeSize }}
          >
            {renderRitu(ritu, index)}
          </View>
        );
      })}
    </View>
  );
}
