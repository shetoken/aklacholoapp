import React from 'react';
import { View } from 'react-native';

import type { CellularJailNote } from '@/types';
import { AppText } from '@/components/ui/Text';
import { brand } from '@/theme';

/** Prominent integrity callout for the Kala Pani register. */
export function CellularJailNoteBlock({ note }: { note: CellularJailNote }) {
  return (
    <View
      className="mx-xl rounded-xl p-lg border"
      style={{ borderColor: brand.kolka, backgroundColor: brand.surface }}
    >
      <AppText variant="label" className="text-brand-kolka mb-sm">
        {note.headline}
      </AppText>
      <AppText variant="body" className="text-brand-ivory-soft" style={{ lineHeight: 26 }}>
        {note.body}
      </AppText>
      <AppText variant="label" className="mt-lg mb-sm text-brand-ivory-soft">
        Sources
      </AppText>
      {note.sources.map((source) => (
        <View key={source} className="flex-row mb-sm">
          <AppText variant="caption" className="text-brand-kolka mr-sm">
            ·
          </AppText>
          <AppText variant="caption" className="flex-1 text-brand-ivory-soft" style={{ lineHeight: 22 }}>
            {source}
          </AppText>
        </View>
      ))}
    </View>
  );
}
