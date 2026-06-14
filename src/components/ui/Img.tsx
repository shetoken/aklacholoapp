import React from 'react';
import { View, type ViewStyle } from 'react-native';
import { Image, type ImageContentFit } from 'expo-image';
import type { ImageRef } from '@/types';
import { colors } from '@/theme';

/**
 * expo-image wrapper. Keeps a tinted placeholder background while loading and
 * applies rounded corners via the container so NativeWind classNames work even
 * though expo-image isn't styled by className directly.
 */
export function Img({
  source,
  className = '',
  contentFit = 'cover',
  style,
  radius = 0,
}: {
  source: ImageRef;
  className?: string;
  contentFit?: ImageContentFit;
  style?: ViewStyle;
  radius?: number;
}) {
  return (
    <View
      className={className}
      style={[
        { backgroundColor: colors.cream[300], overflow: 'hidden', borderRadius: radius },
        style,
      ]}
    >
      <Image
        source={{ uri: source.uri }}
        accessibilityLabel={source.alt}
        contentFit={contentFit}
        transition={250}
        style={{ width: '100%', height: '100%' }}
      />
    </View>
  );
}
