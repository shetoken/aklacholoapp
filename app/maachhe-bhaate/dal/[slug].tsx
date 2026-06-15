import React from 'react';
import { View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

import {
  AppText,
  ErrorView,
  FoodBody,
  KolkaDivider,
  Loading,
  Screen,
  SectionHeader,
} from '@/components';
import { useAsync } from '@/hooks/useAsync';
import { getDalBySlug } from '@/services';
import { brand } from '@/theme';

export default function DalDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const dal = useAsync(() => getDalBySlug(slug), [slug]);

  if (dal.loading) return <Loading label="Opening dal profile…" />;
  if (dal.error || !dal.data)
    return <ErrorView message="Dal profile not found." />;

  const d = dal.data;

  return (
    <>
      <Stack.Screen options={{ title: '', headerShown: true }} />
      <Screen scroll edges={[]} contentClassName="pb-2xl">
        <View className="px-xl pt-xl">
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
          <AppText variant="bodyLg" className="mt-lg">
            {d.subtitle}
          </AppText>
        </View>

        <KolkaDivider />

        <FoodBody sections={d.bodySections} />

        {d.typicalPreparation ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Typical preparation" subtitle="How it lands on the plate" />
            <View className="px-xl">
              <AppText variant="bodyLg" style={{ lineHeight: 28 }}>
                {d.typicalPreparation}
              </AppText>
            </View>
          </>
        ) : null}

        {d.signatureDishes && d.signatureDishes.length > 0 ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Signature dishes" subtitle="Classic pairings" />
            <View className="px-xl">
              {d.signatureDishes.map((dish) => (
                <View key={dish} className="flex-row mb-sm">
                  <AppText variant="body" className="text-brand-kolka mr-sm">
                    ·
                  </AppText>
                  <AppText variant="bodyLg" className="flex-1" style={{ lineHeight: 26 }}>
                    {dish}
                  </AppText>
                </View>
              ))}
            </View>
          </>
        ) : null}

        {d.culturalNote ? (
          <>
            <KolkaDivider />
            <View
              className="mx-xl rounded-xl p-lg border"
              style={{ borderColor: brand.border, backgroundColor: brand.surface }}
            >
              <AppText variant="label" className="text-brand-kolka mb-xs">
                Cultural note
              </AppText>
              <AppText variant="body" style={{ lineHeight: 26 }}>
                {d.culturalNote}
              </AppText>
            </View>
          </>
        ) : null}

        {d.isStub ? (
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
