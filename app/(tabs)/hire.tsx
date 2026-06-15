import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Link } from 'expo-router';
import { MotiView } from 'moti';

import {
  Screen,
  AppText,
  Img,
  PillarHeader,
  Loading,
  ErrorView,
  EmptyState,
} from '@/components';
import { Tag } from '@/components/ui/Tag';
import { ChevronRight } from '@/components/ui/icons';
import { useAsync } from '@/hooks/useAsync';
import { getCreators } from '@/services';
import type { DisciplineType } from '@/types';
import { brand } from '@/theme';

type Filter = 'All' | DisciplineType;
const FILTERS: { key: Filter; label: string }[] = [
  { key: 'All', label: 'All talent' },
  { key: 'physical', label: 'Artisans' },
  { key: 'digital', label: 'Digital' },
  { key: 'teacher', label: 'Teachers' },
];

export default function HireScreen() {
  const [filter, setFilter] = useState<Filter>('All');
  const { data, loading, error, reload } = useAsync(() => getCreators(), []);

  const creators = useMemo(() => {
    const all = data ?? [];
    return filter === 'All'
      ? all
      : all.filter((c) => c.disciplineType === filter);
  }, [data, filter]);

  if (loading) return <Loading label="Finding talent…" />;
  if (error) return <ErrorView onRetry={reload} />;

  return (
    <Screen scroll edges={[]} contentClassName="pb-2xl">
      <PillarHeader active="hire" />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
        className="mb-lg mt-md"
      >
        {FILTERS.map((f) => (
          <Pressable key={f.key} onPress={() => setFilter(f.key)}>
            <Tag label={f.label} active={filter === f.key} />
          </Pressable>
        ))}
      </ScrollView>

      {creators.length === 0 ? (
        <EmptyState title="No creators here yet" />
      ) : (
        <View className="px-xl">
          {creators.map((creator, i) => (
            <MotiView
              key={creator.id}
              from={{ opacity: 0, translateY: 8 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ type: 'timing', duration: 350, delay: i * 60 }}
            >
              <Link href={`/creator/${creator.id}`} asChild>
                <Pressable className="flex-row items-center bg-brand-surface rounded-2xl p-md mb-md border border-brand-border">
                  <Img
                    source={creator.avatar}
                    radius={999}
                    style={{ width: 64, height: 64 }}
                  />
                  <View className="flex-1 ml-md">
                    <AppText variant="title">{creator.name}</AppText>
                    <AppText variant="caption" numberOfLines={1}>
                      {creator.discipline}
                    </AppText>
                    <AppText variant="label" className="text-brand-terracotta mt-xs">
                      {creator.region}
                    </AppText>
                  </View>
                  <ChevronRight color={brand['ivory-muted']} />
                </Pressable>
              </Link>
            </MotiView>
          ))}
          <AppText variant="caption" className="mt-md text-center">
            Booking and commissions open in a future release — browse portfolios
            now.
          </AppText>
        </View>
      )}
    </Screen>
  );
}
