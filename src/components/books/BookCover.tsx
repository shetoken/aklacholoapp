import React from 'react';
import { View, type ViewStyle } from 'react-native';

import type { Book } from '@/types';
import { AppText } from '@/components/ui/Text';
import { ClassicKolka } from '@/components/brand/motifs/KolkaMotif';
import { brand } from '@/theme';

type BookCoverBook = Pick<Book, 'title' | 'titleBengali' | 'authorName'>;

type BookCoverProps = {
  book: BookCoverBook;
  height?: number;
  featured?: boolean;
  style?: ViewStyle;
};

const coverPalette = [brand.marigold, brand.terracotta, brand.ivory, brand.ink];

export function BookCover({ book, height = 200, featured = false, style }: BookCoverProps) {
  const motifSize = featured ? 72 : 52;

  return (
    <View
      style={[
        {
          height,
          backgroundColor: brand.ink,
          borderBottomWidth: 2,
          borderBottomColor: brand.marigold,
        },
        style,
      ]}
    >
      <View
        className="absolute top-0 right-0 opacity-[0.14]"
        style={{ transform: [{ translateX: 8 }, { translateY: -4 }] }}
      >
        <ClassicKolka size={motifSize} palette={coverPalette} />
      </View>
      <View
        className="absolute bottom-0 left-0 opacity-[0.08]"
        style={{ transform: [{ translateX: -12 }, { translateY: 12 }] }}
      >
        <ClassicKolka size={motifSize * 0.75} palette={coverPalette} />
      </View>

      <View className="flex-1 justify-end p-md">
        {book.titleBengali ? (
          <AppText
            variant={featured ? 'quote' : 'caption'}
            numberOfLines={featured ? 2 : 1}
            className="text-brand-marigold font-serif-italic mb-xs"
          >
            {book.titleBengali}
          </AppText>
        ) : null}
        <AppText
          variant={featured ? 'h2' : 'title'}
          numberOfLines={featured ? 3 : 2}
          className="text-brand-ivory font-serif"
        >
          {book.title}
        </AppText>
        <AppText
          variant="caption"
          numberOfLines={1}
          className="mt-sm text-brand-ivory-soft font-sans"
        >
          {book.authorName}
        </AppText>
      </View>
    </View>
  );
}
