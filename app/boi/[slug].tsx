import React from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Link, Stack, useLocalSearchParams } from 'expo-router';

import {
  AppText,
  BookBody,
  BookCard,
  BookCover,
  CinemaCard,
  EmptyState,
  ErrorView,
  KolkaDivider,
  Loading,
  Screen,
  SectionHeader,
  Tag,
} from '@/components';
import { useAsync } from '@/hooks/useAsync';
import {
  getAuthorForBook,
  getBookBySlug,
  getFilmsForBook,
  getRelatedBooks,
  LITERARY_FORM_LABELS,
} from '@/services';
import { brand } from '@/theme';

export default function BookDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const book = useAsync(() => getBookBySlug(slug), [slug]);
  const author = useAsync(
    () => (book.data ? getAuthorForBook(book.data.id) : Promise.resolve(null)),
    [book.data?.id],
  );
  const films = useAsync(
    () => (book.data ? getFilmsForBook(book.data.id) : Promise.resolve([])),
    [book.data?.id],
  );
  const related = useAsync(
    () => (book.data ? getRelatedBooks(book.data.id) : Promise.resolve([])),
    [book.data?.id],
  );

  if (book.loading) return <Loading label="Opening book profile…" />;
  if (book.error || !book.data) return <ErrorView message="Book not found." />;

  const b = book.data;

  return (
    <>
      <Stack.Screen options={{ title: '', headerShown: true }} />
      <Screen scroll edges={[]} contentClassName="pb-2xl">
        <BookCover book={b} height={280} featured />

        <View className="px-xl pt-lg">
          {b.englishTitle ? (
            <AppText variant="caption" className="text-brand-ivory-soft font-serif-italic">
              {b.englishTitle}
            </AppText>
          ) : null}

          <View className="flex-row flex-wrap gap-2 mt-md">
            <Tag label={LITERARY_FORM_LABELS[b.form]} active />
            {b.year ? <Tag label={b.year} active /> : null}
          </View>

          <AppText variant="bodyLg" className="mt-lg" style={{ lineHeight: 28 }}>
            {b.subtitle}
          </AppText>
        </View>

        <KolkaDivider />

        <BookBody sections={b.bodySections} />

        {b.significance ? (
          <>
            <KolkaDivider />
            <View
              className="mx-xl rounded-xl p-lg border"
              style={{ borderColor: brand.marigold, backgroundColor: brand.surface }}
            >
              <AppText variant="label" className="text-brand-marigold mb-xs">
                Significance
              </AppText>
              <AppText variant="bodyLg" style={{ lineHeight: 26 }}>
                {b.significance}
              </AppText>
            </View>
          </>
        ) : null}

        <KolkaDivider />

        <SectionHeader title="The author" subtitle="From the Authors hub" />
        {author.loading ? (
          <AppText variant="caption" className="px-xl">
            Loading author…
          </AppText>
        ) : author.data ? (
          <View className="px-xl">
            <Link href={`/authors/${author.data.slug}`} asChild>
              <Pressable
                className="rounded-xl p-lg border flex-row items-center justify-between"
                style={{ borderColor: brand.border, backgroundColor: brand.surface }}
              >
                <View className="flex-1 pr-md">
                  {author.data.nameBengali ? (
                    <AppText variant="caption" className="text-brand-kolka font-serif-italic">
                      {author.data.nameBengali}
                    </AppText>
                  ) : null}
                  <AppText variant="title">{author.data.name}</AppText>
                  <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
                    {author.data.subtitle}
                  </AppText>
                </View>
                <AppText variant="label" className="text-brand-kolka">
                  →
                </AppText>
              </Pressable>
            </Link>
          </View>
        ) : (
          <View className="px-xl">
            <AppText variant="body" className="text-brand-ivory-soft">
              {b.authorName}
            </AppText>
          </View>
        )}

        {films.data && films.data.length > 0 ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Made into a film" subtitle="From Cholochitro" />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
            >
              {films.data.map((film) => (
                <CinemaCard key={film.id} entry={film} width={160} />
              ))}
            </ScrollView>
          </>
        ) : null}

        <KolkaDivider />

        <SectionHeader title="Related books" subtitle="More from the shelf" />
        {related.data && related.data.length > 0 ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
          >
            {related.data.map((item) => (
              <BookCard key={item.id} book={item} width={148} />
            ))}
          </ScrollView>
        ) : (
          <View className="px-xl">
            <EmptyState
              title="No related books yet"
              subtitle="Connections will appear as the shelf grows."
            />
          </View>
        )}

        {b.isStub ? (
          <View
            className="mx-xl mt-xl rounded-xl p-lg border"
            style={{ borderColor: brand.border, backgroundColor: brand.surface }}
          >
            <AppText variant="label" className="text-brand-marigold mb-xs">
              Preview profile
            </AppText>
            <AppText variant="body" className="text-brand-ivory-soft">
              This entry is a stub — verify details before publishing.
            </AppText>
          </View>
        ) : null}
      </Screen>
    </>
  );
}
