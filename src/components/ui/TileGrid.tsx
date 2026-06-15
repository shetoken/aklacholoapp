import React, { useMemo } from 'react';
import { Dimensions, View } from 'react-native';

/** Responsive tile grid — image + title + description per cell. */
export function TileGrid<T>({
  data,
  keyExtractor,
  renderItem,
  columns = 2,
  gap = 8,
  horizontalPadding = 16,
}: {
  data: T[];
  keyExtractor: (item: T) => string;
  renderItem: (item: T, width: number) => React.ReactNode;
  columns?: number;
  gap?: number;
  horizontalPadding?: number;
}) {
  const cellWidth = useMemo(() => {
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
        <View key={keyExtractor(item)} style={{ width: cellWidth }}>
          {renderItem(item, cellWidth)}
        </View>
      ))}
    </View>
  );
}
