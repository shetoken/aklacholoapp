import React from 'react';
import { TextInput, View } from 'react-native';

import { AppText } from '@/components/ui/Text';
import { brand } from '@/theme';

type AuthFormFieldProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  keyboardType?: 'default' | 'email-address';
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'words' | 'sentences';
};

export function AuthFormField({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
  secureTextEntry = false,
  autoCapitalize = 'sentences',
}: AuthFormFieldProps) {
  return (
    <View className="mb-lg">
      <AppText variant="label" className="mb-sm text-brand-ivory-soft">
        {label}
      </AppText>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={brand['ivory-muted']}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        className="rounded-xl border border-brand-border px-md text-brand-ivory font-sans"
        style={{
          backgroundColor: brand.surface,
          fontSize: 15,
          paddingVertical: 14,
        }}
      />
    </View>
  );
}
