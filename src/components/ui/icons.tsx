import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

export interface IconProps {
  size?: number;
  color?: string;
  filled?: boolean;
}

export function HomeIcon({ size = 24, color = '#000', filled }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"
        fill={filled ? color : 'none'}
        stroke={color}
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function CompassIcon({ size = 24, color = '#000', filled }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Circle cx={12} cy={12} r={9} fill={filled ? color : 'none'} stroke={color} strokeWidth={1.8} />
      <Path
        d="M15.5 8.5 13 13l-4.5 2.5L11 11z"
        fill={filled ? '#fff' : 'none'}
        stroke={filled ? '#fff' : color}
        strokeWidth={1.6}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function CreatorsIcon({ size = 24, color = '#000', filled }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Circle cx={9} cy={8} r={3.4} fill={filled ? color : 'none'} stroke={color} strokeWidth={1.8} />
      <Path
        d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5"
        fill="none"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
      />
      <Path
        d="M16 6.2A3 3 0 0 1 16 12M17 14c2.4.4 4 2.3 4 4.8"
        fill="none"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function HeartIcon({ size = 24, color = '#000', filled }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M12 21s-7.5-4.6-10-9.2C.6 9 1.7 5.5 4.8 5c2-.3 3.4.8 4.2 2 .8-1.2 2.2-2.3 4.2-2 3.1.5 4.2 4 2.8 6.8C19.5 16.4 12 21 12 21z"
        fill={filled ? color : 'none'}
        stroke={color}
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function ChevronRight({ size = 20, color = '#000' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M9 6l6 6-6 6" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function SparkleIcon({ size = 24, color = '#000' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M12 3c.6 4.2 1.8 5.4 6 6-4.2.6-5.4 1.8-6 6-.6-4.2-1.8-5.4-6-6 4.2-.6 5.4-1.8 6-6z"
        fill={color}
      />
    </Svg>
  );
}
