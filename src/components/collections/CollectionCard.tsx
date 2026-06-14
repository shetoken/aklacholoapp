import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';
import type { Collection } from '@/types';
import { Img } from '@/components/ui/Img';
import { AppText } from '@/components/ui/Text';
import { SaveButton } from '@/components/ui/SaveButton';

/** Large story-driven collection card for the Home feed. */
export function CollectionCard({
  collection,
  width,
}: {
  collection: Collection;
  width?: number;
}) {
  return (
    <Link href={`/collection/${collection.id}`} asChild>
      <MotiPressable
        animate={({ pressed }) => {
          'worklet';
          return { scale: pressed ? 0.98 : 1 };
        }}
        style={width ? { width } : undefined}
      >
        <View className="rounded-2xl overflow-hidden bg-brand-surface mr-lg">
          <View>
            <Img
              source={collection.cover}
              className="w-full"
              style={{ height: 200 }}
            />
            <View className="absolute top-md right-md">
              <SaveButton id={collection.id} kind="collection" floating />
            </View>
          </View>
          <View className="p-lg">
            <AppText variant="label" className="text-brand-primary mb-xs">
              Collection
            </AppText>
            <AppText variant="title">{collection.title}</AppText>
            <AppText variant="caption" className="mt-xs" numberOfLines={2}>
              {collection.tagline}
            </AppText>
          </View>
        </View>
      </MotiPressable>
    </Link>
  );
}
