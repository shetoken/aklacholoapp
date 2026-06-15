import React from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Link, Stack, useLocalSearchParams } from 'expo-router';

import {
  AppText,
  AttireBody,
  AttireCard,
  AttireRespectNote,
  CraftCard,
  EmptyState,
  ErrorView,
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
  ATTIRE_CATEGORY_LABELS,
  getAttireBySlug,
  getCraftsForAttire,
  getFestivalsForAttire,
  getRelatedAttireItems,
  getSareesForAttire,
  WORN_BY_LABELS,
} from '@/services';
import { brand } from '@/theme';

export default function AttireDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const item = useAsync(() => getAttireBySlug(slug), [slug]);
  const relatedItems = useAsync(
    () => (item.data ? getRelatedAttireItems(item.data.id) : Promise.resolve([])),
    [item.data?.id],
  );
  const linkedCrafts = useAsync(
    () => (item.data ? getCraftsForAttire(item.data.id) : Promise.resolve([])),
    [item.data?.id],
  );
  const linkedSarees = useAsync(
    () => (item.data ? getSareesForAttire(item.data.id) : Promise.resolve([])),
    [item.data?.id],
  );
  const linkedFestivals = useAsync(
    () => (item.data ? getFestivalsForAttire(item.data.id) : Promise.resolve([])),
    [item.data?.id],
  );

  if (item.loading) return <Loading label="Opening attire profile…" />;
  if (item.error || !item.data)
    return <ErrorView message="Attire profile not found." />;

  const a = item.data;

  return (
    <>
      <Stack.Screen options={{ title: '', headerShown: true }} />
      <Screen scroll edges={[]} contentClassName="pb-2xl">
        <Img source={a.image} radius={0} style={{ width: '100%', height: 280 }} />

        <View className="px-xl pt-lg">
          {a.isMarriedSymbol ? (
            <AppText variant="label" className="text-brand-kolka mb-sm">
              Traditional symbol · presented as heritage
            </AppText>
          ) : null}
          {a.nameBengali ? (
            <AppText variant="quote" className="text-brand-kolka font-serif-italic">
              {a.nameBengali}
            </AppText>
          ) : null}
          <AppText variant="h1" className="mt-xs">
            {a.name}
          </AppText>
          {a.alsoKnownAs ? (
            <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
              Also known as {a.alsoKnownAs}
            </AppText>
          ) : null}

          <View className="flex-row flex-wrap gap-2 mt-md">
            <Tag label={ATTIRE_CATEGORY_LABELS[a.category]} active />
            <Tag label={WORN_BY_LABELS[a.wornBy]} active />
            {a.isBridal ? <Tag label="Wedding" /> : null}
          </View>

          <AppText variant="bodyLg" className="mt-lg">
            {a.subtitle}
          </AppText>
        </View>

        {a.isMarriedSymbol ? (
          <>
            <KolkaDivider />
            <AttireRespectNote sections={a.bodySections} />
          </>
        ) : null}

        <KolkaDivider />

        <AttireBody sections={a.bodySections} />

        {a.materialNote ? (
          <>
            <KolkaDivider />
            <View className="px-xl">
              <AppText variant="label" className="text-brand-kolka mb-xs">
                Material
              </AppText>
              <AppText variant="bodyLg" style={{ lineHeight: 26 }}>
                {a.materialNote}
              </AppText>
            </View>
          </>
        ) : null}

        {a.culturalNote ? (
          <>
            <KolkaDivider />
            <View
              className="mx-xl rounded-xl p-lg border"
              style={{ borderColor: brand.border, backgroundColor: brand.surface }}
            >
              <AppText variant="label" className="text-brand-kolka mb-xs">
                Cultural context
              </AppText>
              <AppText variant="body" style={{ lineHeight: 26 }}>
                {a.culturalNote}
              </AppText>
            </View>
          </>
        ) : null}

        {linkedCrafts.data && linkedCrafts.data.length > 0 ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Related crafts" subtitle="From Hastoshilpo" />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
            >
              {linkedCrafts.data.map((craft) => (
                <CraftCard key={craft.id} craft={craft} width={180} />
              ))}
            </ScrollView>
          </>
        ) : null}

        {linkedSarees.data && linkedSarees.data.length > 0 ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Related sarees" subtitle="From the Sarees hub" />
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

        {linkedFestivals.data && linkedFestivals.data.length > 0 ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Related festivals" subtitle="When this attire appears" />
            <View className="px-xl gap-md">
              {linkedFestivals.data.map((festival) => (
                <Link
                  key={festival.id}
                  href={`/festivals/festival/${festival.slug}`}
                  asChild
                >
                  <Pressable
                    className="rounded-xl p-lg border flex-row items-center justify-between"
                    style={{ borderColor: brand.border, backgroundColor: brand.surface }}
                  >
                    <View className="flex-1 pr-md">
                      <AppText variant="title">{festival.name}</AppText>
                      <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
                        {festival.subtitle}
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

        <SectionHeader title="Related attire" subtitle="More from Saaj o Poshak" />
        {relatedItems.data && relatedItems.data.length > 0 ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
          >
            {relatedItems.data.map((related) => (
              <AttireCard key={related.id} item={related} width={180} />
            ))}
          </ScrollView>
        ) : (
          <View className="px-xl">
            <EmptyState
              title="No related items yet"
              subtitle="Connections will appear as the wardrobe grows."
            />
          </View>
        )}

        {a.isStub ? (
          <View
            className="mx-xl mt-xl rounded-xl p-lg border"
            style={{ borderColor: brand.border, backgroundColor: brand.surface }}
          >
            <AppText variant="label" className="text-brand-marigold mb-xs">
              Preview profile
            </AppText>
            <AppText variant="body" className="text-brand-ivory-soft">
              This entry is a stub — verify cultural details before publishing.
            </AppText>
          </View>
        ) : null}
      </Screen>
    </>
  );
}
