import React from 'react';
import { Pressable, View } from 'react-native';
import { Link, useRouter } from 'expo-router';

import { AppText } from '@/components/ui/Text';
import { BrandName } from '@/components/brand/BrandName';
import { HomeIcon } from '@/components/ui/icons';
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
  "AklaCholo is home for the soul of Bengal — for those who carry her far from home, and those discovering her for the first time. Explore her unique beauty: her art, her artisans, her weavers, her food, music, and stories — all gathered onto a single thread at last. 'Eki shutre bandha'. Come, take your place.";

const MENU_ITEM_GAP = 16;

function menuItemStyle(selected: boolean) {
  return {
    paddingTop: 6,
    paddingBottom: 8,
    paddingHorizontal: 2,
    backgroundColor: 'transparent' as const,
    borderBottomWidth: selected ? 2 : 0,
    borderBottomColor: selected ? brand.marigold : 'transparent',
  };
}

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
    <View className="flex-row px-xl pt-sm pb-0 items-end">
      <Pressable
        onPress={() => router.push('/(tabs)')}
        accessibilityLabel="Home"
        className="items-center shrink-0"
        style={menuItemStyle(active === 'home')}
      >
        <HomeIcon
          color={
            active === 'home'
              ? brand.marigold
              : onDark
                ? brand['ivory-soft']
                : colors.text?.muted ?? '#8A7E72'
          }
          filled={active === 'home'}
          size={20}
        />
      </Pressable>

      {PILLARS.map((pillar) => {
        const isActive = active === pillar.id;

        return (
          <Pressable
            key={pillar.id}
            onPress={() => router.push(pillar.href)}
            className="items-center shrink"
            style={{
              marginLeft: MENU_ITEM_GAP,
              ...menuItemStyle(isActive),
            }}
          >
            <AppText
              variant="caption"
              numberOfLines={1}
              adjustsFontSizeToFit
              minimumFontScale={0.75}
              className={
                isActive
                  ? onDark
                    ? 'uppercase font-sans-semibold tracking-normal text-brand-ivory'
                    : 'uppercase font-sans-semibold tracking-normal text-brand-primary'
                  : onDark
                    ? 'uppercase font-sans-semibold tracking-normal text-brand-ivory-soft'
                    : 'uppercase font-sans-semibold tracking-normal'
              }
              style={
                !isActive && !onDark
                  ? { fontSize: 12, color: colors.text?.muted ?? '#8A7E72' }
                  : { fontSize: 12 }
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
          <BrandName
            variant="h1"
            className={onDark ? 'text-brand-ivory' : undefined}
          />
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

        {isGuest ? (
          <View className="flex-row flex-wrap justify-end gap-sm mt-xs shrink-0 max-w-[280px]">
            <Link href="/sign-in" asChild>
              <Pressable
                className="rounded-full px-md py-sm"
                style={{
                  backgroundColor: onDark ? brand.surface : colors.cream[50],
                  borderWidth: 1,
                  borderColor: onDark ? `${brand.ivory}33` : colors.cream[400],
                }}
              >
                <AppText
                  variant="label"
                  className={onDark ? 'text-brand-ivory-soft' : undefined}
                >
                  Sign in
                </AppText>
              </Pressable>
            </Link>
            <Link href="/sign-up" asChild>
              <Pressable
                className="rounded-full px-md py-sm"
                style={{ backgroundColor: brand.marigold }}
              >
                <AppText variant="label" style={{ color: brand.ink }}>
                  Sign up
                </AppText>
              </Pressable>
            </Link>
            <Link href="/creator-apply" asChild>
              <Pressable
                className="rounded-full px-md py-sm"
                style={{
                  backgroundColor: onDark ? brand.surface : colors.cream[50],
                  borderWidth: 1,
                  borderColor: brand.marigold,
                }}
              >
                <AppText variant="label" className="text-brand-marigold">
                  Apply
                </AppText>
              </Pressable>
            </Link>
          </View>
        ) : (
          <View className="flex-row gap-sm mt-xs shrink-0">
            <Link href="/creator-apply" asChild>
              <Pressable
                className="rounded-full px-md py-sm"
                style={{
                  backgroundColor: onDark ? brand.surface : colors.cream[50],
                  borderWidth: 1,
                  borderColor: brand.marigold,
                }}
              >
                <AppText variant="label" className="text-brand-marigold">
                  Apply
                </AppText>
              </Pressable>
            </Link>
            <Link href="/account" asChild>
              <Pressable
                className="rounded-full px-md py-sm shrink-0"
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
                  {user?.displayName.split(' ')[0]}
                </AppText>
              </Pressable>
            </Link>
          </View>
        )}
      </View>

      <PillarSwitcher active={active} tone={tone} />

      {active === 'home' ? (
        <View className="px-xl pt-md pb-lg">
          <AppText
            variant="body"
            className={onDark ? 'text-brand-ivory' : undefined}
            style={{ lineHeight: 28 }}
          >
            {HOME_INTRO_COPY}
          </AppText>
        </View>
      ) : null}

      {/* Active pillar title block */}
      {pillar ? (
        <View className="px-xl pt-md pb-md">
          <AppText
            variant="h2"
            className={onDark ? 'text-brand-ivory' : undefined}
          >
            {pillar.title}
          </AppText>
          <AppText
            variant="body"
            className={onDark ? 'mt-xs text-brand-ivory-soft' : 'mt-xs'}
          >
            {pillar.subtitle}
          </AppText>
          {headerAction ??
            (onCtaPress ? (
              <Pressable
                onPress={onCtaPress}
                className="mt-md self-start rounded-lg px-md py-sm"
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
                className="mt-md self-start rounded-lg px-md py-sm"
                style={{ backgroundColor: `${accent}22` }}
              >
                <AppText variant="label" style={{ color: accent }}>
                  {pillar.cta}
                </AppText>
              </View>
            ))}
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
