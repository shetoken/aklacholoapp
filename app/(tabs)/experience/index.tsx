import React from 'react';
import { View } from 'react-native';

import {
  AppText,
  TileGrid,
  LearnGridCell,
  Loading,
  ErrorView,
} from '@/components';
import { useAsync } from '@/hooks/useAsync';
import { getLearnTopics } from '@/services';

export default function ExperienceLearnScreen() {
  const { data, loading, error, reload } = useAsync(() => getLearnTopics(), []);

  if (loading) return <Loading label="Opening lessons…" />;
  if (error) return <ErrorView onRetry={reload} />;

  const topics = data ?? [];

  return (
    <View className="pb-2xl">
      <View className="pt-sm pb-md px-xl">
        <AppText variant="body" className="text-brand-ivory-soft">
          Connect with Bengali teachers for live online lessons in language,
          music, and dance. Learn at your own pace, from anywhere in the world.
        </AppText>
      </View>

      <TileGrid
        columns={3}
        data={topics}
        keyExtractor={(t) => t.id}
        renderItem={(topic, width) => (
          <LearnGridCell topic={topic} width={width} />
        )}
      />
    </View>
  );
}
