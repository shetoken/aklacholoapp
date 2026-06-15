import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';

import type { Dish } from '@/types';
import { DIET_LABELS, MEAL_TYPE_LABELS } from '@/constants/food';
import { AppText } from '@/components/ui/Text';
import { Img } from '@/components/ui/Img';
import { Tag } from '@/components/ui/Tag';
import { brand } from '@/theme';

type DishCardProps = {
  dish: Dish;
  width?: number;
  featured?: boolean;
  compact?: boolean;
};

export function DishCard({ dish, width, featured = false, compact = false }: DishCardProps) {
  const cardWidth = width ?? (featured ? 220 : compact ? 200 : 160);
  const imageHeight = featured ? 200 : compact ? 140 : 168;
  const primaryMeal = dish.mealTypes[0];

  return (
    <Link href={`/rannaghar/${dish.slug}`} asChild>
      <MotiPressable
        animate={({ pressed }) => {
          'worklet';
          return { scale: pressed ? 0.98 : 1 };
        }}
        style={{ width: cardWidth }}
      >
        <View
          className="rounded-2xl overflow-hidden border border-brand-border"
          style={{ backgroundColor: brand.surface }}
        >
          <Img
            source={dish.image}
            radius={0}
            style={{ width: cardWidth, height: imageHeight }}
          />
          <View className="p-md">
            <View className="flex-row flex-wrap gap-1">
              {primaryMeal ? <Tag label={MEAL_TYPE_LABELS[primaryMeal]} active /> : null}
              <Tag label={DIET_LABELS[dish.diet]} active />
            </View>
            {dish.nameBengali ? (
              <AppText
                variant="caption"
                numberOfLines={1}
                className="mt-sm text-brand-kolka font-serif-italic"
              >
                {dish.nameBengali}
              </AppText>
            ) : null}
            <AppText variant="title" numberOfLines={2} className="mt-xs">
              {dish.name}
            </AppText>
            {!compact ? (
              <AppText
                variant="caption"
                numberOfLines={2}
                className="mt-sm text-brand-ivory-soft"
              >
                {dish.subtitle}
              </AppText>
            ) : null}
            {dish.hasRecipe ? (
              <AppText variant="caption" className="mt-xs text-brand-kolka">
                Recipe
              </AppText>
            ) : null}
            {dish.isStub ? (
              <AppText variant="caption" className="mt-xs text-brand-marigold">
                Preview
              </AppText>
            ) : null}
          </View>
        </View>
      </MotiPressable>
    </Link>
  );
}
