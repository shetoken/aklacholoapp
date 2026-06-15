import React from 'react';
import { View } from 'react-native';

import type { Instrument } from '@/types';
import { INSTRUMENT_TYPE_LABELS } from '@/constants/music';
import { AppText } from '@/components/ui/Text';
import { Img } from '@/components/ui/Img';
import { Tag } from '@/components/ui/Tag';
import { brand } from '@/theme';

type InstrumentCardProps = {
  instrument: Instrument;
  width?: number;
  compact?: boolean;
};

export function InstrumentCard({
  instrument,
  width = 140,
  compact = false,
}: InstrumentCardProps) {
  const imageSize = compact ? 100 : 120;

  return (
    <View style={{ width }} className="rounded-2xl overflow-hidden border border-brand-border">
      <View style={{ backgroundColor: brand.surface }}>
        <Img
          source={instrument.image}
          radius={0}
          style={{ width, height: imageSize }}
        />
        <View className="p-sm">
          <Tag label={INSTRUMENT_TYPE_LABELS[instrument.type]} />
          {instrument.nameBengali ? (
            <AppText
              variant="caption"
              numberOfLines={1}
              className="mt-xs text-brand-kolka font-serif-italic"
            >
              {instrument.nameBengali}
            </AppText>
          ) : null}
          <AppText variant="label" numberOfLines={2} className="mt-xs">
            {instrument.name}
          </AppText>
          {!compact ? (
            <AppText variant="caption" numberOfLines={2} className="mt-xs text-brand-ivory-soft">
              {instrument.subtitle}
            </AppText>
          ) : null}
        </View>
      </View>
    </View>
  );
}
