import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { brand } from '@/theme';

/**
 * Kolka-accented divider — ivory linework with an optional vermillion bindu
 * at centre. Kalighat-inspired section break on dark grounds.
 */
export function KolkaDivider({
  lineColor = brand.kolka,
  binduColor = brand.bindu,
  width = 160,
  showBindu = true,
}: {
  lineColor?: string;
  binduColor?: string;
  width?: number;
  showBindu?: boolean;
}) {
  return (
    <View className="items-center my-xl">
      <Svg width={width} height={24} viewBox="0 0 160 24">
        <Path d="M0 12 H58" stroke={lineColor} strokeWidth={1.5} opacity={0.55} />
        <Path d="M102 12 H160" stroke={lineColor} strokeWidth={1.5} opacity={0.55} />
        <Path
          d="M80 4 c -7 0 -10 7 -6 13 c 3 4 9 4 11 0 c 2 -3 0 -7 -3 -7"
          fill="none"
          stroke={lineColor}
          strokeWidth={1.8}
          strokeLinecap="round"
          opacity={0.85}
        />
        <Circle cx={66} cy={12} r={1.4} fill={lineColor} opacity={0.6} />
        <Circle cx={94} cy={12} r={1.4} fill={lineColor} opacity={0.6} />
        {showBindu ? (
          <Circle cx={80} cy={12} r={3.2} fill={binduColor} />
        ) : null}
      </Svg>
    </View>
  );
}
