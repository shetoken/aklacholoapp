import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';

import type { Book } from '@/types';
import { LITERARY_FORM_LABELS } from '@/constants/books';
import { AppText } from '@/components/ui/Text';
import { Tag } from '@/components/ui/Tag';
import { BookCover } from '@/components/books/BookCover';
import { brand } from '@/theme';

type BookCardProps = {
  book: Book;
  width?: number;
  featured?: boolean;
  compact?: boolean;
};

export function BookCard({ book, width, featured = false, compact = false }: BookCardProps) {
  const cardWidth = width ?? (featured ? 200 : compact ? 180 : 148);
  const coverHeight = featured ? 240 : compact ? 200 : 188;

  return (
    <Link href={`/boi/${book.slug}`} asChild>
      <MotiPressable
        animate={({ pressed }) => {
          'worklet';
          return { scale: pressed ? 0.98 : 1 };
        }}
        style={{ width: cardWidth }}
      >
        <View
          className="rounded-2xl overflow-hidden border border-brand-border"
          style={{ backgroundColor: brand.surface }}
        >
          <BookCover book={book} height={coverHeight} featured={featured} />
          <View className="p-md">
            <View className="flex-row flex-wrap gap-2">
              <Tag label={LITERARY_FORM_LABELS[book.form]} active />
              {book.year ? <Tag label={book.year} /> : null}
            </View>
            <AppText
              variant="caption"
              numberOfLines={compact ? 2 : 3}
              className="mt-sm text-brand-ivory-soft"
              style={{ lineHeight: 20 }}
            >
              {book.subtitle}
            </AppText>
            {book.isStub ? (
              <AppText variant="caption" className="mt-xs text-brand-marigold">
                Preview
              </AppText>
            ) : null}
          </View>
        </View>
      </MotiPressable>
    </Link>
  );
}
