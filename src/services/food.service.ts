import type {
  Allergen,
  Diet,
  Dish,
  DishIngredientLinkIds,
  DishIngredientLinks,
  DishKind,
  MealType,
} from '@/types';
import { dishes } from '@/data/food';
import {
  ALLERGEN_FILTER_ORDER,
  ALLERGEN_LABELS,
  DIET_FILTER_ORDER,
  DIET_LABELS,
  MEAL_TYPE_FILTER_ORDER,
  MEAL_TYPE_LABELS,
  FOOD_SEASON_LABELS,
} from '@/constants/food';
import { mockResponse, NotFoundError } from './api.client';
import { getDals, getFish } from './fish-dal.service';
import { getFloraItems } from './flora.service';

export {
  MEAL_TYPE_LABELS,
  MEAL_TYPE_FILTER_ORDER,
  DIET_LABELS,
  DIET_FILTER_ORDER,
  ALLERGEN_LABELS,
  ALLERGEN_FILTER_ORDER,
  FOOD_SEASON_LABELS,
};

export function getDishes(): Promise<Dish[]> {
  return mockResponse(dishes);
}

export function getFlagshipDishes(): Promise<Dish[]> {
  return mockResponse(dishes.filter((d) => d.isFlagship));
}

export function getDishesByMealType(mealType: MealType): Promise<Dish[]> {
  return mockResponse(dishes.filter((d) => d.mealTypes.includes(mealType)));
}

export function getDishesByDiet(diet: Diet): Promise<Dish[]> {
  return mockResponse(dishes.filter((d) => d.diet === diet));
}

export function getDishesByMealAndDiet(mealType: MealType, diet: Diet): Promise<Dish[]> {
  return mockResponse(
    dishes.filter((d) => d.mealTypes.includes(mealType) && d.diet === diet),
  );
}

export function getDishesByKind(kind: DishKind): Promise<Dish[]> {
  return mockResponse(dishes.filter((d) => d.kind === kind));
}

export function getRecipes(): Promise<Dish[]> {
  return mockResponse(dishes.filter((d) => d.hasRecipe));
}

export async function getDishBySlug(slug: string): Promise<Dish> {
  const found = dishes.find((d) => d.slug === slug);
  if (!found) throw new NotFoundError('Dish', slug);
  return mockResponse(found);
}

export function getDishesWithAllergen(allergen: Allergen): Promise<Dish[]> {
  return mockResponse(dishes.filter((d) => d.allergens.includes(allergen)));
}

export function getDishesFreeOf(
  avoid: Allergen[],
  options: { strict?: boolean } = { strict: true },
): Promise<Dish[]> {
  const strict = options.strict ?? true;
  return mockResponse(
    dishes.filter((d) => {
      const present = new Set<Allergen>([
        ...d.allergens,
        ...(strict ? (d.mayContain ?? []) : []),
      ]);
      return !avoid.some((a) => present.has(a));
    }),
  );
}

export function getAllUsedAllergens(): Promise<Allergen[]> {
  const set = new Set<Allergen>();
  dishes.forEach((d) => {
    d.allergens.forEach((a) => set.add(a));
    (d.mayContain ?? []).forEach((a) => set.add(a));
  });
  return mockResponse(Array.from(set));
}

export function getIngredientLinks(dishId: string): DishIngredientLinkIds {
  const dish = dishes.find((d) => d.id === dishId);
  return {
    fishIds: dish?.fishIds ?? [],
    dalIds: dish?.dalIds ?? [],
    floraIds: dish?.floraIds ?? [],
  };
}

export async function resolveDishIngredients(dishId: string): Promise<DishIngredientLinks> {
  const { fishIds, dalIds, floraIds } = getIngredientLinks(dishId);
  const [allFish, allDals, allFlora] = await Promise.all([
    getFish(),
    getDals(),
    getFloraItems(),
  ]);

  return mockResponse({
    fish: fishIds
      .map((id) => allFish.find((item) => item.id === id))
      .filter((item): item is NonNullable<typeof item> => Boolean(item)),
    dals: dalIds
      .map((id) => allDals.find((item) => item.id === id))
      .filter((item): item is NonNullable<typeof item> => Boolean(item)),
    flora: floraIds
      .map((id) => allFlora.find((item) => item.id === id))
      .filter((item): item is NonNullable<typeof item> => Boolean(item)),
  });
}
