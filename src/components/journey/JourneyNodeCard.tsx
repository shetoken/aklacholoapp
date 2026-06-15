import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import Svg, { Circle } from 'react-native-svg';
import { MotiPressable } from 'moti/interactions';
import type { JourneyNode } from '@/types';
import { KolkaMotif } from '@/components/brand/motifs/KolkaMotif';
import { AppText } from '@/components/ui/Text';
import { brand } from '@/theme';

function LockGlyph() {
  return (
    <AppText variant="h3" className="text-brand-muted">
      ?
    </AppText>
  );
}

/** Single stop on the Journey map. */
export function JourneyNodeCard({
  node,
  align = 'center',
}: {
  node: JourneyNode;
  align?: 'left' | 'center' | 'right';
}) {
  const locked = node.status === 'locked';
  const current = node.status === 'current';
  const active = !locked;

  const alignSelf =
    align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center';

  const nodeSize = 72;
  const ringSize = nodeSize + 12;

  const content = (
    <View style={{ alignSelf, width: 220 }}>
      {current ? (
        <AppText variant="label" className="text-brand-vermillion mb-xs text-center">
          You are here
        </AppText>
      ) : null}
      <View className="items-center">
        <View
          style={{
            width: ringSize,
            height: ringSize,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {current ? (
            <Svg
              width={ringSize}
              height={ringSize}
              style={{ position: 'absolute' }}
            >
              <Circle
                cx={ringSize / 2}
                cy={ringSize / 2}
                r={ringSize / 2 - 2}
                stroke={brand.vermillion}
                strokeWidth={2.5}
                fill="none"
              />
            </Svg>
          ) : null}
          <View
            className="rounded-full items-center justify-center overflow-hidden"
            style={{
              width: nodeSize,
              height: nodeSize,
              backgroundColor: locked ? brand.surface : brand.marigold,
              opacity: locked ? 0.45 : 1,
              borderWidth: locked ? 1 : 0,
              borderColor: `${brand.ivory}33`,
            }}
          >
            {locked ? (
              <LockGlyph />
            ) : (
              <KolkaMotif svgKey={node.motifKey} size={48} />
            )}
          </View>
        </View>
      </View>
      <View className="mt-sm items-center">
        <AppText
          variant="title"
          className={locked ? 'text-brand-muted' : 'text-brand-ivory'}
          numberOfLines={1}
        >
          {node.title}
        </AppText>
        <AppText variant="caption" numberOfLines={2} className="text-center mt-xs">
          {locked ? 'Locked' : node.subtitle}
        </AppText>
      </View>
    </View>
  );

  if (!active) {
    return <View className="my-lg">{content}</View>;
  }

  return (
    <View className="my-lg">
      <Link href={`/article/${node.articleId}?journey=1`} asChild>
        <MotiPressable
          animate={({ pressed }) => {
            'worklet';
            return { scale: pressed ? 0.97 : 1 };
          }}
        >
          {content}
        </MotiPressable>
      </Link>
    </View>
  );
}

/** Vertical dashed path segment between two stops. */
export function JourneyPathSegment({ height = 48 }: { height?: number }) {
  return (
    <View className="items-center" style={{ height }}>
      <View
        style={{
          width: 2,
          height: height - 8,
          borderStyle: 'dashed',
          borderWidth: 1,
          borderColor: `${brand.ivory}66`,
        }}
      />
    </View>
  );
}
