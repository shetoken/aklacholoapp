import React from 'react';
import { Pressable, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import type { WishlistKind } from '@/types';
import { useWishlist } from '@/context/WishlistProvider';
import { colors } from '@/theme';

/**
 * Heart toggle wired to the wishlist context. Works for products, collections,
 * and creators via the `kind` prop. Optimistic — context updates in memory and
 * persists to AsyncStorage underneath.
 */
export function SaveButton({
  id,
  kind,
  size = 22,
  floating = false,
}: {
  id: string;
  kind: WishlistKind;
  size?: number;
  /** Render as a circular surface (over imagery). */
  floating?: boolean;
}) {
  const { isSaved, toggle } = useWishlist();
  const saved = isSaved(id, kind);

  const heart = (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M12 21s-7.5-4.6-10-9.2C.6 9 1.7 5.5 4.8 5c2-.3 3.4.8 4.2 2 .8-1.2 2.2-2.3 4.2-2 3.1.5 4.2 4 2.8 6.8C19.5 16.4 12 21 12 21z"
        fill={saved ? colors.terracotta[500] : 'transparent'}
        stroke={saved ? colors.terracotta[500] : colors.ink.DEFAULT}
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
    </Svg>
  );

  return (
    <Pressable
      onPress={() => toggle(id, kind)}
      hitSlop={10}
      accessibilityRole="button"
      accessibilityLabel={saved ? 'Remove from saved' : 'Save'}
    >
      {floating ? (
        <View className="rounded-full bg-brand-surface/90 p-sm shadow-sm">
          {heart}
        </View>
      ) : (
        heart
      )}
    </Pressable>
  );
}
