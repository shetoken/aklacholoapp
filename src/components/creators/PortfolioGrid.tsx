import React from 'react';
import { View } from 'react-native';
import type { ImageRef } from '@/types';
import { Img } from '@/components/ui/Img';

/** Simple two-column portfolio image grid for creator profiles. */
export function PortfolioGrid({
  images,
  columnWidth,
}: {
  images: ImageRef[];
  columnWidth: number;
}) {
  const cols: ImageRef[][] = [[], []];
  images.forEach((img, i) => cols[i % 2].push(img));

  return (
    <View className="flex-row px-xl">
      {cols.map((col, ci) => (
        <View key={ci} className={ci === 0 ? 'flex-1 mr-sm' : 'flex-1 ml-sm'}>
          {col.map((image, ri) => (
            <Img
              key={ri}
              source={image}
              radius={14}
              className="mb-md"
              style={{
                width: '100%',
                height: columnWidth / (image.aspectRatio ?? 1),
              }}
            />
          ))}
        </View>
      ))}
    </View>
  );
}
