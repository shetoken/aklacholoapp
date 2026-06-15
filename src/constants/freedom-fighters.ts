import type {
  BorderSide,
  FighterFate,
  StruggleMovement,
  StruggleRole,
} from '@/types';

export const FATE_LABELS: Record<FighterFate, string> = {
  executed: 'Executed by the British',
  'killed-in-action': 'Killed in action',
  'died-in-prison': 'Died in prison',
  'died-in-exile': 'Died in exile (Kala Pani)',
  'self-sacrifice': 'Took their own life to avoid capture',
  survived: 'Survived to see independence',
  disappeared: 'Fate unconfirmed',
  'fate-unverified': 'Fate not fully documented',
};

export const BORDER_LABELS: Record<BorderSide, string> = {
  'west-bengal-india': 'West Bengal (India)',
  bangladesh: 'Bangladesh',
  'undivided-bengal': 'Undivided Bengal',
};

export const BORDER_FILTER_ORDER: BorderSide[] = [
  'undivided-bengal',
  'west-bengal-india',
  'bangladesh',
];

export const MOVEMENT_LABELS: Record<StruggleMovement, string> = {
  'anushilan-jugantar': 'Anushilan & Jugantar',
  'chittagong-uprising': 'Chittagong uprising',
  swadeshi: 'Swadeshi',
  'ina-azad-hind': 'INA / Azad Hind',
  'quit-india': 'Quit India',
  congress: 'Congress',
  other: 'Other',
};

export const MOVEMENT_FILTER_ORDER: StruggleMovement[] = [
  'anushilan-jugantar',
  'chittagong-uprising',
  'swadeshi',
  'ina-azad-hind',
  'quit-india',
  'congress',
];

export const ROLE_LABELS: Record<StruggleRole, string> = {
  'armed-revolutionary': 'Armed revolutionary',
  'political-leader': 'Political leader',
  'mass-mobiliser': 'Mass mobiliser',
  'ideologue-thinker': 'Ideologue & thinker',
  'ina-azad-hind': 'INA / Azad Hind',
  'women-revolutionary': 'Women revolutionary',
};
