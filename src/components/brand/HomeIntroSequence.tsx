import React, { useCallback, useEffect, useState } from 'react';
import {
  Dimensions,
  Pressable,
  ScrollView,
  View,
  type LayoutChangeEvent,
} from 'react-native';
import { Link } from 'expo-router';
import { MotiView } from 'moti';

import { AppText } from '@/components/ui/Text';
import { BrandName } from '@/components/brand/BrandName';
import { KolkaMotif } from '@/components/brand/motifs/KolkaMotif';
import { Img } from '@/components/ui/Img';
import { APP } from '@/constants/app';
import { BRAND_INTRO } from '@/content/brand';
import { brand } from '@/theme';
import type { Product } from '@/types';

const { width, height } = Dimensions.get('window');

type Phase = 'name' | 'tagline' | 'about' | 'lift' | 'window' | 'expand' | 'done';

const TIMING: Record<Exclude<Phase, 'done'>, number> = {
  name: 1100,
  tagline: 1100,
  about: 2200,
  lift: 900,
  window: 1400,
  expand: 1000,
};

const ORDER: Exclude<Phase, 'done'>[] = [
  'name',
  'tagline',
  'about',
  'lift',
  'window',
  'expand',
];

const LOGO_PALETTE = [brand.ivory, brand.marigold, brand.terracotta, brand.indigo];

function DiscoverWindow({
  products,
  expanded,
}: {
  products: Product[];
  expanded: boolean;
}) {
  const preview = products.slice(0, 4);
  const windowW = expanded ? width - 48 : width * 0.82;
  const windowH = expanded ? height * 0.52 : 200;

  return (
    <MotiView
      animate={{
        width: windowW,
        height: windowH,
        opacity: 1,
      }}
      transition={{ type: 'timing', duration: expanded ? 700 : 500 }}
      style={{
        borderWidth: 1,
        borderColor: `${brand.ivory}55`,
        borderRadius: expanded ? 16 : 12,
        overflow: 'hidden',
        backgroundColor: brand.surface,
      }}
    >
      <View
        className="px-lg py-md flex-row items-center justify-between"
        style={{ borderBottomWidth: 1, borderBottomColor: `${brand.ivory}22` }}
      >
        <AppText variant="h3" className="text-brand-ivory">
          Discover
        </AppText>
        <AppText variant="caption" className="text-brand-muted">
          Browse the craft
        </AppText>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ padding: 12, gap: 10 }}
      >
        {preview.map((p) => {
          const cover = p.images[0];
          if (!cover) return null;
          const thumbW = expanded ? 120 : 88;
          const thumbH = cover?.aspectRatio ? thumbW / cover.aspectRatio : thumbW * 1.2;
          return (
            <Link key={p.id} href={`/product/${p.id}`} asChild>
              <Pressable>
                <View
                  style={{
                    width: thumbW,
                    borderRadius: 8,
                    overflow: 'hidden',
                    borderWidth: 1,
                    borderColor: `${brand.ivory}18`,
                  }}
                >
                  <Img
                    source={cover}
                    style={{ width: thumbW, height: Math.min(thumbH, expanded ? 140 : 96) }}
                  />
                  {expanded ? (
                    <View className="p-sm">
                      <AppText
                        variant="caption"
                        className="text-brand-ivory-soft"
                        numberOfLines={1}
                      >
                        {p.title}
                      </AppText>
                    </View>
                  ) : null}
                </View>
              </Pressable>
            </Link>
          );
        })}
      </ScrollView>
      {expanded ? (
        <View className="px-lg pb-md">
          <AppText variant="body" className="text-brand-ivory-soft" numberOfLines={2}>
            {BRAND_INTRO.discovery}
          </AppText>
        </View>
      ) : null}
    </MotiView>
  );
}

/**
 * Cinematic Home opener: name → tagline → logo + Brand.md summary → lift →
 * Discover peek in a framed window → expand into the full feed.
 */
export function HomeIntroSequence({
  products,
  onComplete,
}: {
  products: Product[];
  onComplete: () => void;
}) {
  const [phase, setPhase] = useState<Phase>('name');
  const [heroH, setHeroH] = useState(0);

  const finish = useCallback(() => {
    setPhase('done');
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    if (phase === 'done') return;
    const idx = ORDER.indexOf(phase as Exclude<Phase, 'done'>);
    const delay = TIMING[phase as Exclude<Phase, 'done'>];
    const next = ORDER[idx + 1];
    const t = setTimeout(() => {
      if (next) setPhase(next);
      else finish();
    }, delay);
    return () => clearTimeout(t);
  }, [phase, finish]);

  if (phase === 'done') return null;

  const lifted = phase === 'lift' || phase === 'window' || phase === 'expand';
  const showWindow = phase === 'window' || phase === 'expand';
  const expanded = phase === 'expand';

  const heroShift = lifted ? -(heroH ? heroH * 0.55 : height * 0.18) : 0;
  const heroScale = lifted ? 0.88 : 1;
  const heroOpacity = expanded ? 0 : 1;

  return (
    <Pressable
      onPress={finish}
      style={{
        flex: 1,
        backgroundColor: brand.indigo,
      }}
    >
      <MotiView
        animate={{ opacity: expanded ? 0 : 1 }}
        transition={{ type: 'timing', duration: expanded ? 600 : 200 }}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 24 }}
      >
        {/* Brand hero — rises as Discover window appears */}
        <MotiView
          onLayout={(e: LayoutChangeEvent) => setHeroH(e.nativeEvent.layout.height)}
          animate={{
            translateY: heroShift,
            scale: heroScale,
            opacity: heroOpacity,
          }}
          transition={{ type: 'timing', duration: 650 }}
          style={{ alignItems: 'center', width: '100%' }}
        >
          <MotiView
            from={{ opacity: 0, translateY: 10 }}
            animate={{
              opacity:
                phase === 'name' ||
                phase === 'tagline' ||
                phase === 'about' ||
                phase === 'lift'
                  ? 1
                  : 0,
              translateY: 0,
            }}
            transition={{ type: 'timing', duration: 500 }}
          >
            <BrandName
              variant="display"
              className="text-center text-brand-ivory"
            />
          </MotiView>

          <MotiView
            from={{ opacity: 0, translateY: 8 }}
            animate={{
              opacity:
                phase === 'tagline' ||
                phase === 'about' ||
                phase === 'lift' ||
                phase === 'window'
                  ? 1
                  : 0,
              translateY: 0,
            }}
            transition={{ type: 'timing', duration: 500, delay: 80 }}
            style={{ marginTop: 12 }}
          >
            <AppText
              variant="quote"
              className="text-center text-brand-marigold font-serif-italic"
              style={{
                textShadowColor: brand.marigold,
                textShadowRadius: 18,
                textShadowOffset: { width: 0, height: 0 },
              }}
            >
              {APP.tagline}
            </AppText>
          </MotiView>

          <MotiView
            from={{ opacity: 0, scale: 0.92 }}
            animate={{
              opacity:
                phase === 'about' ||
                phase === 'lift' ||
                phase === 'window'
                  ? 1
                  : 0,
              scale: 1,
              translateY: phase === 'about' ? -4 : 0,
            }}
            transition={{ type: 'timing', duration: 600 }}
            style={{ marginTop: 28, alignItems: 'center', maxWidth: 320 }}
          >
            <KolkaMotif svgKey="lotus" size={72} palette={[...LOGO_PALETTE]} />
            <AppText
              variant="body"
              className="text-center text-brand-ivory-soft mt-lg leading-relaxed"
            >
              {BRAND_INTRO.summary}
            </AppText>
          </MotiView>
        </MotiView>

        {/* Discover peek — small window, then expands */}
        {showWindow && products.length > 0 ? (
          <MotiView
            from={{ opacity: 0, translateY: 32 }}
            animate={{
              opacity: 1,
              translateY: expanded ? -height * 0.06 : 24,
            }}
            transition={{ type: 'timing', duration: 550 }}
            style={{
              position: 'absolute',
              bottom: expanded ? height * 0.12 : height * 0.14,
              alignItems: 'center',
            }}
          >
            <DiscoverWindow products={products} expanded={expanded} />
          </MotiView>
        ) : null}

        <MotiView
          animate={{ opacity: phase === 'name' ? 0.5 : 0.35 }}
          style={{ position: 'absolute', bottom: 32 }}
        >
          <AppText variant="caption" className="text-brand-muted">
            Tap to skip
          </AppText>
        </MotiView>
      </MotiView>
    </Pressable>
  );
}
