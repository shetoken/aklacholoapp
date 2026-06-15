import type { Allergen, Diet, FoodSeason, MealType } from '@/types';

export const MEAL_TYPE_LABELS: Record<MealType, string> = {
  breakfast: 'Breakfast',
  lunch: 'Lunch',
  snack: 'Snacks & Street Food',
  dinner: 'Dinner',
  sweet: 'Sweets (Mishti)',
  drink: 'Drinks',
  condiment: 'Condiments',
};

export const MEAL_TYPE_FILTER_ORDER: MealType[] = [
  'breakfast',
  'lunch',
  'snack',
  'dinner',
  'sweet',
  'drink',
  'condiment',
];

export const DIET_LABELS: Record<Diet, string> = {
  vegan: 'Vegan',
  vegetarian: 'Vegetarian',
  'non-vegetarian': 'Non-Vegetarian',
};

export const DIET_FILTER_ORDER: Diet[] = ['vegan', 'vegetarian', 'non-vegetarian'];

export const ALLERGEN_LABELS: Record<Allergen, string> = {
  dairy: 'Dairy',
  'tree-nuts': 'Tree Nuts',
  peanuts: 'Peanuts',
  mustard: 'Mustard',
  fish: 'Fish',
  shellfish: 'Shellfish',
  egg: 'Egg',
  gluten: 'Gluten',
  sesame: 'Sesame',
  soy: 'Soy',
  coconut: 'Coconut',
};

export const ALLERGEN_FILTER_ORDER: Allergen[] = [
  'dairy',
  'tree-nuts',
  'peanuts',
  'mustard',
  'fish',
  'shellfish',
  'egg',
  'gluten',
  'sesame',
  'soy',
  'coconut',
];

export const FOOD_SEASON_LABELS: Record<FoodSeason, string> = {
  monsoon: 'Monsoon (Borsha)',
  winter: 'Winter',
  summer: 'Summer',
  'year-round': 'Year-round',
};
