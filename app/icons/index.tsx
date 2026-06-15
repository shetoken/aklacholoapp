import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Stack } from 'expo-router';

import {
  AppText,
  AutoScrollRow,
  ErrorView,
  IconCard,
  KolkaDivider,
  Loading,
  Screen,
  SectionHeader,
  Tag,
} from '@/components';
import { APP } from '@/constants/app';
import { useAsync } from '@/hooks/useAsync';
import {
  FIELD_FILTER_ORDER,
  FIELD_LABELS,
  getFlagshipIcons,
  getIcons,
  getIconsByField,
} from '@/services';
import type { Icon, IconField } from '@/types';

function filterFlagships(items: Icon[], field: IconField | null): Icon[] {
  if (!field) return items;
  return items.filter(
    (icon) => icon.field === field || icon.secondaryFields?.includes(field),
  );
}

export default function IconsOfBengalHubScreen() {
  const [selectedField, setSelectedField] = useState<IconField | null>(null);

  const flagship = useAsync(() => getFlagshipIcons(), []);
  const allIcons = useAsync(() => getIcons(), []);
  const fieldIcons = useAsync(
    () => (selectedField ? getIconsByField(selectedField) : Promise.resolve([])),
    [selectedField],
  );

  const loading = flagship.loading || allIcons.loading || fieldIcons.loading;
  const error = flagship.error || allIcons.error || fieldIcons.error;

  const browseIcons = selectedField ? (fieldIcons.data ?? []) : (allIcons.data ?? []);
  const featuredIcons = useMemo(
    () => filterFlagships(flagship.data ?? [], selectedField),
    [flagship.data, selectedField],
  );

  if (loading) return <Loading label="Opening Icons of Bengal…" />;
  if (error)
    return (
      <ErrorView
        onRetry={() => {
          flagship.reload();
          allIcons.reload();
          fieldIcons.reload();
        }}
      />
    );

  return (
    <>
      <Stack.Screen options={{ title: 'Icons of Bengal', headerShown: true }} />
      <Screen scroll edges={['bottom']} contentClassName="pb-2xl">
        <View className="px-xl pt-lg">
          <AppText variant="label" className="text-brand-marigold mb-xs">
            {APP.storyLabel}
          </AppText>
          <AppText variant="h1">Icons of Bengal</AppText>
          <AppText variant="body" className="mt-sm text-brand-ivory-soft" style={{ lineHeight: 26 }}>
            Film, music, science, economics, art, and thought — the genius of
            Bengal across every field, honoured by name.
          </AppText>
        </View>

        {featuredIcons.length > 0 ? (
          <>
            <SectionHeader
              className="pt-lg"
              title="Featured icons"
              subtitle="Flagship profiles — start here"
            />
            <AutoScrollRow
              data={featuredIcons}
              keyExtractor={(icon) => icon.id}
              gap={16}
              speed={0.2}
              renderItem={(icon) => <IconCard icon={icon} width={220} featured />}
            />
          </>
        ) : null}

        <KolkaDivider width={120} />

        <SectionHeader
          title="Browse by field"
          subtitle="Film, music, science, and more"
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
        >
          <Pressable onPress={() => setSelectedField(null)}>
            <Tag label="All fields" active={selectedField === null} />
          </Pressable>
          {FIELD_FILTER_ORDER.map((field) => (
            <Pressable key={field} onPress={() => setSelectedField(field)}>
              <Tag label={FIELD_LABELS[field]} active={selectedField === field} />
            </Pressable>
          ))}
        </ScrollView>

        <SectionHeader
          className="pt-lg"
          title={selectedField ? FIELD_LABELS[selectedField] : 'All icons'}
          subtitle={
            browseIcons.length === 1
              ? '1 profile'
              : `${browseIcons.length} profiles`
          }
        />

        {browseIcons.length > 0 ? (
          <View className="px-xl flex-row flex-wrap gap-md">
            {browseIcons.map((icon) => (
              <IconCard key={icon.id} icon={icon} width={160} />
            ))}
          </View>
        ) : (
          <View className="px-xl">
            <AppText variant="body" className="text-brand-ivory-soft">
              No icons match this field yet.
            </AppText>
          </View>
        )}
      </Screen>
    </>
  );
}
