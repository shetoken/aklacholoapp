import React, { useMemo } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Link, Stack, useLocalSearchParams } from 'expo-router';

import {
  AppText,
  DishAllergenPanel,
  DishCard,
  EmptyState,
  ErrorView,
  FoodBody,
  Img,
  KolkaDivider,
  Loading,
  Screen,
  SectionHeader,
  Tag,
} from '@/components';
import { useAsync } from '@/hooks/useAsync';
import {
  DIET_LABELS,
  FOOD_SEASON_LABELS,
  MEAL_TYPE_LABELS,
  getDishes,
  getDishBySlug,
  getFestivals,
  resolveDishIngredients,
} from '@/services';
import { brand } from '@/theme';

export default function DishDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const dish = useAsync(() => getDishBySlug(slug), [slug]);
  const allDishes = useAsync(() => getDishes(), []);
  const ingredients = useAsync(
    () =>
      dish.data
        ? resolveDishIngredients(dish.data.id)
        : Promise.resolve({ fish: [], dals: [], flora: [] }),
    [dish.data?.id],
  );
  const festivals = useAsync(() => getFestivals(), []);

  const relatedDishes = useMemo(() => {
    if (!dish.data || !allDishes.data) return [];
    return dish.data.relatedDishIds
      .map((id) => allDishes.data!.find((d) => d.id === id))
      .filter(Boolean);
  }, [dish.data, allDishes.data]);

  const linkedFestivals = useMemo(() => {
    if (!dish.data?.relatedFestivalIds || !festivals.data) return [];
    return dish.data.relatedFestivalIds
      .map((id) => festivals.data!.find((f) => f.id === id))
      .filter(Boolean);
  }, [dish.data, festivals.data]);

  if (dish.loading) return <Loading label="Opening dish profile…" />;
  if (dish.error || !dish.data)
    return <ErrorView message="Dish not found." />;

  const d = dish.data;
  const keyIngredients = ingredients.data;

  return (
    <>
      <Stack.Screen options={{ title: '', headerShown: true }} />
      <Screen scroll edges={[]} contentClassName="pb-2xl">
        <Img source={d.image} radius={0} style={{ width: '100%', height: 280 }} />

        <View className="px-xl pt-lg">
          {d.nameBengali ? (
            <AppText variant="quote" className="text-brand-kolka font-serif-italic">
              {d.nameBengali}
            </AppText>
          ) : null}
          <AppText variant="h1" className="mt-xs">
            {d.name}
          </AppText>
          {d.alsoKnownAs ? (
            <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
              Also known as {d.alsoKnownAs}
            </AppText>
          ) : null}

          <View className="flex-row flex-wrap gap-2 mt-md">
            {d.mealTypes.map((m) => (
              <Tag key={m} label={MEAL_TYPE_LABELS[m]} active />
            ))}
            <Tag label={DIET_LABELS[d.diet]} active />
            <Tag label={FOOD_SEASON_LABELS[d.season]} />
          </View>

          <AppText variant="bodyLg" className="mt-lg">
            {d.subtitle}
          </AppText>
        </View>

        <KolkaDivider />

        <DishAllergenPanel dish={d} />

        <KolkaDivider />

        <FoodBody sections={d.bodySections} />

        {d.hasRecipe && d.ingredients && d.ingredients.length > 0 ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Ingredients" subtitle="As commonly prepared" />
            <View className="px-xl">
              {d.ingredients.map((item) => (
                <View key={item} className="flex-row mb-sm">
                  <AppText variant="body" className="text-brand-kolka mr-sm">
                    ·
                  </AppText>
                  <AppText variant="bodyLg" className="flex-1" style={{ lineHeight: 26 }}>
                    {item}
                  </AppText>
                </View>
              ))}
              {d.servesNote ? (
                <AppText variant="caption" className="mt-sm text-brand-ivory-soft">
                  {d.servesNote}
                </AppText>
              ) : null}
            </View>
          </>
        ) : null}

        {d.hasRecipe && d.steps && d.steps.length > 0 ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Method" subtitle="Step by step" />
            <View className="px-xl gap-lg">
              {d.steps.map((step) => (
                <View key={step.step} className="flex-row">
                  <View
                    className="w-8 h-8 rounded-full items-center justify-center mr-md"
                    style={{ backgroundColor: brand.marigold }}
                  >
                    <AppText variant="label" className="text-brand-ink">
                      {step.step}
                    </AppText>
                  </View>
                  <AppText variant="bodyLg" className="flex-1" style={{ lineHeight: 26 }}>
                    {step.text}
                  </AppText>
                </View>
              ))}
            </View>
          </>
        ) : null}

        {keyIngredients &&
        (keyIngredients.fish.length > 0 ||
          keyIngredients.dals.length > 0 ||
          keyIngredients.flora.length > 0) ? (
          <>
            <KolkaDivider />
            <SectionHeader
              title="Key ingredients"
              subtitle="From Fish & Dal and Bagan"
            />
            <View className="px-xl gap-md">
              {keyIngredients.fish.map((fish) => (
                <Link key={fish.id} href={`/maachhe-bhaate/fish/${fish.slug}`} asChild>
                  <Pressable
                    className="rounded-xl p-lg border flex-row items-center justify-between"
                    style={{ borderColor: brand.border, backgroundColor: brand.surface }}
                  >
                    <View className="flex-1 pr-md">
                      <AppText variant="label" className="text-brand-kolka mb-xs">
                        Fish
                      </AppText>
                      {fish.nameBengali ? (
                        <AppText variant="caption" className="text-brand-kolka font-serif-italic">
                          {fish.nameBengali}
                        </AppText>
                      ) : null}
                      <AppText variant="title">{fish.name}</AppText>
                      <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
                        {fish.subtitle}
                      </AppText>
                    </View>
                    <AppText variant="label" className="text-brand-kolka">
                      →
                    </AppText>
                  </Pressable>
                </Link>
              ))}
              {keyIngredients.dals.map((dal) => (
                <Link key={dal.id} href={`/maachhe-bhaate/dal/${dal.slug}`} asChild>
                  <Pressable
                    className="rounded-xl p-lg border flex-row items-center justify-between"
                    style={{ borderColor: brand.border, backgroundColor: brand.surface }}
                  >
                    <View className="flex-1 pr-md">
                      <AppText variant="label" className="text-brand-kolka mb-xs">
                        Dal
                      </AppText>
                      {dal.nameBengali ? (
                        <AppText variant="caption" className="text-brand-kolka font-serif-italic">
                          {dal.nameBengali}
                        </AppText>
                      ) : null}
                      <AppText variant="title">{dal.name}</AppText>
                      <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
                        {dal.subtitle}
                      </AppText>
                    </View>
                    <AppText variant="label" className="text-brand-kolka">
                      →
                    </AppText>
                  </Pressable>
                </Link>
              ))}
              {keyIngredients.flora.map((item) => (
                <Link key={item.id} href={`/bagan/${item.slug}`} asChild>
                  <Pressable
                    className="rounded-xl p-lg border flex-row items-center justify-between"
                    style={{ borderColor: brand.border, backgroundColor: brand.surface }}
                  >
                    <View className="flex-1 pr-md">
                      <AppText variant="label" className="text-brand-kolka mb-xs">
                        {item.category === 'fruit'
                          ? 'Fruit'
                          : item.category === 'vegetable'
                            ? 'Vegetable'
                            : 'Flower'}
                      </AppText>
                      {item.nameBengali ? (
                        <AppText variant="caption" className="text-brand-kolka font-serif-italic">
                          {item.nameBengali}
                        </AppText>
                      ) : null}
                      <AppText variant="title">{item.name}</AppText>
                      <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
                        {item.subtitle}
                      </AppText>
                    </View>
                    <AppText variant="label" className="text-brand-kolka">
                      →
                    </AppText>
                  </Pressable>
                </Link>
              ))}
            </View>
          </>
        ) : null}

        {linkedFestivals.length > 0 ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Related festivals" subtitle="When this dish shines" />
            <View className="px-xl gap-md">
              {linkedFestivals.map((festival) => (
                <Link
                  key={festival!.id}
                  href={`/festivals/festival/${festival!.slug}`}
                  asChild
                >
                  <Pressable
                    className="rounded-xl p-lg border flex-row items-center justify-between"
                    style={{ borderColor: brand.border, backgroundColor: brand.surface }}
                  >
                    <View className="flex-1 pr-md">
                      <AppText variant="title">{festival!.name}</AppText>
                      <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
                        {festival!.subtitle}
                      </AppText>
                    </View>
                    <AppText variant="label" className="text-brand-kolka">
                      →
                    </AppText>
                  </Pressable>
                </Link>
              ))}
            </View>
          </>
        ) : null}

        <KolkaDivider />

        <SectionHeader title="Related dishes" subtitle="More from the kitchen" />
        {relatedDishes.length > 0 ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
          >
            {relatedDishes.map((related) => (
              <DishCard key={related!.id} dish={related!} width={180} />
            ))}
          </ScrollView>
        ) : (
          <View className="px-xl">
            <EmptyState
              title="No related dishes yet"
              subtitle="Connections will appear as the kitchen grows."
            />
          </View>
        )}

        {d.isStub ? (
          <View
            className="mx-xl mt-xl rounded-xl p-lg border"
            style={{ borderColor: brand.border, backgroundColor: brand.surface }}
          >
            <AppText variant="label" className="text-brand-marigold mb-xs">
              Preview profile
            </AppText>
            <AppText variant="body" className="text-brand-ivory-soft">
              This entry is a stub — verify recipe and allergen details before publishing.
            </AppText>
          </View>
        ) : null}
      </Screen>
    </>
  );
}
