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
  onDark = true,
}: {
  collection: Collection;
  width?: number;
  /** Kalighat dark surface — ivory type. */
  onDark?: boolean;
}) {
  const labelCls = onDark ? 'text-brand-terracotta mb-xs' : 'text-brand-terracotta mb-xs';
  const titleCls = onDark ? 'text-brand-ivory' : 'text-brand-ivory';
  const captionCls = onDark ? 'mt-xs text-brand-ivory-soft' : 'mt-xs text-brand-ivory-soft';

  return (
    <Link href={`/collection/${collection.id}`} asChild>
      <MotiPressable
        animate={({ pressed }) => {
          'worklet';
          return { scale: pressed ? 0.98 : 1 };
        }}
        style={width ? { width } : undefined}
      >
        <View
          className="rounded-2xl overflow-hidden bg-brand-surface mr-lg border border-brand-border"
        >
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
            <AppText variant="label" className={labelCls}>
              Collection
            </AppText>
            <AppText variant="title" className={titleCls}>
              {collection.title}
            </AppText>
            <AppText variant="caption" className={captionCls} numberOfLines={2}>
              {collection.tagline}
            </AppText>
          </View>
        </View>
      </MotiPressable>
    </Link>
  );
}
