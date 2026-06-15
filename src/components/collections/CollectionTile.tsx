import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';
import type { Collection } from '@/types';
import { Img } from '@/components/ui/Img';
import { AppText } from '@/components/ui/Text';
import { brand } from '@/theme';

/** Compact collection tile for Home auto-scroll rails. */
export function CollectionTile({
  collection,
  size = 108,
  onDark = true,
}: {
  collection: Collection;
  size?: number;
  onDark?: boolean;
}) {
  const imageH = size * 1.1;

  return (
    <Link href={`/collection/${collection.id}`} asChild>
      <MotiPressable
        animate={({ pressed }) => {
          'worklet';
          return { scale: pressed ? 0.96 : 1 };
        }}
        style={{ width: size }}
      >
        <View
          className="rounded-lg overflow-hidden mr-md"
          style={{
            backgroundColor: onDark ? brand.surface : undefined,
            borderWidth: onDark ? 1 : 0,
            borderColor: `${brand.ivory}22`,
          }}
        >
          <Img
            source={collection.cover}
            style={{ width: size, height: imageH }}
          />
          <View className="p-sm">
            <AppText
              variant="caption"
              numberOfLines={2}
              className={onDark ? 'text-brand-ivory' : undefined}
            >
              {collection.title}
            </AppText>
          </View>
        </View>
      </MotiPressable>
    </Link>
  );
}
