import React from 'react';
import { Pressable, View } from 'react-native';
import { Link } from 'expo-router';

import { AppText } from '@/components/ui/Text';
import { KolkaDivider } from '@/components/brand/KolkaDivider';
import { ChevronRight } from '@/components/ui/icons';
import { LEGAL } from '@/content/legal';
import { brand } from '@/theme';

type FooterLinkProps = {
  label: string;
  href?: string;
  onPress?: () => void;
};

function FooterLink({ label, href, onPress }: FooterLinkProps) {
  const rowClass = 'flex-row items-center justify-between py-sm';

  if (href) {
    return (
      <Link href={href} asChild>
        <Pressable className={rowClass}>
          <AppText variant="label" className="text-brand-ivory-soft">
            {label}
          </AppText>
          <ChevronRight color={brand['ivory-muted']} size={18} />
        </Pressable>
      </Link>
    );
  }

  return (
    <Pressable onPress={onPress} className={rowClass}>
      <AppText variant="label" className="text-brand-ivory-soft">
        {label}
      </AppText>
      <ChevronRight color={brand['ivory-muted']} size={18} />
    </Pressable>
  );
}

/** Quiet legal + company links for the Account screen. */
export function AccountLegalFooter() {
  return (
    <View className="px-xl mt-xl">
      <KolkaDivider width={120} />
      <FooterLink label="About AklaCholo" href="/about" />
      <FooterLink label="Contact us" href="/contact" />
      <FooterLink label="Privacy Policy" href="/privacy" />
      <FooterLink label="Terms of Use" href="/terms" />
      <AppText
        variant="caption"
        className="mt-lg text-center text-brand-ivory-soft"
      >
        © {LEGAL.copyrightYear} {LEGAL.company}
      </AppText>
    </View>
  );
}
