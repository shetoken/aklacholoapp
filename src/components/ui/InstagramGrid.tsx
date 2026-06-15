import React, { useMemo } from 'react';
import { Dimensions, View } from 'react-native';

const COLS = 3;
const GAP = 2;

/** Uniform square grid — Instagram-style photo wall. */
export function InstagramGrid<T>({
  data,
  keyExtractor,
  renderItem,
  columns = COLS,
  gap = GAP,
  horizontalPadding = 0,
}: {
  data: T[];
  keyExtractor: (item: T) => string;
  renderItem: (item: T, size: number) => React.ReactNode;
  columns?: number;
  gap?: number;
  horizontalPadding?: number;
}) {
  const cellSize = useMemo(() => {
    const width = Dimensions.get('window').width - horizontalPadding * 2;
    return (width - gap * (columns - 1)) / columns;
  }, [columns, gap, horizontalPadding]);

  return (
    <View
      className="flex-row flex-wrap"
      style={{
        gap,
        paddingHorizontal: horizontalPadding,
      }}
    >
      {data.map((item) => (
        <View
          key={keyExtractor(item)}
          style={{ width: cellSize, height: cellSize }}
        >
          {renderItem(item, cellSize)}
        </View>
      ))}
    </View>
  );
}
