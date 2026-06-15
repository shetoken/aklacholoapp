import React from 'react';
import { ScrollView, View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

import {
  AppText,
  ArticleTile,
  ErrorView,
  FreedomFighterBody,
  FreedomFighterCard,
  Img,
  KolkaDivider,
  Loading,
  Screen,
  Tag,
} from '@/components';
import {
  BORDER_LABELS,
  FATE_LABELS,
  MOVEMENT_LABELS,
  ROLE_LABELS,
} from '@/constants/freedom-fighters';
import { useAsync } from '@/hooks/useAsync';
import { getArticlesByIds, getFighterBySlug, getRelatedFighters } from '@/services';
import { brand } from '@/theme';

const STORY_TILE = 120;

export default function FreedomFighterDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const fighter = useAsync(() => getFighterBySlug(slug), [slug]);
  const related = useAsync(
    () =>
      fighter.data ? getRelatedFighters(fighter.data.id) : Promise.resolve([]),
    [fighter.data?.id],
  );
  const stories = useAsync(
    () =>
      fighter.data
        ? getArticlesByIds(fighter.data.relatedArticleIds)
        : Promise.resolve([]),
    [fighter.data?.id, fighter.data?.relatedArticleIds.join(',')],
  );

  if (fighter.loading) return <Loading label="Opening profile…" />;
  if (fighter.error || !fighter.data)
    return <ErrorView message="Profile not found." />;

  const f = fighter.data;

  return (
    <>
      <Stack.Screen options={{ title: '', headerShown: true }} />
      <Screen scroll edges={[]} contentClassName="pb-2xl">
        <Img
          source={f.portraitImage}
          radius={0}
          style={{ width: '100%', height: 340 }}
        />

        <View className="px-xl pt-lg">
          {f.nameBengali ? (
            <AppText variant="quote" className="text-brand-kolka font-serif-italic">
              {f.nameBengali}
            </AppText>
          ) : null}
          <AppText variant="h1" className="mt-xs">
            {f.name}
          </AppText>
          {f.alsoKnownAs ? (
            <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
              {f.alsoKnownAs}
            </AppText>
          ) : null}

          {f.lifespan ? (
            <AppText variant="label" className="mt-md text-brand-ivory-soft">
              {f.lifespan}
              {f.ageAtDeath != null ? ` · died aged ${f.ageAtDeath}` : ''}
            </AppText>
          ) : null}

          {f.birthplace ? (
            <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
              {f.birthplace}
            </AppText>
          ) : null}

          <AppText variant="bodyLg" className="mt-md">
            {f.subtitle}
          </AppText>
          <AppText variant="body" className="mt-sm text-brand-ivory-soft" style={{ lineHeight: 26 }}>
            {f.shortDescription}
          </AppText>

          <View className="flex-row flex-wrap gap-2 mt-md">
            <Tag label={BORDER_LABELS[f.borderSide]} />
            <Tag label={FATE_LABELS[f.fate]} />
            {f.movements.map((m) => (
              <Tag key={m} label={MOVEMENT_LABELS[m]} />
            ))}
            {f.roles.map((role) => (
              <Tag key={role} label={ROLE_LABELS[role]} />
            ))}
          </View>
        </View>

        {f.martyrdom ? (
          <>
            <KolkaDivider showBindu={false} />
            <View
              className="mx-xl rounded-xl p-lg border"
              style={{ borderColor: brand.border, backgroundColor: brand.surface }}
            >
              <AppText variant="label" className="text-brand-kolka mb-sm">
                Martyrdom
              </AppText>
              <AppText variant="bodyLg" className="text-brand-ivory-soft" style={{ lineHeight: 28 }}>
                {f.martyrdom}
              </AppText>
            </View>
          </>
        ) : null}

        <KolkaDivider showBindu={false} />

        <FreedomFighterBody sections={f.bodySections} />

        {f.notableFor.length > 0 ? (
          <>
            <KolkaDivider showBindu={false} />
            <View className="px-xl">
              <AppText variant="h2" className="mb-md">
                Notable for
              </AppText>
              {f.notableFor.map((item) => (
                <View key={item} className="flex-row mb-sm">
                  <AppText variant="body" className="text-brand-kolka mr-sm">
                    ·
                  </AppText>
                  <AppText variant="bodyLg" className="flex-1 text-brand-ivory-soft" style={{ lineHeight: 26 }}>
                    {item}
                  </AppText>
                </View>
              ))}
            </View>
          </>
        ) : null}

        {related.data && related.data.length > 0 ? (
          <>
            <KolkaDivider showBindu={false} />
            <View className="px-xl pb-sm">
              <AppText variant="h2">Related profiles</AppText>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
            >
              {related.data.map((item) => (
                <FreedomFighterCard key={item.id} fighter={item} width={180} />
              ))}
            </ScrollView>
          </>
        ) : null}

        {stories.data && stories.data.length > 0 ? (
          <>
            <KolkaDivider showBindu={false} />
            <View className="px-xl pb-sm">
              <AppText variant="h2">Related stories</AppText>
              <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
                From The Magic of Bengal
              </AppText>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 24, gap: 12 }}
            >
              {stories.data.map((article) => (
                <ArticleTile key={article.id} article={article} size={STORY_TILE} />
              ))}
            </ScrollView>
          </>
        ) : null}
      </Screen>
    </>
  );
}
