import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Stack } from 'expo-router';

import {
  AppText,
  FestivalCard,
  KolkaDivider,
  Loading,
  ErrorView,
  ReligiousSiteCard,
  SectionHeader,
  Screen,
  Tag,
} from '@/components';
import { APP } from '@/constants/app';
import {
  FAITH_FILTER_ORDER,
  FAITH_LABELS,
  FESTIVAL_SEASON_ORDER,
  SEASON_LABELS,
  SITE_TYPE_FILTER_ORDER,
  SITE_TYPE_LABELS,
} from '@/constants/festivals-faith';
import { useAsync } from '@/hooks/useAsync';
import {
  getFestivals,
  getFlagshipFestivals,
  getFlagshipSites,
  getReligiousSites,
} from '@/services';
import type { FaithTradition, FestivalSeason, ReligiousSiteType } from '@/types';

export default function FestivalsFaithHubScreen() {
  const [festivalSeason, setFestivalSeason] = useState<FestivalSeason | null>(null);
  const [festivalFaith, setFestivalFaith] = useState<FaithTradition | null>(null);
  const [siteFaith, setSiteFaith] = useState<FaithTradition | null>(null);
  const [siteType, setSiteType] = useState<ReligiousSiteType | null>(null);

  const allFestivals = useAsync(() => getFestivals(), []);
  const flagshipFestivals = useAsync(() => getFlagshipFestivals(), []);
  const allSites = useAsync(() => getReligiousSites(), []);
  const flagshipSites = useAsync(() => getFlagshipSites(), []);

  const filteredFestivals = useMemo(() => {
    return (allFestivals.data ?? []).filter((f) => {
      if (festivalSeason && f.season !== festivalSeason) return false;
      if (festivalFaith && f.faith !== festivalFaith) return false;
      return true;
    });
  }, [allFestivals.data, festivalSeason, festivalFaith]);

  const filteredSites = useMemo(() => {
    return (allSites.data ?? []).filter((s) => {
      if (siteFaith && s.faith !== siteFaith) return false;
      if (siteType && s.type !== siteType) return false;
      return true;
    });
  }, [allSites.data, siteFaith, siteType]);

  const showFestivalFlagships =
    !festivalSeason && !festivalFaith && (flagshipFestivals.data?.length ?? 0) > 0;

  const showSiteFlagships =
    !siteFaith && !siteType && (flagshipSites.data?.length ?? 0) > 0;

  const loading =
    allFestivals.loading ||
    flagshipFestivals.loading ||
    allSites.loading ||
    flagshipSites.loading;

  const error =
    allFestivals.error ||
    flagshipFestivals.error ||
    allSites.error ||
    flagshipSites.error;

  if (loading) return <Loading label="Opening Bengal’s calendar…" />;
  if (error)
    return (
      <ErrorView
        onRetry={() => {
          allFestivals.reload();
          flagshipFestivals.reload();
          allSites.reload();
          flagshipSites.reload();
        }}
      />
    );

  return (
    <>
      <Stack.Screen options={{ title: 'Festivals & Faiths', headerShown: true }} />
      <Screen scroll edges={['bottom']} contentClassName="pb-2xl">
        <View className="px-xl pt-lg">
          <AppText variant="label" className="text-brand-marigold mb-xs">
            {APP.storyLabel}
          </AppText>
          <AppText variant="h1">Festivals & Faiths</AppText>
          <AppText variant="body" className="mt-sm text-brand-ivory-soft" style={{ lineHeight: 26 }}>
            Bengal’s calendar of celebration and its sacred places — Hindu, Muslim,
            Christian, and shared cultural festivals, plus temples, mosques, churches,
            and monasteries across the land.
          </AppText>
        </View>

        <KolkaDivider width={140} />

        <SectionHeader
          title="Festivals"
          subtitle="Browse by season or faith"
        />

        <AppText variant="label" className="px-xl mb-sm text-brand-ivory-soft">
          Season
        </AppText>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
        >
          <Pressable onPress={() => setFestivalSeason(null)}>
            <Tag label="All seasons" active={festivalSeason === null} />
          </Pressable>
          {FESTIVAL_SEASON_ORDER.map((season) => (
            <Pressable key={season} onPress={() => setFestivalSeason(season)}>
              <Tag label={SEASON_LABELS[season]} active={festivalSeason === season} />
            </Pressable>
          ))}
        </ScrollView>

        <AppText variant="label" className="px-xl mt-md mb-sm text-brand-ivory-soft">
          Faith / tradition
        </AppText>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
        >
          <Pressable onPress={() => setFestivalFaith(null)}>
            <Tag label="All" active={festivalFaith === null} />
          </Pressable>
          {FAITH_FILTER_ORDER.map((faith) => (
            <Pressable key={faith} onPress={() => setFestivalFaith(faith)}>
              <Tag label={FAITH_LABELS[faith]} active={festivalFaith === faith} />
            </Pressable>
          ))}
        </ScrollView>

        {showFestivalFlagships ? (
          <>
            <SectionHeader
              className="pt-lg"
              title="Featured festivals"
              subtitle="Flagship celebrations"
            />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
            >
              {(flagshipFestivals.data ?? []).map((festival) => (
                <FestivalCard key={festival.id} festival={festival} width={240} featured />
              ))}
            </ScrollView>
          </>
        ) : null}

        <View className="px-xl flex-row flex-wrap gap-md mt-lg">
          {filteredFestivals.map((festival) => (
            <FestivalCard key={festival.id} festival={festival} />
          ))}
        </View>

        {filteredFestivals.length === 0 ? (
          <View className="px-xl mt-md">
            <AppText variant="body" className="text-brand-ivory-soft">
              No festivals match these filters.
            </AppText>
          </View>
        ) : null}

        <KolkaDivider />

        <SectionHeader
          title="Sacred Bengal"
          subtitle="Temples, mosques, churches, and shrines"
        />

        <AppText variant="label" className="px-xl mb-sm text-brand-ivory-soft">
          Faith / tradition
        </AppText>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
        >
          <Pressable onPress={() => setSiteFaith(null)}>
            <Tag label="All" active={siteFaith === null} />
          </Pressable>
          {FAITH_FILTER_ORDER.map((faith) => (
            <Pressable key={faith} onPress={() => setSiteFaith(faith)}>
              <Tag label={FAITH_LABELS[faith]} active={siteFaith === faith} />
            </Pressable>
          ))}
        </ScrollView>

        <AppText variant="label" className="px-xl mt-md mb-sm text-brand-ivory-soft">
          Type
        </AppText>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
        >
          <Pressable onPress={() => setSiteType(null)}>
            <Tag label="All types" active={siteType === null} />
          </Pressable>
          {SITE_TYPE_FILTER_ORDER.map((type) => (
            <Pressable key={type} onPress={() => setSiteType(type)}>
              <Tag label={SITE_TYPE_LABELS[type]} active={siteType === type} />
            </Pressable>
          ))}
        </ScrollView>

        {showSiteFlagships ? (
          <>
            <SectionHeader
              className="pt-lg"
              title="Featured sacred sites"
              subtitle="Landmarks of devotion and heritage"
            />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
            >
              {(flagshipSites.data ?? []).map((site) => (
                <ReligiousSiteCard key={site.id} site={site} width={240} featured />
              ))}
            </ScrollView>
          </>
        ) : null}

        <View className="px-xl flex-row flex-wrap gap-md mt-lg">
          {filteredSites.map((site) => (
            <ReligiousSiteCard key={site.id} site={site} />
          ))}
        </View>

        {filteredSites.length === 0 ? (
          <View className="px-xl mt-md">
            <AppText variant="body" className="text-brand-ivory-soft">
              No sites match these filters.
            </AppText>
          </View>
        ) : null}
      </Screen>
    </>
  );
}
