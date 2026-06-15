import React from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Link, Stack, useLocalSearchParams } from 'expo-router';

import {
  AppText,
  EmptyState,
  ErrorView,
  IconBody,
  IconCard,
  KolkaDivider,
  Loading,
  Screen,
  SectionHeader,
  Tag,
  Img,
} from '@/components';
import { useAsync } from '@/hooks/useAsync';
import {
  FIELD_LABELS,
  ICON_BORDER_LABELS,
  getAuthorById,
  getIconBySlug,
  getRelatedIcons,
} from '@/services';
import { brand } from '@/theme';

export default function IconDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const icon = useAsync(() => getIconBySlug(slug), [slug]);
  const related = useAsync(
    () => (icon.data ? getRelatedIcons(icon.data.id) : Promise.resolve([])),
    [icon.data?.id],
  );
  const linkedAuthor = useAsync(
    () =>
      icon.data?.relatedAuthorId
        ? getAuthorById(icon.data.relatedAuthorId).catch(() => null)
        : Promise.resolve(null),
    [icon.data?.relatedAuthorId],
  );

  if (icon.loading) return <Loading label="Opening profile…" />;
  if (icon.error || !icon.data)
    return <ErrorView message="Icon profile not found." />;

  const item = icon.data;
  const fields = [item.field, ...(item.secondaryFields ?? [])];

  return (
    <>
      <Stack.Screen options={{ title: '', headerShown: true }} />
      <Screen scroll edges={[]} contentClassName="pb-2xl">
        <Img
          source={item.portraitImage}
          radius={0}
          style={{ width: '100%', height: 360 }}
        />

        <View className="px-xl pt-lg">
          {item.nameBengali ? (
            <AppText variant="quote" className="text-brand-marigold font-serif-italic">
              {item.nameBengali}
            </AppText>
          ) : null}
          <AppText variant="h1" className="mt-xs">
            {item.name}
          </AppText>
          {item.alsoKnownAs ? (
            <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
              {item.alsoKnownAs}
            </AppText>
          ) : null}
          {item.lifespan ? (
            <AppText variant="label" className="mt-sm text-brand-ivory-soft">
              {item.lifespan}
            </AppText>
          ) : null}
          <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
            {ICON_BORDER_LABELS[item.borderSide]}
          </AppText>

          <View className="flex-row flex-wrap gap-2 mt-md">
            {fields.map((field) => (
              <Tag key={field} label={FIELD_LABELS[field]} active />
            ))}
          </View>

          <AppText variant="bodyLg" className="mt-lg">
            {item.subtitle}
          </AppText>
        </View>

        <KolkaDivider />

        <IconBody sections={item.bodySections} />

        {item.notableWorks && item.notableWorks.length > 0 ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Notable works" subtitle="Signature achievements" />
            <View className="px-xl">
              {item.notableWorks.map((work) => (
                <View key={work} className="flex-row mb-sm">
                  <AppText variant="body" className="text-brand-marigold mr-sm">
                    ·
                  </AppText>
                  <AppText variant="bodyLg" className="flex-1" style={{ lineHeight: 26 }}>
                    {work}
                  </AppText>
                </View>
              ))}
            </View>
          </>
        ) : null}

        {item.honours && item.honours.length > 0 ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Honours" subtitle="Verified recognitions" />
            <View className="px-xl flex-row flex-wrap gap-2">
              {item.honours.map((honour) => (
                <Tag key={honour} label={honour} active />
              ))}
            </View>
          </>
        ) : null}

        {linkedAuthor.data ? (
          <>
            <KolkaDivider />
            <Link href={`/authors/${linkedAuthor.data.slug}`} asChild>
              <Pressable
                className="mx-xl rounded-xl p-lg border flex-row items-center justify-between"
                style={{ borderColor: brand.border, backgroundColor: brand.surface }}
              >
                <View className="flex-1 pr-md">
                  <AppText variant="label" className="text-brand-marigold mb-xs">
                    Also in Voices of Bengal
                  </AppText>
                  <AppText variant="title">{linkedAuthor.data.name}</AppText>
                  <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
                    {linkedAuthor.data.subtitle}
                  </AppText>
                </View>
                <AppText variant="label" className="text-brand-marigold">
                  →
                </AppText>
              </Pressable>
            </Link>
          </>
        ) : null}

        <KolkaDivider />

        <SectionHeader title="Related icons" subtitle="Contemporaries and influences" />
        {related.data && related.data.length > 0 ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
          >
            {related.data.map((relatedIcon) => (
              <IconCard key={relatedIcon.id} icon={relatedIcon} width={180} />
            ))}
          </ScrollView>
        ) : (
          <View className="px-xl">
            <EmptyState
              title="No related icons yet"
              subtitle="Connections will appear here as the hub grows."
            />
          </View>
        )}

        {item.isStub ? (
          <View
            className="mx-xl mt-xl rounded-xl p-lg border"
            style={{ borderColor: brand.border, backgroundColor: brand.surface }}
          >
            <AppText variant="label" className="text-brand-marigold mb-xs">
              Preview profile
            </AppText>
            <AppText variant="body" className="text-brand-ivory-soft">
              This entry is a stub — verify details before publishing, especially
              for living figures.
            </AppText>
          </View>
        ) : null}
      </Screen>
    </>
  );
}
