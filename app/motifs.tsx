import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { MotiView } from 'moti';

import {
  Screen,
  AppText,
  KolkaMotif,
  KolkaDivider,
  Loading,
  ErrorView,
} from '@/components';
import { useAsync } from '@/hooks/useAsync';
import { getMotifs, getPalettes } from '@/services';
import type { Palette } from '@/types';
import { colors } from '@/theme';

export default function MotifsScreen() {
  const motifs = useAsync(() => getMotifs(), []);
  const palettes = useAsync(() => getPalettes(), []);

  const [motifIndex, setMotifIndex] = useState(0);
  const [paletteId, setPaletteId] = useState<string | null>(null);

  const activeMotif = motifs.data?.[motifIndex];

  // Palettes available for this motif (default + alternates), with global ones too.
  const motifPalettes: Palette[] = useMemo(() => {
    if (!activeMotif) return [];
    const own = [activeMotif.defaultPalette, ...activeMotif.alternatePalettes];
    const extra = (palettes.data ?? []).filter(
      (p) => !own.some((o) => o.id === p.id),
    );
    return [...own, ...extra];
  }, [activeMotif, palettes.data]);

  const activePalette =
    motifPalettes.find((p) => p.id === paletteId) ?? motifPalettes[0];

  if (motifs.loading || palettes.loading) return <Loading />;
  if (motifs.error || palettes.error || !activeMotif)
    return <ErrorView onRetry={() => { motifs.reload(); palettes.reload(); }} />;

  return (
    <Screen scroll edges={[]} contentClassName="pb-2xl">
      <View className="px-xl pt-md">
        <AppText variant="label" className="text-brand-primary mb-xs">
          Interactive
        </AppText>
        <AppText variant="h1">Kolka Studio</AppText>
        <AppText variant="body" className="mt-xs">
          Explore the motif at the heart of AklaCholo. Pick a pattern, then try
          it in different Bengal-inspired palettes.
        </AppText>
      </View>

      {/* Big preview */}
      <View className="items-center justify-center my-2xl">
        <View
          className="rounded-2xl items-center justify-center"
          style={{
            width: 240,
            height: 240,
            backgroundColor: activePalette?.colors[3] ?? colors.cream[100],
          }}
        >
          <MotiView
            key={`${activeMotif.id}-${activePalette?.id}`}
            from={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'timing', duration: 400 }}
          >
            <KolkaMotif
              svgKey={activeMotif.svgKey}
              size={160}
              palette={activePalette?.colors}
            />
          </MotiView>
        </View>
        <AppText variant="h3" className="mt-lg">
          {activeMotif.name}
        </AppText>
        <AppText variant="caption" className="text-center px-xl mt-xs">
          {activeMotif.description}
        </AppText>
      </View>

      <KolkaDivider />

      {/* Motif picker */}
      <AppText variant="label" className="px-xl mb-md text-brand-ink-muted">
        Choose a motif
      </AppText>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24, gap: 12 }}
      >
        {motifs.data?.map((m, i) => {
          const active = i === motifIndex;
          return (
            <Pressable
              key={m.id}
              onPress={() => {
                setMotifIndex(i);
                setPaletteId(null);
              }}
              className={`rounded-2xl p-md items-center justify-center border ${
                active
                  ? 'border-brand-primary bg-brand-surface'
                  : 'border-brand-border bg-brand-surface-alt'
              }`}
              style={{ width: 92, height: 92 }}
            >
              <KolkaMotif svgKey={m.svgKey} size={56} palette={m.defaultPalette.colors} />
            </Pressable>
          );
        })}
      </ScrollView>

      {/* Palette picker */}
      <AppText variant="label" className="px-xl mt-2xl mb-md text-brand-ink-muted">
        Choose a palette
      </AppText>
      <View className="px-xl">
        {motifPalettes.map((p) => {
          const active = (activePalette?.id ?? '') === p.id;
          return (
            <Pressable
              key={p.id}
              onPress={() => setPaletteId(p.id)}
              className={`flex-row items-center rounded-xl p-md mb-md border ${
                active ? 'border-brand-primary' : 'border-brand-border'
              } bg-brand-surface`}
            >
              <View className="flex-row mr-md">
                {p.colors.map((hex, i) => (
                  <View
                    key={i}
                    style={{
                      width: 28,
                      height: 28,
                      backgroundColor: hex,
                      borderRadius: 6,
                      marginLeft: i === 0 ? 0 : -6,
                      borderWidth: 1,
                      borderColor: colors.cream[50],
                    }}
                  />
                ))}
              </View>
              <AppText variant="title" className="flex-1">
                {p.name}
              </AppText>
            </Pressable>
          );
        })}
      </View>
    </Screen>
  );
}
