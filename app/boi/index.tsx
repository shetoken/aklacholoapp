import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Stack } from 'expo-router';

import {
  AppText,
  AutoScrollRow,
  BookCard,
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
  getBooks,
  getBooksByForm,
  getFlagshipBooks,
  LITERARY_FORM_FILTER_ORDER,
  LITERARY_FORM_LABELS,
} from '@/services';
import type { LiteraryForm } from '@/types';

export default function BoiHubScreen() {
  const [form, setForm] = useState<LiteraryForm | null>(null);

  const flagship = useAsync(() => getFlagshipBooks(), []);
  const allBooks = useAsync(() => getBooks(), []);
  const formBooks = useAsync(
    () => (form ? getBooksByForm(form) : Promise.resolve([])),
    [form],
  );

  const loading = flagship.loading || allBooks.loading || formBooks.loading;
  const error = flagship.error || allBooks.error || formBooks.error;

  const browseBooks = useMemo(
    () => (form ? (formBooks.data ?? []) : (allBooks.data ?? [])),
    [form, formBooks.data, allBooks.data],
  );

  if (loading) return <Loading label="Opening Boi…" />;
  if (error)
    return (
      <ErrorView
        onRetry={() => {
          flagship.reload();
          allBooks.reload();
          formBooks.reload();
        }}
      />
    );

  return (
    <>
      <Stack.Screen options={{ title: 'Boi', headerShown: true }} />
      <Screen scroll edges={['bottom']} contentClassName="pb-2xl">
        <View className="px-xl pt-lg">
          <AppText variant="label" className="text-brand-kolka mb-xs">
            {APP.storyLabel}
          </AppText>
          <AppText variant="h1">Boi</AppText>
          <AppText variant="body" className="mt-xs text-brand-ivory-soft">
            Landmark Books of Bengal
          </AppText>
          <AppText variant="body" className="mt-sm text-brand-ivory-soft" style={{ lineHeight: 26 }}>
            From Pather Panchali and Gitanjali to Gora and Ghare Baire — the works
            that shaped Bengali letters and crossed into world cinema.
          </AppText>
        </View>

        {flagship.data && flagship.data.length > 0 ? (
          <>
            <SectionHeader className="pt-lg" title="Landmark works" subtitle="Start here" />
            <AutoScrollRow
              data={flagship.data}
              keyExtractor={(book) => book.id}
              gap={16}
              speed={0.2}
              renderItem={(book) => <BookCard book={book} featured />}
            />
          </>
        ) : null}

        <SectionHeader className="pt-lg" title="Browse by form" subtitle="Novels to poetry" />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
        >
          <Pressable onPress={() => setForm(null)}>
            <Tag label="All forms" active={form === null} />
          </Pressable>
          {LITERARY_FORM_FILTER_ORDER.map((f) => (
            <Pressable key={f} onPress={() => setForm(f)}>
              <Tag label={LITERARY_FORM_LABELS[f]} active={form === f} />
            </Pressable>
          ))}
        </ScrollView>

        <KolkaDivider width={120} />

        <SectionHeader
          title="The shelf"
          subtitle={browseBooks.length === 1 ? '1 book' : `${browseBooks.length} books`}
        />

        {browseBooks.length > 0 ? (
          <View className="px-xl flex-row flex-wrap gap-md">
            {browseBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </View>
        ) : (
          <View className="px-xl">
            <AppText variant="body" className="text-brand-ivory-soft">
              No books match this form yet.
            </AppText>
          </View>
        )}
      </Screen>
    </>
  );
}
