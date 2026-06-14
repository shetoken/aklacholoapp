import React, { useState } from 'react';
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  View,
} from 'react-native';
import type { ImageRef } from '@/types';
import { Img } from '@/components/ui/Img';

const { width: SCREEN_W } = Dimensions.get('window');

/** Swipeable image gallery with paging dots for the product detail screen. */
export function ImageCarousel({
  images,
  height = 380,
}: {
  images: ImageRef[];
  height?: number;
}) {
  const [index, setIndex] = useState(0);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const i = Math.round(e.nativeEvent.contentOffset.x / SCREEN_W);
    if (i !== index) setIndex(i);
  };

  return (
    <View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        {images.map((image, i) => (
          <Img
            key={i}
            source={image}
            style={{ width: SCREEN_W, height }}
          />
        ))}
      </ScrollView>
      {images.length > 1 ? (
        <View className="flex-row justify-center mt-md">
          {images.map((_, i) => (
            <View
              key={i}
              className={`h-2 rounded-full mx-1 ${
                i === index ? 'w-5 bg-brand-primary' : 'w-2 bg-brand-border'
              }`}
            />
          ))}
        </View>
      ) : null}
    </View>
  );
}
