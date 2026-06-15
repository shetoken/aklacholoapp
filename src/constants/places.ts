import type { PlaceRegion, PlaceType } from '@/types';

export const PLACE_TYPE_LABELS: Record<PlaceType, string> = {
  monument: 'Monuments',
  'cultural-hub': 'Cultural Hubs',
  neighbourhood: 'Neighbourhoods',
  market: 'Markets',
  'religious-site': 'Religious Sites',
  museum: 'Museums',
  'park-nature': 'Parks & Nature',
  riverfront: 'Riverfront',
  city: 'Cities & Towns',
  'hill-station': 'Hill Stations',
  'heritage-town': 'Heritage Towns',
  wildlife: 'Wildlife',
};

export const REGION_LABELS: Record<PlaceRegion, string> = {
  kolkata: 'Kolkata',
  'north-bengal': 'North Bengal (Darjeeling & Dooars)',
  'sundarbans-south': 'The Sundarbans & South',
  'shantiniketan-birbhum': 'Shantiniketan & Birbhum',
  murshidabad: 'Murshidabad',
  'bishnupur-bankura': 'Bishnupur & Bankura',
  coastal: 'The Coast',
  'across-bengal': 'Across Bengal',
};

export const REGION_FILTER_ORDER: PlaceRegion[] = [
  'kolkata',
  'north-bengal',
  'sundarbans-south',
  'shantiniketan-birbhum',
  'murshidabad',
  'bishnupur-bankura',
  'coastal',
  'across-bengal',
];

export const PLACE_TYPE_FILTER_ORDER: PlaceType[] = [
  'monument',
  'cultural-hub',
  'neighbourhood',
  'museum',
  'market',
  'religious-site',
  'riverfront',
  'park-nature',
  'heritage-town',
  'hill-station',
  'wildlife',
  'city',
];

export const PLACES_VERIFY_NOTE =
  'Timings, fares, and access details change — verify locally before you travel.';
