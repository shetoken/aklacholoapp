import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { colors } from '@/theme';

/**
 * A subtle kolka-accented divider — a thin rule with a small centred paisley.
 * Used between sections to add heritage texture without clutter.
 */
export function KolkaDivider({
  color = colors.terracotta[400],
  width = 160,
}: {
  color?: string;
  width?: number;
}) {
  return (
    <View className="items-center my-xl">
      <Svg width={width} height={20} viewBox="0 0 160 20">
        <Path d="M0 10 H64" stroke={color} strokeWidth={1.5} opacity={0.5} />
        <Path d="M96 10 H160" stroke={color} strokeWidth={1.5} opacity={0.5} />
        <Path
          d="M80 3 c -7 0 -10 7 -6 13 c 3 4 9 4 11 0 c 2 -3 0 -7 -3 -7"
          fill="none"
          stroke={color}
          strokeWidth={1.8}
          strokeLinecap="round"
        />
        <Circle cx={70} cy={10} r={1.6} fill={color} />
        <Circle cx={90} cy={10} r={1.6} fill={color} />
      </Svg>
    </View>
  );
}
