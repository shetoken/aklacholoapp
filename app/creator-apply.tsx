import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  Platform,
  Pressable,
  ScrollView,
  TextInput,
  View,
} from 'react-native';
import { Link, Stack, useRouter } from 'expo-router';

import { Screen, AppText, KolkaDivider } from '@/components';
import { AuthFormField } from '@/components/ui/AuthFormField';
import { DisciplinePicker } from '@/components/ui/DisciplinePicker';
import { ShopAddressFields } from '@/components/ui/ShopAddressFields';
import { Tag } from '@/components/ui/Tag';
import { CREATOR_ONBOARDING } from '@/content/creator-onboarding';
import {
  BENGAL_REGIONS,
  DISCIPLINE_TYPES,
  disciplineToType,
  type CreatorDiscipline,
} from '@/constants/creator-onboarding';
import {
  buildShopAddress,
  EMPTY_SHOP_ADDRESS,
  isShopAddressComplete,
} from '@/constants/shop-address';
import { submitCreatorApplication } from '@/services';
import type { BengalRegion, DisciplineType, ShopAddress } from '@/types';
import { brand } from '@/theme';

function MultilineField({
  label,
  value,
  onChangeText,
  placeholder,
}: {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}) {
  return (
    <View className="mb-lg">
      <AppText variant="label" className="mb-sm text-brand-ivory-soft">
        {label}
      </AppText>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={brand['ivory-muted']}
        multiline
        textAlignVertical="top"
        className="rounded-xl border border-brand-border px-md text-brand-ivory font-sans"
        style={{
          backgroundColor: brand.surface,
          fontSize: 15,
          lineHeight: 22,
          paddingVertical: 12,
          minHeight: 100,
        }}
      />
    </View>
  );
}

function showNotice(title: string, message: string) {
  if (Platform.OS === 'web') {
    window.alert(`${title}\n\n${message}`);
    return;
  }
  Alert.alert(title, message);
}

export default function CreatorApplyScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [discipline, setDiscipline] = useState<CreatorDiscipline | null>(null);
  const [disciplineType, setDisciplineType] = useState<DisciplineType>('physical');
  const [region, setRegion] = useState<BengalRegion>('Kolkata');
  const [bio, setBio] = useState('');
  const [story, setStory] = useState('');
  const [instagramUrl, setInstagramUrl] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [sampleDescription, setSampleDescription] = useState('');
  const [shopAddress, setShopAddress] = useState<ShopAddress>(EMPTY_SHOP_ADDRESS);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const submit = async () => {
    if (submitting) return;

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedDiscipline = discipline;
    const trimmedBio = bio.trim();

    if (!trimmedName || !trimmedEmail || !trimmedDiscipline || !trimmedBio) {
      const msg = 'Please add your name, email, discipline, and a short bio.';
      setError(msg);
      showNotice('Almost there', msg);
      return;
    }

    if (!trimmedEmail.includes('@')) {
      const msg = 'Enter a valid email so we can reach you.';
      setError(msg);
      showNotice('Check your email', msg);
      return;
    }

    if (disciplineType === 'physical' && !isShopAddressComplete(shopAddress)) {
      const msg =
        'Physical shops need town, state, zip code, and country.';
      setError(msg);
      showNotice('Shop location', msg);
      return;
    }

    setError(null);
    setSubmitting(true);
    Keyboard.dismiss();

    try {
      await submitCreatorApplication({
        name: trimmedName,
        email: trimmedEmail,
        phone: phone.trim() || undefined,
        discipline: trimmedDiscipline,
        disciplineType,
        region,
        bio: trimmedBio,
        story: story.trim() || undefined,
        instagramUrl: instagramUrl.trim() || undefined,
        portfolioUrl: portfolioUrl.trim() || undefined,
        sampleDescription: sampleDescription.trim() || undefined,
        shopAddress: buildShopAddress(disciplineType, shopAddress),
      });

      router.replace(
        `/creator-apply-sent?name=${encodeURIComponent(trimmedName)}`,
      );
    } catch {
      const msg = 'Something went wrong. Please try again in a moment.';
      setError(msg);
      showNotice('Could not submit', msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Apply as creator', headerShown: true }} />
      <Screen
        scroll
        edges={['bottom']}
        contentClassName="pb-2xl"
        keyboardShouldPersistTaps="handled"
      >
        <View className="px-xl pt-xl">
          <AppText variant="h2">{CREATOR_ONBOARDING.applyTitle}</AppText>
          <AppText variant="body" className="mt-xs" style={{ lineHeight: 26 }}>
            {CREATOR_ONBOARDING.applyLead}
          </AppText>
          <KolkaDivider width={120} />

          <AppText variant="label" className="mb-md text-brand-marigold">
            How it works
          </AppText>
          {CREATOR_ONBOARDING.applySteps.map((step, i) => (
            <AppText key={step} variant="body" className="mb-sm" style={{ lineHeight: 24 }}>
              {i + 1}. {step}
            </AppText>
          ))}

          <KolkaDivider width={80} />

          <AuthFormField
            label="Full name"
            value={name}
            onChangeText={setName}
            placeholder="Your name or studio name"
            autoCapitalize="words"
          />
          <AuthFormField
            label="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="you@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <AuthFormField
            label="Phone (optional)"
            value={phone}
            onChangeText={setPhone}
            placeholder="+1 or +91…"
            keyboardType="default"
          />
          <DisciplinePicker
            value={discipline}
            onChange={(next) => {
              setDiscipline(next);
              setDisciplineType(disciplineToType(next));
            }}
          />
          <AppText variant="label" className="mb-sm text-brand-ivory-soft">
            Type
          </AppText>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 8, paddingBottom: 16 }}
          >
            {DISCIPLINE_TYPES.map((d) => (
              <Pressable key={d.key} onPress={() => setDisciplineType(d.key)}>
                <Tag label={d.label} active={disciplineType === d.key} />
              </Pressable>
            ))}
          </ScrollView>

          <AppText variant="label" className="mb-sm text-brand-ivory-soft">
            Region
          </AppText>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 8, paddingBottom: 16 }}
          >
            {BENGAL_REGIONS.map((r) => (
              <Pressable key={r} onPress={() => setRegion(r)}>
                <Tag label={r} active={region === r} />
              </Pressable>
            ))}
          </ScrollView>

          {disciplineType === 'physical' ? (
            <ShopAddressFields value={shopAddress} onChange={setShopAddress} />
          ) : null}

          <MultilineField
            label="Short bio"
            value={bio}
            onChangeText={setBio}
            placeholder="One or two sentences about your craft and what you make."
          />
          <MultilineField
            label="Your story (optional)"
            value={story}
            onChangeText={setStory}
            placeholder="Training, collective, materials, what makes your work distinct."
          />
          <AuthFormField
            label="Instagram (optional)"
            value={instagramUrl}
            onChangeText={setInstagramUrl}
            placeholder="https://instagram.com/…"
            autoCapitalize="none"
          />
          <AuthFormField
            label="Portfolio or website (optional)"
            value={portfolioUrl}
            onChangeText={setPortfolioUrl}
            placeholder="https://…"
            autoCapitalize="none"
          />
          <MultilineField
            label="Sample piece (optional)"
            value={sampleDescription}
            onChangeText={setSampleDescription}
            placeholder="If we move forward, what piece could you send for a vetting sample?"
          />

          {error ? (
            <AppText variant="caption" className="mb-sm text-brand-vermillion">
              {error}
            </AppText>
          ) : null}

          <Pressable
            onPress={submit}
            disabled={submitting}
            className="rounded-xl py-md items-center mt-sm"
            style={{
              backgroundColor: submitting ? `${brand.marigold}88` : brand.marigold,
            }}
          >
            <AppText variant="label" style={{ color: brand.ink }}>
              {submitting ? 'Submitting…' : 'Submit application'}
            </AppText>
          </Pressable>

          <AppText variant="caption" className="mt-lg text-center text-brand-ivory-soft">
            {CREATOR_ONBOARDING.applyFooter}
          </AppText>

          <Link href="/contact" asChild>
            <Pressable className="mt-md py-sm items-center">
              <AppText variant="label" className="text-brand-marigold">
                Questions? Contact us
              </AppText>
            </Pressable>
          </Link>
        </View>
      </Screen>
    </>
  );
}
