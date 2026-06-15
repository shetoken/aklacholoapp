import React from 'react';
import { View } from 'react-native';

/**
 * Lightweight balanced masonry. Items flow into the shortest column using a
 * caller-provided height estimate — no heavy virtualized dependency.
 */
export function MasonryGrid<T>({
  items,
  columnWidth,
  estimateHeight,
  renderItem,
  gutter = 16,
  columns: columnCount = 2,
}: {
  items: T[];
  columnWidth: number;
  estimateHeight: (item: T) => number;
  renderItem: (item: T, columnWidth: number) => React.ReactNode;
  gutter?: number;
  columns?: number;
}) {
  const columns: T[][] = Array.from({ length: columnCount }, () => []);
  const heights = Array.from({ length: columnCount }, () => 0);

  items.forEach((item) => {
    let target = 0;
    for (let i = 1; i < columnCount; i++) {
      if (heights[i] < heights[target]) target = i;
    }
    columns[target].push(item);
    heights[target] += estimateHeight(item);
  });

  return (
    <View className="flex-row" style={{ gap: gutter, overflow: 'visible' }}>
      {columns.map((col, ci) => (
        <View key={ci} style={{ width: columnWidth, overflow: 'visible' }}>
          {col.map((item, ri) => (
            <View key={ri} style={{ overflow: 'visible' }}>
              {renderItem(item, columnWidth)}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}
