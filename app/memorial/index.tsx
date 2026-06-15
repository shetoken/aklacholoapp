import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Stack } from 'expo-router';

import {
  AppText,
  AutoScrollRow,
  CellularJailNoteBlock,
  KolkaDivider,
  Loading,
  ErrorView,
  MemorialTileCard,
  Screen,
  Tag,
} from '@/components';
import { APP } from '@/constants/app';
import { MEMORIAL_TILE_WIDTH } from '@/constants/memorial';
import {
  BORDER_FILTER_ORDER,
  BORDER_LABELS,
  MOVEMENT_FILTER_ORDER,
  MOVEMENT_LABELS,
} from '@/constants/freedom-fighters';
import { useAsync } from '@/hooks/useAsync';
import {
  buildMemorialTiles,
  getCellularJailIntro,
  getCellularJailNote,
  getCellularJailPrisoners,
  getFreedomFighters,
} from '@/services';
import type { BorderSide, StruggleMovement } from '@/types';
import { brand } from '@/theme';

export default function SonsAndDaughtersHubScreen() {
  const [borderSide, setBorderSide] = useState<BorderSide | null>(null);
  const [movement, setMovement] = useState<StruggleMovement | null>(null);
  const [womenOnly, setWomenOnly] = useState(false);

  const fighters = useAsync(() => getFreedomFighters(), []);
  const prisoners = useAsync(() => getCellularJailPrisoners(), []);
  const intro = useAsync(() => getCellularJailIntro(), []);
  const note = useAsync(() => getCellularJailNote(), []);

  const tiles = useMemo(
    () =>
      buildMemorialTiles(fighters.data ?? [], prisoners.data ?? [], {
        borderSide,
        movement,
        womenOnly,
      }),
    [fighters.data, prisoners.data, borderSide, movement, womenOnly],
  );

  const fighterCount = tiles.filter((t) => t.kind === 'fighter').length;
  const prisonerCount = tiles.filter((t) => t.kind === 'prisoner').length;

  const loading =
    fighters.loading || prisoners.loading || intro.loading || note.loading;
  const error =
    fighters.error || prisoners.error || intro.error || note.error;

  if (loading) return <Loading label="Opening the memorial…" />;
  if (error || !intro.data || !note.data)
    return (
      <ErrorView
        onRetry={() => {
          fighters.reload();
          prisoners.reload();
          intro.reload();
          note.reload();
        }}
      />
    );

  const kalaPani = intro.data;

  return (
    <>
      <Stack.Screen options={{ title: 'Sons & Daughters of Bengal', headerShown: true }} />
      <Screen scroll edges={['bottom']} contentClassName="pb-2xl">
        <View className="px-xl pt-lg">
          <AppText variant="label" className="text-brand-kolka mb-xs">
            {APP.storyLabel} · Memorial
          </AppText>
          <AppText variant="h1">Sons & Daughters of Bengal</AppText>
          <AppText variant="body" className="mt-sm text-brand-ivory-soft" style={{ lineHeight: 26 }}>
            Revolutionaries, leaders, and documented exiles — honoured with accuracy
            and dignity. Every name here is verified history.
          </AppText>
        </View>

        <View className="px-xl mt-lg mb-md">
          <Pressable
            onPress={() => setWomenOnly((v) => !v)}
            className="rounded-xl py-md px-lg border"
            style={{
              borderColor: womenOnly ? brand.kolka : brand.border,
              backgroundColor: womenOnly ? brand.surface : 'transparent',
            }}
          >
            <AppText
              variant="label"
              className={womenOnly ? 'text-brand-ivory' : 'text-brand-ivory-soft'}
            >
              Women revolutionaries
            </AppText>
            <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
              Pritilata, Matangini Hazra, Bina Das, Kalpana Datta, and more
            </AppText>
          </Pressable>
        </View>

        <AppText variant="label" className="px-xl mb-sm text-brand-ivory-soft">
          Border side
        </AppText>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
        >
          <Pressable onPress={() => setBorderSide(null)}>
            <Tag label="All" active={borderSide === null && !womenOnly} />
          </Pressable>
          {BORDER_FILTER_ORDER.map((side) => (
            <Pressable key={side} onPress={() => setBorderSide(side)}>
              <Tag label={BORDER_LABELS[side]} active={borderSide === side} />
            </Pressable>
          ))}
        </ScrollView>

        <AppText variant="label" className="px-xl mt-md mb-sm text-brand-ivory-soft">
          Movement
        </AppText>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
        >
          <Pressable onPress={() => setMovement(null)}>
            <Tag label="All movements" active={movement === null} />
          </Pressable>
          {MOVEMENT_FILTER_ORDER.map((m) => (
            <Pressable key={m} onPress={() => setMovement(m)}>
              <Tag label={MOVEMENT_LABELS[m]} active={movement === m} />
            </Pressable>
          ))}
        </ScrollView>

        <KolkaDivider width={120} showBindu={false} />

        <View className="px-xl">
          <AppText variant="quote" className="text-brand-kolka font-serif-italic">
            {kalaPani.titleBengali}
          </AppText>
          <AppText variant="h2" className="mt-xs">
            {kalaPani.title}
          </AppText>
          <AppText variant="caption" className="mt-sm text-brand-ivory-soft">
            {kalaPani.location} · {kalaPani.builtPeriod}
          </AppText>
          <AppText variant="body" className="mt-md text-brand-ivory-soft" style={{ lineHeight: 26 }}>
            {kalaPani.summary}
          </AppText>
        </View>

        <View className="mt-lg">
          <CellularJailNoteBlock note={note.data} />
        </View>

        {tiles.length > 0 ? (
          <>
            <View className="px-xl pt-xl pb-sm">
              <AppText variant="h2">Remembered</AppText>
              <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
                {fighterCount > 0 && prisonerCount > 0
                  ? `${fighterCount} profiles · ${prisonerCount} Kala Pani records`
                  : tiles.length === 1
                    ? '1 documented name'
                    : `${tiles.length} documented names`}
              </AppText>
            </View>
            <AutoScrollRow
              data={tiles}
              keyExtractor={(tile) => tile.key}
              gap={16}
              speed={0.22}
              renderItem={(tile) => (
                <MemorialTileCard tile={tile} width={MEMORIAL_TILE_WIDTH} featured />
              )}
            />
            <View className="px-xl pt-lg pb-sm">
              <AppText variant="h2">All names</AppText>
            </View>
            <View className="px-xl flex-row flex-wrap gap-md">
              {tiles.map((tile) => (
                <MemorialTileCard key={tile.key} tile={tile} />
              ))}
            </View>
          </>
        ) : (
          <View className="px-xl pt-xl">
            <AppText variant="body" className="text-brand-ivory-soft">
              No names match these filters.
            </AppText>
          </View>
        )}
      </Screen>
    </>
  );
}
