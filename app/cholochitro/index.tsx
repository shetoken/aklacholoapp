import React from 'react';
import { Pressable, View } from 'react-native';
import { Link, Stack } from 'expo-router';

import {
  AppText,
  AutoScrollRow,
  CinemaCard,
  CinemaPoster,
  ErrorView,
  KolkaDivider,
  Loading,
  Screen,
  SectionHeader,
} from '@/components';
import { ChevronRight } from '@/components/ui/icons';
import { APP } from '@/constants/app';
import { useAsync } from '@/hooks/useAsync';
import { getFilms, getFlagshipCinema } from '@/services';
import { brand } from '@/theme';

export default function CholochitroHubScreen() {
  const flagship = useAsync(() => getFlagshipCinema(), []);
  const films = useAsync(() => getFilms(), []);

  const loading = flagship.loading || films.loading;
  const error = flagship.error || films.error;

  const tollywood = flagship.data?.find((entry) => entry.id === 'film-tollywood');
  const featuredFilms = films.data?.filter((entry) => entry.isFlagship) ?? [];

  if (loading) return <Loading label="Opening Cholochitro…" />;
  if (error)
    return (
      <ErrorView
        onRetry={() => {
          flagship.reload();
          films.reload();
        }}
      />
    );

  return (
    <>
      <Stack.Screen options={{ title: 'Cholochitro', headerShown: true }} />
      <Screen scroll edges={['bottom']} contentClassName="pb-2xl">
        <View className="px-xl pt-lg">
          <AppText variant="label" className="text-brand-kolka mb-xs">
            {APP.storyLabel}
          </AppText>
          <AppText variant="h1">Cholochitro</AppText>
          <AppText variant="body" className="mt-xs text-brand-ivory-soft">
            Cinema of Bengal
          </AppText>
          <AppText variant="body" className="mt-sm text-brand-ivory-soft" style={{ lineHeight: 26 }}>
            From Satyajit Ray and Ritwik Ghatak to Tollywood’s golden age — the films
            and movements that put Bengali cinema on the world map.
          </AppText>
        </View>

        {tollywood ? (
          <>
            <SectionHeader className="pt-lg" title="Tollywood" subtitle="The Bengali film industry" />
            <Link href={`/cholochitro/${tollywood.slug}`} asChild>
              <Pressable className="mx-xl rounded-2xl overflow-hidden border border-brand-border">
                <View style={{ backgroundColor: brand.surface }}>
                  <CinemaPoster entry={tollywood} height={200} featured />
                  <View className="p-xl pt-md">
                    <AppText variant="body" className="text-brand-ivory-soft" style={{ lineHeight: 24 }}>
                      {tollywood.shortDescription}
                    </AppText>
                    <View className="flex-row items-center mt-md">
                      <AppText variant="label" className="text-brand-kolka mr-xs">
                        Read overview
                      </AppText>
                      <ChevronRight color={brand.kolka} />
                    </View>
                  </View>
                </View>
              </Pressable>
            </Link>
          </>
        ) : null}

        {featuredFilms.length > 0 ? (
          <>
            <SectionHeader className="pt-lg" title="Landmark films" subtitle="Start here" />
            <AutoScrollRow
              data={featuredFilms}
              keyExtractor={(entry) => entry.id}
              gap={16}
              speed={0.2}
              renderItem={(entry) => <CinemaCard entry={entry} featured />}
            />
          </>
        ) : null}

        <KolkaDivider width={120} />

        <SectionHeader
          title="All films"
          subtitle={films.data?.length === 1 ? '1 film' : `${films.data?.length ?? 0} films`}
        />

        {films.data && films.data.length > 0 ? (
          <View className="px-xl flex-row flex-wrap gap-md">
            {films.data.map((entry) => (
              <CinemaCard key={entry.id} entry={entry} />
            ))}
          </View>
        ) : (
          <View className="px-xl">
            <AppText variant="body" className="text-brand-ivory-soft">
              No films yet.
            </AppText>
          </View>
        )}
      </Screen>
    </>
  );
}
