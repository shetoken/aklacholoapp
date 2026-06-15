import React from 'react';

import type { MemorialTile } from '@/types';
import { MEMORIAL_TILE_WIDTH } from '@/constants/memorial';
import { CellularJailPrisonerCard } from './CellularJailPrisonerCard';
import { FreedomFighterCard } from './FreedomFighterCard';

type MemorialTileCardProps = {
  tile: MemorialTile;
  width?: number;
  featured?: boolean;
};

/** Renders either a freedom-fighter or Kala Pani prisoner tile. */
export function MemorialTileCard({
  tile,
  width = MEMORIAL_TILE_WIDTH,
  featured = false,
}: MemorialTileCardProps) {
  if (tile.kind === 'fighter') {
    return <FreedomFighterCard fighter={tile.fighter} width={width} featured={featured} />;
  }
  return <CellularJailPrisonerCard prisoner={tile.prisoner} width={width} featured={featured} />;
}
