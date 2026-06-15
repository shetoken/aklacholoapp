import React from 'react';
import { View } from 'react-native';

import {
  AppText,
  TileGrid,
  ExperienceGridCell,
  Loading,
  ErrorView,
} from '@/components';
import { useAsync } from '@/hooks/useAsync';
import { getExperiences } from '@/services';

export default function CuratedTravelScreen() {
  const { data, loading, error, reload } = useAsync(() => getExperiences(), []);

  if (loading) return <Loading label="Mapping Bengal…" />;
  if (error) return <ErrorView onRetry={reload} />;

  const items = data ?? [];

  return (
    <View className="pb-2xl">
      <View className="pt-sm pb-md px-xl">
        <AppText variant="body" className="text-brand-ivory-soft">
          Curated destinations designed by Bengalis — for everyone who wants to
          meet Bengal in her truest form.
        </AppText>
      </View>

      {items.length > 0 ? (
        <TileGrid
          columns={3}
          data={items}
          keyExtractor={(e) => e.id}
          renderItem={(exp, width) => (
            <ExperienceGridCell experience={exp} width={width} />
          )}
        />
      ) : (
        <AppText variant="body" className="px-xl text-center mt-xl">
          Travel guides are on the way.
        </AppText>
      )}
    </View>
  );
}
