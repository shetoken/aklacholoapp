import React from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Link, Stack, useLocalSearchParams } from 'expo-router';

import {
  AppText,
  CraftBody,
  CraftCard,
  CreatorCard,
  EmptyState,
  ErrorView,
  HeritageBuildingCard,
  Img,
  KolkaDivider,
  Loading,
  SareeCard,
  Screen,
  SectionHeader,
  Tag,
} from '@/components';
import { useAsync } from '@/hooks/useAsync';
import {
  CRAFT_MEDIUM_LABELS,
  getBuildingsForCraft,
  getCraftBySlug,
  getMakersForCraft,
  getRelatedCrafts,
  getSareesForCraft,
  getTagLabel,
} from '@/services';
import { brand } from '@/theme';

export default function CraftDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const craft = useAsync(() => getCraftBySlug(slug), [slug]);
  const related = useAsync(
    () => (craft.data ? getRelatedCrafts(craft.data.id) : Promise.resolve([])),
    [craft.data?.id],
  );
  const makers = useAsync(
    () => (craft.data ? getMakersForCraft(craft.data.id) : Promise.resolve([])),
    [craft.data?.id],
  );
  const linkedSarees = useAsync(
    () => (craft.data ? getSareesForCraft(craft.data.id) : Promise.resolve([])),
    [craft.data?.id],
  );
  const linkedBuildings = useAsync(
    () => (craft.data ? getBuildingsForCraft(craft.data.id) : Promise.resolve([])),
    [craft.data?.id],
  );

  if (craft.loading) return <Loading label="Opening craft profile…" />;
  if (craft.error || !craft.data)
    return <ErrorView message="Craft profile not found." />;

  const c = craft.data;

  return (
    <>
      <Stack.Screen options={{ title: '', headerShown: true }} />
      <Screen scroll edges={[]} contentClassName="pb-2xl">
        <Img source={c.heroImage} radius={0} style={{ width: '100%', height: 280 }} />

        <View className="px-xl pt-lg">
          {c.nameBengali ? (
            <AppText variant="quote" className="text-brand-kolka font-serif-italic">
              {c.nameBengali}
            </AppText>
          ) : null}
          <AppText variant="h1" className="mt-xs">
            {c.name}
          </AppText>
          {c.alsoKnownAs ? (
            <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
              Also known as {c.alsoKnownAs}
            </AppText>
          ) : null}

          <View className="flex-row flex-wrap gap-2 mt-md">
            <Tag label={CRAFT_MEDIUM_LABELS[c.medium]} active />
          </View>

          {c.originRegion ? (
            <View className="mt-md">
              <AppText variant="label" className="text-brand-ivory-soft">
                Origin & region
              </AppText>
              <AppText variant="bodyLg" className="mt-xs">
                {c.originRegion}
              </AppText>
            </View>
          ) : null}

          <AppText variant="bodyLg" className="mt-lg">
            {c.subtitle}
          </AppText>
        </View>

        {c.technique ? (
          <>
            <KolkaDivider />
            <View
              className="mx-xl rounded-xl p-lg border"
              style={{ borderColor: brand.border, backgroundColor: brand.surface }}
            >
              <AppText variant="label" className="text-brand-kolka mb-xs">
                Technique
              </AppText>
              <AppText variant="bodyLg" style={{ lineHeight: 26 }}>
                {c.technique}
              </AppText>
            </View>
          </>
        ) : null}

        <KolkaDivider />

        <CraftBody sections={c.bodySections} />

        {c.modernUses && c.modernUses.length > 0 ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Today" subtitle="How the craft lives on" />
            <View className="px-xl">
              {c.modernUses.map((use) => (
                <View key={use} className="flex-row mb-sm">
                  <AppText variant="body" className="text-brand-kolka mr-sm">
                    ·
                  </AppText>
                  <AppText variant="bodyLg" className="flex-1" style={{ lineHeight: 26 }}>
                    {use}
                  </AppText>
                </View>
              ))}
            </View>
          </>
        ) : null}

        <KolkaDivider />

        <SectionHeader title="Meet the makers" subtitle="From the Creators network" />
        {c.creatorTags && c.creatorTags.length > 0 ? (
          <View className="px-xl flex-row flex-wrap gap-2 mb-md">
            {c.creatorTags.map((tag) => (
              <Link key={tag} href="/(tabs)/hire" asChild>
                <Pressable>
                  <Tag label={getTagLabel(tag)} active />
                </Pressable>
              </Link>
            ))}
          </View>
        ) : null}
        {makers.data && makers.data.length > 0 ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24 }}
          >
            {makers.data.map((creator) => (
              <CreatorCard key={creator.id} creator={creator} />
            ))}
          </ScrollView>
        ) : (
          <View className="px-xl">
            <EmptyState
              title="Makers coming soon"
              subtitle="We’re curating artisans for this craft. Browse Commission to discover Bengal’s makers."
            />
            <Link href="/(tabs)/hire" asChild>
              <Pressable className="mt-md py-sm">
                <AppText variant="label" className="text-brand-kolka">
                  Browse Creators →
                </AppText>
              </Pressable>
            </Link>
          </View>
        )}

        {linkedSarees.data && linkedSarees.data.length > 0 ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Related sarees" subtitle="Weaves linked to this craft" />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
            >
              {linkedSarees.data.map((saree) => (
                <SareeCard key={saree.id} saree={saree} width={180} />
              ))}
            </ScrollView>
          </>
        ) : null}

        {linkedBuildings.data && linkedBuildings.data.length > 0 ? (
          <>
            <KolkaDivider />
            <SectionHeader
              title="Heritage sites"
              subtitle="Temples and buildings in this tradition"
            />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
            >
              {linkedBuildings.data.map((building) => (
                <HeritageBuildingCard key={building.id} building={building} width={240} />
              ))}
            </ScrollView>
          </>
        ) : null}

        <KolkaDivider />

        <SectionHeader title="Related crafts" subtitle="Neighbouring traditions" />
        {related.data && related.data.length > 0 ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
          >
            {related.data.map((item) => (
              <CraftCard key={item.id} craft={item} width={180} />
            ))}
          </ScrollView>
        ) : (
          <View className="px-xl">
            <EmptyState
              title="No related crafts yet"
              subtitle="Connections will appear as the atelier grows."
            />
          </View>
        )}

        {c.isStub ? (
          <View
            className="mx-xl mt-xl rounded-xl p-lg border"
            style={{ borderColor: brand.border, backgroundColor: brand.surface }}
          >
            <AppText variant="label" className="text-brand-marigold mb-xs">
              Preview profile
            </AppText>
            <AppText variant="body" className="text-brand-ivory-soft">
              This entry is a stub — verify origin and technique details before publishing.
            </AppText>
          </View>
        ) : null}
      </Screen>
    </>
  );
}
