import React, { useEffect, useMemo, useRef } from 'react';
import { ScrollView, View, type NativeScrollEvent } from 'react-native';

/**
 * Horizontal rail with slow auto-drift. User can swipe to browse; auto-scroll
 * pauses while they interact and resumes from the current position.
 */
export function AutoScrollRow<T>({
  data,
  keyExtractor,
  renderItem,
  speed = 0.35,
  gap = 0,
}: {
  data: T[];
  keyExtractor: (item: T, index: number) => string;
  renderItem: (item: T) => React.ReactNode;
  /** Pixels advanced per animation frame (~60fps). Set to 0 to disable drift. */
  speed?: number;
  gap?: number;
}) {
  const scrollRef = useRef<ScrollView>(null);
  const offset = useRef(0);
  const loopWidth = useRef(0);
  const userInteracting = useRef(false);

  const loop = useMemo(() => [...data, ...data], [data]);

  useEffect(() => {
    if (data.length < 2 || speed <= 0) return;

    let frame: number;
    const tick = () => {
      if (!userInteracting.current) {
        offset.current += speed;
        const half = loopWidth.current;
        if (half > 0 && offset.current >= half) {
          offset.current = 0;
        }
        scrollRef.current?.scrollTo({ x: offset.current, animated: false });
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [data, speed]);

  const syncLoopOffset = (x: number) => {
    const half = loopWidth.current;
    if (half <= 0) {
      offset.current = x;
      return;
    }
    if (x >= half) {
      offset.current = x - half;
      scrollRef.current?.scrollTo({ x: offset.current, animated: false });
      return;
    }
    offset.current = x;
  };

  const handleScroll = (event: { nativeEvent: NativeScrollEvent }) => {
    syncLoopOffset(event.nativeEvent.contentOffset.x);
  };

  if (data.length === 0) return null;

  return (
    <ScrollView
      ref={scrollRef}
      horizontal
      scrollEnabled
      nestedScrollEnabled
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      onScroll={handleScroll}
      onScrollBeginDrag={() => {
        userInteracting.current = true;
      }}
      onScrollEndDrag={(event) => {
        const velocity = event.nativeEvent.velocity?.x ?? 0;
        if (Math.abs(velocity) < 0.05) {
          userInteracting.current = false;
        }
      }}
      onMomentumScrollEnd={() => {
        userInteracting.current = false;
      }}
      onContentSizeChange={(w) => {
        loopWidth.current = w / 2;
      }}
      contentContainerStyle={{ paddingHorizontal: 24, gap }}
    >
      {loop.map((item, i) => (
        <View key={`${keyExtractor(item, i)}-${i}`}>{renderItem(item)}</View>
      ))}
    </ScrollView>
  );
}
