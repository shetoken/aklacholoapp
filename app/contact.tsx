import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  Platform,
  Pressable,
  TextInput,
  View,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { Screen, AppText, KolkaDivider } from '@/components';
import { LEGAL } from '@/content/legal';
import { brand } from '@/theme';

function ContactField({
  label,
  value,
  onChangeText,
  placeholder,
  multiline = false,
  keyboardType = 'default',
}: {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  multiline?: boolean;
  keyboardType?: 'default' | 'email-address';
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
        keyboardType={keyboardType}
        autoCapitalize={keyboardType === 'email-address' ? 'none' : 'sentences'}
        autoCorrect={multiline}
        multiline={multiline}
        textAlignVertical={multiline ? 'top' : 'center'}
        className="rounded-xl border border-brand-border px-md text-brand-ivory font-sans"
        style={{
          backgroundColor: brand.surface,
          fontSize: 15,
          lineHeight: 22,
          paddingVertical: multiline ? 12 : 14,
          minHeight: multiline ? 120 : undefined,
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

export default function ContactScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = () => {
    if (sending) return;

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      const msg = 'Please fill in your name, email, and message.';
      setError(msg);
      showNotice('Almost there', msg);
      return;
    }

    if (!trimmedEmail.includes('@')) {
      const msg = 'Enter a valid email address so we can reply.';
      setError(msg);
      showNotice('Check your email', msg);
      return;
    }

    setError(null);
    setSending(true);
    Keyboard.dismiss();

    // Phase 1 — queued locally; wire to support API / email service in Phase 2.
    const href =
      `/contact-sent?name=${encodeURIComponent(trimmedName)}` +
      `&email=${encodeURIComponent(trimmedEmail)}`;

    router.push(href);
    setSending(false);
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Contact us', headerShown: true }} />
      <Screen
        scroll
        edges={['bottom']}
        contentClassName="pb-2xl"
        keyboardShouldPersistTaps="handled"
      >
        <View className="px-xl pt-xl">
          <AppText variant="h2">Get in touch</AppText>
          <AppText variant="body" className="mt-xs" style={{ lineHeight: 26 }}>
            Questions, partnerships, or feedback — we'd love to hear from you.
          </AppText>
          <KolkaDivider width={120} />

          <ContactField
            label="Name"
            value={name}
            onChangeText={setName}
            placeholder="Your name"
          />
          <ContactField
            label="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="you@example.com"
            keyboardType="email-address"
          />
          <ContactField
            label="Message"
            value={message}
            onChangeText={setMessage}
            placeholder="How can we help?"
            multiline
          />

          {error ? (
            <AppText variant="caption" className="mb-sm text-brand-vermillion">
              {error}
            </AppText>
          ) : null}

          <Pressable
            onPress={submit}
            disabled={sending}
            accessibilityRole="button"
            className="rounded-xl py-md items-center mt-sm"
            style={{
              backgroundColor: sending ? `${brand.marigold}88` : brand.marigold,
            }}
          >
            <AppText variant="label" style={{ color: brand.ink }}>
              {sending ? 'Sending…' : 'Send message'}
            </AppText>
          </Pressable>

          <AppText variant="caption" className="mt-lg text-center text-brand-ivory-soft">
            You can also reach us at {LEGAL.contactEmail}
          </AppText>
        </View>
      </Screen>
    </>
  );
}
