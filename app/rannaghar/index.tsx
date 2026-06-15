import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Stack } from 'expo-router';

import {
  AllergenAvoidChip,
  AppText,
  AutoScrollRow,
  DishCard,
  ErrorView,
  KolkaDivider,
  Loading,
  Screen,
  SectionHeader,
  Tag,
} from '@/components';
import { APP } from '@/constants/app';
import { useAsync } from '@/hooks/useAsync';
import {
  ALLERGEN_LABELS,
  DIET_FILTER_ORDER,
  DIET_LABELS,
  MEAL_TYPE_FILTER_ORDER,
  MEAL_TYPE_LABELS,
  getAllUsedAllergens,
  getDishes,
  getDishesByDiet,
  getDishesByMealAndDiet,
  getDishesByMealType,
  getDishesFreeOf,
  getFlagshipDishes,
} from '@/services';
import type { Allergen, Diet, Dish, MealType } from '@/types';

function intersectDishes(a: Dish[], b: Dish[]): Dish[] {
  const ids = new Set(b.map((d) => d.id));
  return a.filter((d) => ids.has(d.id));
}

export default function RannagharHubScreen() {
  const [mealType, setMealType] = useState<MealType | null>(null);
  const [diet, setDiet] = useState<Diet | null>(null);
  const [avoidAllergens, setAvoidAllergens] = useState<Allergen[]>([]);

  const flagship = useAsync(() => getFlagshipDishes(), []);
  const allDishes = useAsync(() => getDishes(), []);
  const mealDishes = useAsync(
    () => (mealType ? getDishesByMealType(mealType) : Promise.resolve([])),
    [mealType],
  );
  const dietDishes = useAsync(
    () => (diet ? getDishesByDiet(diet) : Promise.resolve([])),
    [diet],
  );
  const mealAndDietDishes = useAsync(
    () =>
      mealType && diet ? getDishesByMealAndDiet(mealType, diet) : Promise.resolve([]),
    [mealType, diet],
  );
  const allergenSafe = useAsync(
    () =>
      avoidAllergens.length > 0
        ? getDishesFreeOf(avoidAllergens, { strict: true })
        : Promise.resolve([]),
    [avoidAllergens],
  );
  const usedAllergens = useAsync(() => getAllUsedAllergens(), []);

  const loading =
    flagship.loading ||
    allDishes.loading ||
    mealDishes.loading ||
    dietDishes.loading ||
    mealAndDietDishes.loading ||
    allergenSafe.loading ||
    usedAllergens.loading;
  const error =
    flagship.error ||
    allDishes.error ||
    mealDishes.error ||
    dietDishes.error ||
    mealAndDietDishes.error ||
    allergenSafe.error ||
    usedAllergens.error;

  const baseBrowse = useMemo(() => {
    if (mealType && diet) return mealAndDietDishes.data ?? [];
    if (mealType) return mealDishes.data ?? [];
    if (diet) return dietDishes.data ?? [];
    return allDishes.data ?? [];
  }, [mealType, diet, mealAndDietDishes.data, mealDishes.data, dietDishes.data, allDishes.data]);

  const browseDishes = useMemo(() => {
    if (avoidAllergens.length === 0) return baseBrowse;
    return intersectDishes(baseBrowse, allergenSafe.data ?? []);
  }, [baseBrowse, avoidAllergens.length, allergenSafe.data]);

  const featuredDishes = useMemo(() => {
    const items = flagship.data ?? [];
    if (avoidAllergens.length === 0) return items;
    return intersectDishes(items, allergenSafe.data ?? []);
  }, [flagship.data, avoidAllergens.length, allergenSafe.data]);

  const toggleAllergen = (allergen: Allergen) => {
    setAvoidAllergens((prev) =>
      prev.includes(allergen) ? prev.filter((a) => a !== allergen) : [...prev, allergen],
    );
  };

  if (loading) return <Loading label="Opening Rannaghar…" />;
  if (error)
    return (
      <ErrorView
        onRetry={() => {
          flagship.reload();
          allDishes.reload();
          mealDishes.reload();
          dietDishes.reload();
          mealAndDietDishes.reload();
          allergenSafe.reload();
          usedAllergens.reload();
        }}
      />
    );

  return (
    <>
      <Stack.Screen options={{ title: 'Rannaghar', headerShown: true }} />
      <Screen scroll edges={['bottom']} contentClassName="pb-2xl">
        <View className="px-xl pt-lg">
          <AppText variant="label" className="text-brand-kolka mb-xs">
            {APP.storyLabel}
          </AppText>
          <AppText variant="h1">Rannaghar</AppText>
          <AppText variant="body" className="mt-xs text-brand-ivory-soft">
            The Kitchen of Bengal
          </AppText>
          <AppText variant="body" className="mt-sm text-brand-ivory-soft" style={{ lineHeight: 26 }}>
            From luchi and shorshe ilish to phuchka, rosogolla, and cha — the full
            table of Bengal, browsable by meal, diet, and allergen.
          </AppText>
        </View>

        {featuredDishes.length > 0 ? (
          <>
            <SectionHeader className="pt-lg" title="Featured dishes" subtitle="Start here" />
            <AutoScrollRow
              data={featuredDishes}
              keyExtractor={(dish) => dish.id}
              gap={16}
              speed={0.2}
              renderItem={(dish) => <DishCard dish={dish} featured />}
            />
          </>
        ) : null}

        <KolkaDivider width={120} />

        <SectionHeader title="Browse by meal" subtitle="Breakfast to condiments" />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
        >
          <Pressable onPress={() => setMealType(null)}>
            <Tag label="All meals" active={mealType === null} />
          </Pressable>
          {MEAL_TYPE_FILTER_ORDER.map((m) => (
            <Pressable key={m} onPress={() => setMealType(m)}>
              <Tag label={MEAL_TYPE_LABELS[m]} active={mealType === m} />
            </Pressable>
          ))}
        </ScrollView>

        <SectionHeader className="pt-md" title="Browse by diet" subtitle="Vegan to non-veg" />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
        >
          <Pressable onPress={() => setDiet(null)}>
            <Tag label="All diets" active={diet === null} />
          </Pressable>
          {DIET_FILTER_ORDER.map((d) => (
            <Pressable key={d} onPress={() => setDiet(d)}>
              <Tag label={DIET_LABELS[d]} active={diet === d} />
            </Pressable>
          ))}
        </ScrollView>

        {usedAllergens.data && usedAllergens.data.length > 0 ? (
          <>
            <SectionHeader
              className="pt-md"
              title="Allergen filter"
              subtitle="Tap to hide dishes containing an allergen"
            />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
            >
              {usedAllergens.data.map((a) => (
                <AllergenAvoidChip
                  key={a}
                  allergen={a}
                  label={ALLERGEN_LABELS[a]}
                  active={avoidAllergens.includes(a)}
                  onPress={toggleAllergen}
                />
              ))}
            </ScrollView>
          </>
        ) : null}

        <SectionHeader
          className="pt-lg"
          title="The kitchen"
          subtitle={
            browseDishes.length === 1
              ? '1 dish'
              : `${browseDishes.length} dishes`
          }
        />

        {browseDishes.length > 0 ? (
          <View className="px-xl flex-row flex-wrap gap-md">
            {browseDishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} width={160} />
            ))}
          </View>
        ) : (
          <View className="px-xl">
            <AppText variant="body" className="text-brand-ivory-soft">
              No dishes match these filters. Try clearing diet, meal, or allergen filters.
            </AppText>
          </View>
        )}
      </Screen>
    </>
  );
}
