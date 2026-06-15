import type { ShopAddress, ShopCountry } from '@/types';

export const SHOP_COUNTRIES: ShopCountry[] = ['India', 'Bangladesh'];

export const DEFAULT_INDIA_STATE = 'West Bengal';

export const EMPTY_SHOP_ADDRESS: ShopAddress = {
  town: '',
  state: DEFAULT_INDIA_STATE,
  zipCode: '',
  country: 'India',
};

export function formatShopAddress(address: ShopAddress | string): string {
  if (typeof address === 'string') return address;
  return `${address.town}, ${address.state} ${address.zipCode}, ${address.country}`;
}

export function buildShopAddress(
  disciplineType: string,
  address: ShopAddress,
): ShopAddress | undefined {
  if (disciplineType !== 'physical') return undefined;

  const town = address.town.trim();
  const state = address.state.trim();
  const zipCode = address.zipCode.trim();

  if (!town && !state && !zipCode) return undefined;

  return {
    town,
    state,
    zipCode,
    country: address.country,
  };
}

export function isShopAddressComplete(address: ShopAddress): boolean {
  return (
    address.town.trim().length > 0 &&
    address.state.trim().length > 0 &&
    address.zipCode.trim().length > 0
  );
}
