import React from 'react';
import { Pressable, ScrollView, View } from 'react-native';

import { AppText } from '@/components/ui/Text';
import { AuthFormField } from '@/components/ui/AuthFormField';
import { Tag } from '@/components/ui/Tag';
import {
  DEFAULT_INDIA_STATE,
  SHOP_COUNTRIES,
} from '@/constants/shop-address';
import type { ShopAddress, ShopCountry } from '@/types';

type ShopAddressFieldsProps = {
  value: ShopAddress;
  onChange: (next: ShopAddress) => void;
};

export function ShopAddressFields({ value, onChange }: ShopAddressFieldsProps) {
  const setCountry = (country: ShopCountry) => {
    onChange({
      ...value,
      country,
      state:
        country === 'India'
          ? DEFAULT_INDIA_STATE
          : value.state === DEFAULT_INDIA_STATE
            ? ''
            : value.state,
    });
  };

  return (
    <View className="mb-md">
      <AppText variant="label" className="mb-sm text-brand-ivory-soft">
        Shop location
      </AppText>

      <AppText variant="caption" className="mb-sm text-brand-ivory-soft">
        Country
      </AppText>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 8, paddingBottom: 12 }}
      >
        {SHOP_COUNTRIES.map((country) => (
          <Pressable key={country} onPress={() => setCountry(country)}>
            <Tag label={country} active={value.country === country} />
          </Pressable>
        ))}
      </ScrollView>

      <AuthFormField
        label="Town / city"
        value={value.town}
        onChangeText={(town) => onChange({ ...value, town })}
        placeholder="e.g. Kolkata, Bishnupur"
        autoCapitalize="words"
      />
      <AuthFormField
        label="State / division"
        value={value.state}
        onChangeText={(state) => onChange({ ...value, state })}
        placeholder={value.country === 'India' ? 'West Bengal' : 'State or division'}
        autoCapitalize="words"
      />
      <AuthFormField
        label="Zip / postal code"
        value={value.zipCode}
        onChangeText={(zipCode) => onChange({ ...value, zipCode })}
        placeholder="PIN or postal code"
        keyboardType="default"
        autoCapitalize="none"
      />
    </View>
  );
}
