import React from 'react';
import { View } from 'react-native';
import type { JourneyNode } from '@/types';
import { JourneyNodeCard, JourneyPathSegment } from './JourneyNodeCard';

const ALIGNS: ('left' | 'center' | 'right')[] = [
  'center',
  'right',
  'left',
  'center',
  'right',
  'left',
  'center',
];

/** Winding vertical map — alternating node alignment with dashed connectors. */
export function JourneyMap({ nodes }: { nodes: JourneyNode[] }) {
  const sorted = [...nodes].sort((a, b) => a.order - b.order);

  return (
    <View className="px-xl pb-2xl">
      {sorted.map((node, i) => (
        <View key={node.id}>
          <JourneyNodeCard node={node} align={ALIGNS[i] ?? 'center'} />
          {i < sorted.length - 1 ? <JourneyPathSegment height={56} /> : null}
        </View>
      ))}
    </View>
  );
}
