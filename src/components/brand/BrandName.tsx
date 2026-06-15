import React from 'react';

import { AppText, type TextVariant } from '@/components/ui/Text';
import { APP } from '@/constants/app';

type BrandNameProps = {
  variant?: TextVariant;
  className?: string;
  /** Override marigold on "Cholo" (e.g. text-center). */
  accentClassName?: string;
};

/** Akla + Cholo — "Cholo" always in brand marigold. */
export function BrandName({
  variant = 'h1',
  className = '',
  accentClassName = 'text-brand-marigold',
}: BrandNameProps) {
  return (
    <AppText variant={variant} className={className}>
      {APP.namePrefix}
      <AppText variant={variant} className={accentClassName}>
        {APP.nameAccent}
      </AppText>
    </AppText>
  );
}
