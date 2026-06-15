import React, { useRef } from 'react';
import { Pressable, View } from 'react-native';
import { Link, useRouter } from 'expo-router';

import { AppText } from '@/components/ui/Text';
import { KolkaDivider } from '@/components/brand/KolkaDivider';
import { ChevronRight } from '@/components/ui/icons';
import { LEGAL } from '@/content/legal';
import { brand } from '@/theme';

const FOUNDER_TAP_COUNT = 5;
const FOUNDER_TAP_WINDOW_MS = 2500;

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
  const router = useRouter();
  const founderTaps = useRef(0);
  const founderTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onCopyrightPress = () => {
    founderTaps.current += 1;
    if (founderTimer.current) clearTimeout(founderTimer.current);
    founderTimer.current = setTimeout(() => {
      founderTaps.current = 0;
    }, FOUNDER_TAP_WINDOW_MS);

    if (founderTaps.current >= FOUNDER_TAP_COUNT) {
      founderTaps.current = 0;
      if (founderTimer.current) clearTimeout(founderTimer.current);
      router.push('/admin-applications');
    }
  };

  return (
    <View className="px-xl mt-xl">
      <KolkaDivider width={120} />
      <FooterLink label="About AklaCholo" href="/about" />
      <FooterLink label="Contact us" href="/contact" />
      <FooterLink label="Privacy Policy" href="/privacy" />
      <FooterLink label="Terms of Use" href="/terms" />
      <Pressable onPress={onCopyrightPress} accessibilityLabel="Copyright">
        <AppText
          variant="caption"
          className="mt-lg text-center text-brand-ivory-soft"
        >
          © {LEGAL.copyrightYear} {LEGAL.company}
        </AppText>
      </Pressable>
    </View>
  );
}
