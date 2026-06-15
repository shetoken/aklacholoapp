import React from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { CloseIcon, SearchIcon } from '@/components/ui/icons';
import { brand } from '@/theme';

/** Pillar search field — opens from header CTAs on Discover and Experience. */
export function StorySearchBar({
  value,
  onChangeText,
  onClose,
  inputRef,
  placeholder = 'Search stories, food, rivers, music…',
}: {
  value: string;
  onChangeText: (text: string) => void;
  onClose: () => void;
  inputRef?: React.RefObject<TextInput | null>;
  placeholder?: string;
}) {
  return (
    <View className="px-xl pb-md pt-sm">
      <View
        className="flex-row items-center rounded-xl px-md py-sm border border-brand-border"
        style={{ backgroundColor: brand.surface }}
      >
        <SearchIcon size={18} color={brand.marigold} />
        <TextInput
          ref={inputRef}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={brand['ivory-muted']}
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="search"
          className="flex-1 ml-sm text-brand-ivory font-sans"
          style={{ fontSize: 15, lineHeight: 20, paddingVertical: 4 }}
        />
        <Pressable
          onPress={onClose}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel="Close search"
          className="ml-sm p-xs"
        >
          <CloseIcon size={18} color={brand.ivory} />
        </Pressable>
      </View>
    </View>
  );
}
