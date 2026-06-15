import React from 'react';
import { Pressable, View } from 'react-native';
import { Link, useRouter } from 'expo-router';

import { AppText } from '@/components/ui/Text';
import { APP } from '@/constants/app';
import {
  PILLARS,
  getPillar,
  type PillarId,
} from '@/constants/pillars';
import { useAuth } from '@/context/AuthProvider';
import { brand, colors } from '@/theme';

type PillarHeaderProps = {
  /** Active pillar tab, or `home` for the hub screen. */
  active: PillarId | 'home';
  tone?: 'light' | 'dark';
  /** Optional right-side action below the title row (e.g. cart later). */
  headerAction?: React.ReactNode;
  /** When set, the default pillar CTA becomes pressable. */
  onCtaPress?: () => void;
  /** Highlights the default CTA (e.g. search open). */
  ctaActive?: boolean;
};

const accentColor = {
  marigold: brand.marigold,
  ivory: brand.ivory,
  terracotta: brand.terracotta,
  vermillion: brand.vermillion,
} as const;

const HOME_INTRO_COPY =
  'AklaCholo is a home for the soul of Bengal — for those who carry her far from home, and those discovering her for the first time. Explore her unique beauty: her art, her artisans, her weavers, her food, music, and stories — all gathered onto a single thread at last.';

function PillarSwitcher({
  active,
  tone,
}: {
  active: PillarId | 'home';
  tone: 'light' | 'dark';
}) {
  const router = useRouter();
  const onDark = tone === 'dark';

  return (
    <View className="flex-row px-xl pt-lg pb-md gap-sm">
      {PILLARS.map((pillar) => {
        const isActive = active === pillar.id;
        const accent = accentColor[pillar.accent];

        return (
          <Pressable
            key={pillar.id}
            onPress={() => router.push(pillar.href)}
            className="flex-1 items-center py-sm rounded-lg"
            style={{
              backgroundColor: isActive
                ? onDark
                  ? `${accent}22`
                  : `${accent}18`
                : 'transparent',
              borderBottomWidth: isActive ? 2 : 0,
              borderBottomColor: isActive ? accent : 'transparent',
            }}
          >
            <AppText
              variant="label"
              className={
                isActive
                  ? onDark
                    ? 'text-brand-ivory'
                    : undefined
                  : onDark
                    ? 'text-brand-ivory-soft'
                    : undefined
              }
              style={
                isActive && !onDark
                  ? { color: accent }
                  : !onDark
                    ? { color: colors.text?.muted ?? '#8A7E72' }
                    : undefined
              }
            >
              {pillar.label}
            </AppText>
          </Pressable>
        );
      })}
    </View>
  );
}

/** Shared brand + pillar navigation header for Home and pillar tabs. */
export function PillarHeader({
  active,
  tone = 'dark',
  headerAction,
  onCtaPress,
  ctaActive = false,
}: PillarHeaderProps) {
  const { user, isGuest } = useAuth();
  const onDark = tone === 'dark';
  const pillar = active !== 'home' ? getPillar(active) : null;
  const accent = pillar ? accentColor[pillar.accent] : brand.marigold;

  const bg = onDark ? brand.indigo : colors.cream[200];
  const borderColor = onDark ? `${brand.ivory}33` : colors.cream[400];

  return (
    <View style={{ backgroundColor: bg, borderBottomWidth: 1, borderBottomColor: borderColor }}>
      {/* Brand row + account */}
      <View className="flex-row items-start justify-between px-xl pt-lg">
        <View className="flex-1 pr-md">
          <AppText
            variant="h1"
            className={onDark ? 'text-brand-ivory' : undefined}
          >
            {APP.name}
          </AppText>
          <AppText
            variant="quote"
            className={
              onDark
                ? 'mt-xs text-brand-marigold font-serif-italic'
                : 'mt-xs text-brand-primary font-serif-italic'
            }
            style={
              onDark
                ? {
                    textShadowColor: brand.marigold,
                    textShadowRadius: 8,
                    textShadowOffset: { width: 0, height: 0 },
                  }
                : undefined
            }
          >
            {APP.tagline}
          </AppText>
        </View>

        <Link href="/account" asChild>
          <Pressable
            className="rounded-full px-md py-sm mt-xs"
            style={{
              backgroundColor: onDark ? brand.surface : colors.cream[50],
              borderWidth: 1,
              borderColor: onDark ? `${brand.ivory}33` : colors.cream[400],
            }}
          >
            <AppText
              variant="label"
              className={onDark ? 'text-brand-marigold' : 'text-brand-primary'}
            >
              {isGuest ? 'Sign in' : user?.displayName.split(' ')[0]}
            </AppText>
          </Pressable>
        </Link>
      </View>

      {active === 'home' ? (
        <View className="px-xl pt-md pb-lg">
          <AppText
            variant="body"
            className={onDark ? 'text-brand-ivory' : undefined}
            style={{ lineHeight: 28 }}
          >
            {HOME_INTRO_COPY}
          </AppText>
          <AppText
            variant="quote"
            className={onDark ? 'mt-md text-brand-marigold font-serif-italic' : 'mt-md'}
            style={{ fontSize: 22 }}
          >
            Eki shutre bandha.
          </AppText>
          <AppText
            variant="body"
            className={onDark ? 'mt-sm text-brand-ivory font-sans-semibold' : 'mt-sm'}
            style={{ lineHeight: 28 }}
          >
            Come, take your place.
          </AppText>
        </View>
      ) : null}

      <PillarSwitcher active={active} tone={tone} />

      {/* Active pillar title block */}
      {pillar ? (
        <View className="px-xl pt-md pb-md">
          <View className="flex-row items-end justify-between">
            <View className="flex-1 pr-md">
              <AppText
                variant="h2"
                className={onDark ? 'text-brand-ivory' : undefined}
              >
                {pillar.title}
              </AppText>
              <AppText
                variant="body"
                className={
                  onDark ? 'mt-xs text-brand-ivory-soft' : 'mt-xs'
                }
              >
                {pillar.subtitle}
              </AppText>
            </View>
            {headerAction ??
              (onCtaPress ? (
                <Pressable
                  onPress={onCtaPress}
                  className="rounded-lg px-md py-sm"
                  style={{
                    backgroundColor: ctaActive ? `${accent}44` : `${accent}22`,
                    borderWidth: ctaActive ? 1 : 0,
                    borderColor: ctaActive ? accent : 'transparent',
                  }}
                >
                  <AppText variant="label" style={{ color: accent }}>
                    {pillar.cta}
                  </AppText>
                </Pressable>
              ) : (
                <View
                  className="rounded-lg px-md py-sm"
                  style={{ backgroundColor: `${accent}22` }}
                >
                  <AppText variant="label" style={{ color: accent }}>
                    {pillar.cta}
                  </AppText>
                </View>
              ))}
          </View>
          {pillar.phase === 'preview' ? (
            <AppText
              variant="caption"
              className={
                onDark ? 'mt-sm text-brand-marigold' : 'mt-sm text-brand-primary'
              }
            >
              Opening soon — browse previews below
            </AppText>
          ) : null}
        </View>
      ) : null}
    </View>
  );
}
