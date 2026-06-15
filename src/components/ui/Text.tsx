import React from 'react';
import { Text as RNText, type TextProps as RNTextProps } from 'react-native';

/**
 * Typed text primitive enforcing the brand type system: elegant serif
 * (Fraunces) for display/headings, clean sans (Inter) for body. Use `variant`
 * instead of ad-hoc className font choices so typography stays consistent.
 */
export type TextVariant =
  | 'display' // hero
  | 'h1'
  | 'h2'
  | 'h3'
  | 'title' // serif card title
  | 'body'
  | 'bodyLg'
  | 'caption'
  | 'label'
  | 'quote';

const VARIANT: Record<TextVariant, string> = {
  display: 'font-serif-bold text-5xl leading-tight text-brand-ivory',
  h1: 'font-serif-bold text-4xl leading-tight text-brand-ivory',
  h2: 'font-serif-bold text-2xl leading-snug text-brand-ivory',
  h3: 'font-serif text-xl leading-snug text-brand-ivory',
  title: 'font-serif text-lg leading-snug text-brand-ivory',
  body: 'font-sans text-base leading-relaxed text-brand-ivory-soft',
  bodyLg: 'font-sans text-lg leading-relaxed text-brand-ivory-soft',
  caption: 'font-sans text-sm leading-normal text-brand-muted',
  label: 'font-sans-semibold text-xs uppercase tracking-widest text-brand-muted',
  quote: 'font-serif-italic text-xl leading-relaxed text-brand-marigold',
};

export interface AppTextProps extends RNTextProps {
  variant?: TextVariant;
  className?: string;
}

export function AppText({
  variant = 'body',
  className = '',
  ...props
}: AppTextProps) {
  return <RNText className={`${VARIANT[variant]} ${className}`} {...props} />;
}
