import type {
  BorderSide,
  CellularJailNote,
  CellularJailOverview,
  CellularJailPrisoner,
  FreedomFighter,
  MemorialTile,
  StruggleMovement,
} from '@/types';
import { freedomFighters } from '@/data/freedom-fighters';
import {
  CELLULAR_JAIL_NOTE,
  cellularJailIntro,
  cellularJailPrisoners,
} from '@/data/cellular-jail';
import { mockResponse, NotFoundError } from './api.client';

// ── Freedom fighters ────────────────────────────────────────────────────────

export function getFreedomFighters(): Promise<FreedomFighter[]> {
  return mockResponse(freedomFighters);
}

export function getFlagshipFighters(): Promise<FreedomFighter[]> {
  return mockResponse(freedomFighters.filter((f) => f.isFlagship));
}

export function getWomenRevolutionaries(): Promise<FreedomFighter[]> {
  return mockResponse(freedomFighters.filter((f) => f.gender === 'female'));
}

export function getFightersByBorderSide(side: BorderSide): Promise<FreedomFighter[]> {
  return mockResponse(freedomFighters.filter((f) => f.borderSide === side));
}

export function getFightersByMovement(m: StruggleMovement): Promise<FreedomFighter[]> {
  return mockResponse(freedomFighters.filter((f) => f.movements.includes(m)));
}

export async function getFighterBySlug(slug: string): Promise<FreedomFighter> {
  const found = freedomFighters.find((f) => f.slug === slug);
  if (!found) throw new NotFoundError('Freedom fighter', slug);
  return mockResponse(found);
}

export function getMartyrs(): Promise<FreedomFighter[]> {
  return mockResponse(freedomFighters.filter((f) => f.martyrdom !== undefined));
}

export function getRelatedFighters(id: string): Promise<FreedomFighter[]> {
  const fighter = freedomFighters.find((f) => f.id === id);
  if (!fighter) return mockResponse([]);
  const related = fighter.relatedFighterIds
    .map((relatedId) => freedomFighters.find((f) => f.id === relatedId))
    .filter((f): f is FreedomFighter => Boolean(f));
  return mockResponse(related);
}

export function filterFreedomFighters(
  items: FreedomFighter[],
  opts: {
    borderSide?: BorderSide | null;
    movement?: StruggleMovement | null;
    womenOnly?: boolean;
  },
): FreedomFighter[] {
  return items.filter((fighter) => {
    if (opts.womenOnly && fighter.gender !== 'female') return false;
    if (opts.borderSide && fighter.borderSide !== opts.borderSide) return false;
    if (opts.movement && !fighter.movements.includes(opts.movement)) return false;
    return true;
  });
}

// ── Cellular Jail register ──────────────────────────────────────────────────

export function getCellularJailPrisoners(): Promise<CellularJailPrisoner[]> {
  return mockResponse(cellularJailPrisoners);
}

export function getCellularJailNote(): Promise<CellularJailNote> {
  return mockResponse(CELLULAR_JAIL_NOTE);
}

export function getCellularJailIntro(): Promise<CellularJailOverview> {
  return mockResponse(cellularJailIntro);
}

export function getPrisonersWhoDied(): Promise<CellularJailPrisoner[]> {
  return mockResponse(
    cellularJailPrisoners.filter((p) => p.fate === 'died-in-jail'),
  );
}

export async function getPrisonerById(id: string): Promise<CellularJailPrisoner> {
  const found = cellularJailPrisoners.find((p) => p.id === id);
  if (!found) throw new NotFoundError('Cellular Jail prisoner', id);
  return mockResponse(found);
}

export function filterCellularJailPrisoners(
  items: CellularJailPrisoner[],
  opts: {
    borderSide?: BorderSide | null;
    movement?: StruggleMovement | null;
    womenOnly?: boolean;
  },
): CellularJailPrisoner[] {
  return items.filter((prisoner) => {
    if (opts.womenOnly && prisoner.gender !== 'female') return false;
    if (opts.borderSide && prisoner.borderSide !== opts.borderSide) return false;
    if (opts.movement && !prisoner.movements.includes(opts.movement)) return false;
    return true;
  });
}

// ── Unified hub tiles ─────────────────────────────────────────────────────

export function buildMemorialTiles(
  fighters: FreedomFighter[],
  prisoners: CellularJailPrisoner[],
  opts: {
    borderSide?: BorderSide | null;
    movement?: StruggleMovement | null;
    womenOnly?: boolean;
  },
): MemorialTile[] {
  const filteredFighters = filterFreedomFighters(fighters, opts);
  const filteredPrisoners = filterCellularJailPrisoners(prisoners, opts);

  const fighterTiles: MemorialTile[] = [...filteredFighters]
    .sort((a, b) => {
      if (a.isFlagship && !b.isFlagship) return -1;
      if (b.isFlagship && !a.isFlagship) return 1;
      return a.name.localeCompare(b.name);
    })
    .map((fighter) => ({ kind: 'fighter', key: fighter.id, fighter }));

  const prisonerTiles: MemorialTile[] = [...filteredPrisoners]
    .sort((a, b) => {
      if (a.fate === 'died-in-jail' && b.fate !== 'died-in-jail') return -1;
      if (b.fate === 'died-in-jail' && a.fate !== 'died-in-jail') return 1;
      return a.name.localeCompare(b.name);
    })
    .map((prisoner) => ({ kind: 'prisoner', key: prisoner.id, prisoner }));

  return [...fighterTiles, ...prisonerTiles];
}
