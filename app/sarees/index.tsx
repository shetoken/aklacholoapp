import React from 'react';
import { View } from 'react-native';
import { Stack } from 'expo-router';

import {
  AppText,
  KolkaDivider,
  Loading,
  ErrorView,
  SareeCard,
  SectionHeader,
  Screen,
} from '@/components';
import { APP } from '@/constants/app';
import { useAsync } from '@/hooks/useAsync';
import { getSareesByAxis } from '@/services';

export default function BengaliSareesHubScreen() {
  const types = useAsync(() => getSareesByAxis('type'), []);
  const styles = useAsync(() => getSareesByAxis('style'), []);
  const drapes = useAsync(() => getSareesByAxis('drape'), []);

  const loading = types.loading || styles.loading || drapes.loading;
  const error = types.error || styles.error || drapes.error;

  if (loading) return <Loading label="Unfolding Bengal’s sarees…" />;
  if (error)
    return (
      <ErrorView
        onRetry={() => {
          types.reload();
          styles.reload();
          drapes.reload();
        }}
      />
    );

  const styleFeatured = styles.data?.[0];
  const drapeFeatured = drapes.data?.[0];

  return (
    <>
      <Stack.Screen options={{ title: 'Bengali Sarees', headerShown: true }} />
      <Screen scroll edges={['bottom']} contentClassName="pb-2xl">
        <View className="px-xl pt-lg">
          <AppText variant="label" className="text-brand-marigold mb-xs">
            {APP.storyLabel}
          </AppText>
          <AppText variant="h1">Bengali Sarees</AppText>
          <AppText variant="body" className="mt-sm text-brand-ivory-soft" style={{ lineHeight: 26 }}>
            An encyclopedia of weaves, styles, and drapes — type by type, from jamdani
            muslin to the laal-paar shada of Durga Puja.
          </AppText>
        </View>

        <KolkaDivider width={140} />

        <SectionHeader
          title="Types"
          subtitle="The weaves and fabrics — jamdani, tant, baluchari, and more"
        />
        <View className="px-xl flex-row flex-wrap gap-md">
          {(types.data ?? []).map((saree) => (
            <SareeCard key={saree.id} saree={saree} width={160} />
          ))}
        </View>

        {styleFeatured ? (
          <>
            <SectionHeader
              className="pt-lg"
              title="Style"
              subtitle="Cross-cutting looks that span many weaves"
            />
            <View className="px-xl">
              <SareeCard saree={styleFeatured} featured />
            </View>
          </>
        ) : null}

        {drapeFeatured ? (
          <>
            <SectionHeader
              className="pt-lg"
              title="Drape"
              subtitle="How Bengal wears the saree"
            />
            <View className="px-xl">
              <SareeCard saree={drapeFeatured} featured />
            </View>
          </>
        ) : null}
      </Screen>
    </>
  );
}
