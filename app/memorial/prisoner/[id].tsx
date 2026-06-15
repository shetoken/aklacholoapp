import React from 'react';
import { View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

import { AppText, ErrorView, KolkaDivider, Loading, Screen } from '@/components';
import { PRISONER_FATE_LABELS } from '@/constants/cellular-jail';
import { useAsync } from '@/hooks/useAsync';
import { getPrisonerById } from '@/services';
import { brand } from '@/theme';

export default function CellularJailPrisonerDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const prisoner = useAsync(() => getPrisonerById(id), [id]);

  if (prisoner.loading) return <Loading label="Opening record…" />;
  if (prisoner.error || !prisoner.data)
    return <ErrorView message="Record not found." />;

  const p = prisoner.data;

  return (
    <>
      <Stack.Screen options={{ title: '', headerShown: true }} />
      <Screen scroll edges={['bottom']} contentClassName="pb-2xl">
        <View
          className="items-center justify-center px-xl"
          style={{
            minHeight: 220,
            backgroundColor: brand.backgroundDeep,
          }}
        >
          {p.nameBengali ? (
            <AppText variant="quote" className="text-brand-kolka font-serif-italic text-center">
              {p.nameBengali}
            </AppText>
          ) : null}
          <AppText variant="h1" className="mt-sm text-center">
            {p.name}
          </AppText>
          <AppText variant="label" className="mt-md text-brand-kolka">
            Cellular Jail · Kala Pani
          </AppText>
        </View>

        <View className="px-xl pt-lg">
          {p.lifespan ? (
            <AppText variant="label" className="text-brand-ivory-soft">
              {p.lifespan}
            </AppText>
          ) : null}

          <AppText variant="bodyLg" className="mt-md text-brand-ivory-soft" style={{ lineHeight: 28 }}>
            {p.origin}
          </AppText>

          {p.case ? (
            <AppText variant="title" className="mt-lg">
              {p.case}
              {p.yearDeported ? ` · deported ${p.yearDeported}` : ''}
            </AppText>
          ) : null}

          <AppText variant="caption" className="mt-sm text-brand-ivory-soft">
            {PRISONER_FATE_LABELS[p.fate]}
          </AppText>
        </View>

        <KolkaDivider showBindu={false} />

        <View className="px-xl">
          <AppText variant="h2" className="mb-md">
            Circumstances
          </AppText>
          <AppText variant="bodyLg" className="text-brand-ivory-soft" style={{ lineHeight: 28 }}>
            {p.circumstances}
          </AppText>
        </View>

        <KolkaDivider showBindu={false} />

        <View
          className="mx-xl rounded-xl p-lg border"
          style={{ borderColor: brand.border, backgroundColor: brand.surface }}
        >
          <AppText variant="label" className="text-brand-kolka mb-sm">
            Source
          </AppText>
          <AppText variant="bodyLg" className="text-brand-ivory-soft" style={{ lineHeight: 28 }}>
            {p.source}
          </AppText>
        </View>
      </Screen>
    </>
  );
}
