import React from 'react';
import { View } from 'react-native';

/**
 * Lightweight balanced two-column masonry. Items are placed into whichever
 * column is currently shorter, using a caller-provided height estimate so the
 * columns stay visually even. Good enough for Phase 1's modest catalogue
 * without pulling in a heavyweight virtualized masonry dependency.
 */
export function MasonryGrid<T>({
  items,
  columnWidth,
  estimateHeight,
  renderItem,
  gutter = 16,
}: {
  items: T[];
  columnWidth: number;
  estimateHeight: (item: T) => number;
  renderItem: (item: T, columnWidth: number) => React.ReactNode;
  gutter?: number;
}) {
  const columns: T[][] = [[], []];
  const heights = [0, 0];

  items.forEach((item) => {
    const target = heights[0] <= heights[1] ? 0 : 1;
    columns[target].push(item);
    heights[target] += estimateHeight(item);
  });

  return (
    <View className="flex-row" style={{ gap: gutter }}>
      {columns.map((col, ci) => (
        <View key={ci} style={{ width: columnWidth }}>
          {col.map((item, ri) => (
            <View key={ri}>{renderItem(item, columnWidth)}</View>
          ))}
        </View>
      ))}
    </View>
  );
}
