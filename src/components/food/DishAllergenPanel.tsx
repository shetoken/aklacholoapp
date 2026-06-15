import React from 'react';
import { Pressable, View } from 'react-native';

import type { Allergen, Dish } from '@/types';
import { ALLERGEN_LABELS } from '@/constants/food';
import { AppText } from '@/components/ui/Text';
import { brand } from '@/theme';

function AllergenBadge({
  label,
  variant,
}: {
  label: string;
  variant: 'contains' | 'may-contain';
}) {
  const isContains = variant === 'contains';
  return (
    <View
      className="rounded-full px-md py-xs"
      style={{
        backgroundColor: isContains ? `${brand.vermillion}22` : `${brand.terracotta}22`,
        borderWidth: 1,
        borderColor: isContains ? brand.vermillion : brand.terracotta,
      }}
    >
      <AppText
        variant="label"
        style={{ color: isContains ? brand.vermillion : brand.terracotta }}
      >
        {isContains ? label : `May contain ${label.toLowerCase()}`}
      </AppText>
    </View>
  );
}

export function DishAllergenPanel({ dish }: { dish: Dish }) {
  const hasAllergens = dish.allergens.length > 0 || (dish.mayContain?.length ?? 0) > 0;

  return (
    <View className="px-xl">
      <AppText variant="label" className="text-brand-kolka mb-sm">
        Allergens
      </AppText>
      {hasAllergens ? (
        <View className="flex-row flex-wrap gap-2">
          {dish.allergens.map((a) => (
            <AllergenBadge key={a} label={ALLERGEN_LABELS[a]} variant="contains" />
          ))}
          {(dish.mayContain ?? []).map((a) => (
            <AllergenBadge key={`may-${a}`} label={ALLERGEN_LABELS[a]} variant="may-contain" />
          ))}
        </View>
      ) : (
        <AppText variant="body" className="text-brand-ivory-soft">
          No common allergens flagged for this dish as typically made.
        </AppText>
      )}
      {dish.allergenNote ? (
        <AppText variant="body" className="mt-md text-brand-ivory-soft" style={{ lineHeight: 24 }}>
          {dish.allergenNote}
        </AppText>
      ) : null}
      <AppText variant="caption" className="mt-md text-brand-ivory-soft" style={{ lineHeight: 20 }}>
        Allergen info is a general guide — if you have a serious allergy, always check with
        the cook or restaurant.
      </AppText>
    </View>
  );
}

export function AllergenAvoidChip({
  allergen,
  label,
  active,
  onPress,
}: {
  allergen: Allergen;
  label: string;
  active: boolean;
  onPress: (allergen: Allergen) => void;
}) {
  return (
    <Pressable onPress={() => onPress(allergen)}>
      <View
        className="rounded-full px-md py-xs border"
        style={{
          backgroundColor: active ? `${brand.vermillion}33` : brand.surface,
          borderColor: active ? brand.vermillion : brand.border,
        }}
      >
        <AppText
          variant="label"
          style={{ color: active ? brand.vermillion : undefined }}
          className={active ? undefined : 'text-brand-ivory-soft'}
        >
          {active ? `Avoid ${label}` : label}
        </AppText>
      </View>
    </Pressable>
  );
}
