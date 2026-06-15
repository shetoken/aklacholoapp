import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Stack } from 'expo-router';

import {
  AppText,
  AuthorCard,
  KolkaDivider,
  Loading,
  ErrorView,
  SectionHeader,
  Screen,
  Tag,
} from '@/components';
import { APP } from '@/constants/app';
import {
  AUTHOR_FORM_ORDER,
  ERA_META,
  FORM_LABELS,
  LITERARY_ERA_ORDER,
} from '@/constants/authors';
import { useAsync } from '@/hooks/useAsync';
import { getAuthors, getFlagshipAuthors } from '@/services';
import type { Author, AuthorForm } from '@/types';
import { brand } from '@/theme';

function filterByForm(items: Author[], form: AuthorForm | null): Author[] {
  if (!form) return items;
  return items.filter((a) => a.forms.includes(form));
}

export default function VoicesOfBengalHubScreen() {
  const [selectedForm, setSelectedForm] = useState<AuthorForm | null>(null);

  const allAuthors = useAsync(() => getAuthors(), []);
  const flagship = useAsync(() => getFlagshipAuthors(), []);

  const loading = allAuthors.loading || flagship.loading;
  const error = allAuthors.error || flagship.error;

  const authorsByEra = useMemo(() => {
    const pool = filterByForm(allAuthors.data ?? [], selectedForm);
    return LITERARY_ERA_ORDER.map((era) => ({
      era,
      meta: ERA_META[era],
      authors: pool.filter((a) => a.era === era),
    })).filter((group) => group.authors.length > 0);
  }, [allAuthors.data, selectedForm]);

  const flagshipFiltered = useMemo(
    () => filterByForm(flagship.data ?? [], selectedForm),
    [flagship.data, selectedForm],
  );

  if (loading) return <Loading label="Opening Bengal’s literary voices…" />;
  if (error)
    return (
      <ErrorView
        onRetry={() => {
          allAuthors.reload();
          flagship.reload();
        }}
      />
    );

  return (
    <>
      <Stack.Screen options={{ title: 'Voices of Bengal', headerShown: true }} />
      <Screen scroll edges={['bottom']} contentClassName="pb-2xl">
        <View className="px-xl pt-lg">
          <AppText variant="label" className="text-brand-marigold mb-xs">
            {APP.storyLabel}
          </AppText>
          <AppText variant="h1">Voices of Bengal</AppText>
          <AppText variant="body" className="mt-sm text-brand-ivory-soft" style={{ lineHeight: 26 }}>
            Poets, novelists, and reformers — from the Bengal Renaissance to the
            diaspora. A timeline of the literature that shaped a culture.
          </AppText>
        </View>

        <KolkaDivider width={140} />

        <SectionHeader
          title="Filter by form"
          subtitle="Poet, novelist, playwright, and more"
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
        >
          <Pressable onPress={() => setSelectedForm(null)}>
            <Tag label="All" active={selectedForm === null} />
          </Pressable>
          {AUTHOR_FORM_ORDER.map((form) => (
            <Pressable key={form} onPress={() => setSelectedForm(form)}>
              <Tag label={FORM_LABELS[form]} active={selectedForm === form} />
            </Pressable>
          ))}
        </ScrollView>

        {flagshipFiltered.length > 0 ? (
          <>
            <SectionHeader
              className="pt-lg"
              title="Featured voices"
              subtitle="Full profiles — start here"
            />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
            >
              {flagshipFiltered.map((author) => (
                <AuthorCard key={author.id} author={author} width={220} featured />
              ))}
            </ScrollView>
          </>
        ) : null}

        <KolkaDivider />

        <SectionHeader
          title="Literary timeline"
          subtitle="Four eras of Bengali letters"
        />

        {authorsByEra.map(({ era, meta, authors: eraAuthors }, index) => (
          <View key={era} className="mb-xl">
            <View className="px-xl flex-row items-start">
              <View className="items-center mr-lg" style={{ width: 12 }}>
                <View
                  className="rounded-full"
                  style={{
                    width: 12,
                    height: 12,
                    backgroundColor: brand.marigold,
                  }}
                />
                {index < authorsByEra.length - 1 ? (
                  <View
                    style={{
                      width: 2,
                      flex: 1,
                      minHeight: 80,
                      backgroundColor: brand.border,
                      marginTop: 4,
                    }}
                  />
                ) : null}
              </View>
              <View className="flex-1 pb-md">
                <AppText variant="label" className="text-brand-marigold">
                  {meta.period}
                </AppText>
                <AppText variant="h2">{meta.label}</AppText>
                <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
                  {meta.description}
                </AppText>
                <View className="flex-row flex-wrap gap-md mt-md">
                  {eraAuthors.map((author) => (
                    <AuthorCard key={author.id} author={author} width={150} />
                  ))}
                </View>
              </View>
            </View>
          </View>
        ))}

        {authorsByEra.length === 0 ? (
          <View className="px-xl">
            <AppText variant="body" className="text-brand-ivory-soft">
              No authors match this form. Try another filter.
            </AppText>
          </View>
        ) : null}
      </Screen>
    </>
  );
}
