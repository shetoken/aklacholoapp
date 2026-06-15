import type { CellularJailPrisonerFate } from '@/types';

export const PRISONER_FATE_LABELS: Record<CellularJailPrisonerFate, string> = {
  'died-in-jail': 'Died in the Cellular Jail',
  released: 'Released',
  'survived-released': 'Survived and released',
  'broke-mentally': 'Released — enduring psychological harm',
  unknown: 'Fate not fully documented',
};
