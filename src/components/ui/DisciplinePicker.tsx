import React, { useState } from 'react';
import { Pressable, View } from 'react-native';

import { AppText } from '@/components/ui/Text';
import { ChevronRight } from '@/components/ui/icons';
import {
  CREATOR_DISCIPLINES,
  type CreatorDiscipline,
} from '@/constants/creator-onboarding';
import { brand } from '@/theme';

type DisciplinePickerProps = {
  value: CreatorDiscipline | null;
  onChange: (discipline: CreatorDiscipline) => void;
};

export function DisciplinePicker({ value, onChange }: DisciplinePickerProps) {
  const [open, setOpen] = useState(false);

  const select = (discipline: CreatorDiscipline) => {
    onChange(discipline);
    setOpen(false);
  };

  return (
    <View className="mb-lg">
      <AppText variant="label" className="mb-sm text-brand-ivory-soft">
        Discipline
      </AppText>
      <Pressable
        onPress={() => setOpen((prev) => !prev)}
        accessibilityRole="button"
        accessibilityState={{ expanded: open }}
        className="flex-row items-center justify-between rounded-xl border border-brand-border px-md"
        style={{ backgroundColor: brand.surface, paddingVertical: 14 }}
      >
        <AppText
          variant="body"
          className={value ? 'text-brand-ivory' : 'text-brand-ivory-soft'}
        >
          {value ?? 'Select a discipline'}
        </AppText>
        <View style={{ transform: [{ rotate: open ? '90deg' : '0deg' }] }}>
          <ChevronRight color={brand['ivory-muted']} size={18} />
        </View>
      </Pressable>

      {open ? (
        <View
          className="mt-xs rounded-xl border border-brand-border overflow-hidden"
          style={{ backgroundColor: brand.surface }}
        >
          {CREATOR_DISCIPLINES.map((discipline, index) => {
            const selected = value === discipline;
            return (
              <Pressable
                key={discipline}
                onPress={() => select(discipline)}
                className="px-md py-md"
                style={{
                  backgroundColor: selected ? `${brand.marigold}22` : 'transparent',
                  borderTopWidth: index === 0 ? 0 : 1,
                  borderTopColor: brand.border,
                }}
              >
                <AppText
                  variant="label"
                  className={selected ? 'text-brand-marigold' : 'text-brand-ivory'}
                >
                  {discipline}
                </AppText>
              </Pressable>
            );
          })}
        </View>
      ) : null}
    </View>
  );
}
