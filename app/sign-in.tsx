import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  Platform,
  Pressable,
  View,
} from 'react-native';
import { Link, Stack, useRouter } from 'expo-router';

import { Screen, AppText, KolkaDivider } from '@/components';
import { AuthFormField } from '@/components/ui/AuthFormField';
import { useAuth } from '@/context/AuthProvider';
import { usePreferences } from '@/context/PreferencesProvider';
import { brand } from '@/theme';

function showNotice(title: string, message: string) {
  if (Platform.OS === 'web') {
    window.alert(`${title}\n\n${message}`);
    return;
  }
  Alert.alert(title, message);
}

export default function SignInScreen() {
  const router = useRouter();
  const { signIn } = useAuth();
  const { hasPreferences } = usePreferences();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const submit = () => {
    if (submitting) return;

    const mail = email.trim();
    const pass = password.trim();

    if (!mail || !pass) {
      const msg = 'Please enter your email and password.';
      setError(msg);
      showNotice('Almost there', msg);
      return;
    }

    if (!mail.includes('@')) {
      const msg = 'Enter a valid email address.';
      setError(msg);
      showNotice('Check your email', msg);
      return;
    }

    setError(null);
    setSubmitting(true);
    Keyboard.dismiss();
    signIn({ email: mail, password: pass });
    router.replace(hasPreferences ? '/(tabs)' : '/preferences-onboarding');
    setSubmitting(false);
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Sign in', headerShown: true }} />
      <Screen scroll edges={['bottom']} contentClassName="pb-2xl" keyboardShouldPersistTaps="handled">
        <View className="px-xl pt-xl">
          <AppText variant="h2">Welcome back</AppText>
          <AppText variant="body" className="mt-xs" style={{ lineHeight: 26 }}>
            Sign in to sync saved pieces and pick up where you left off.
          </AppText>
          <KolkaDivider width={120} />

          <AuthFormField
            label="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="you@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <AuthFormField
            label="Password"
            value={password}
            onChangeText={setPassword}
            placeholder="Your password"
            secureTextEntry
            autoCapitalize="none"
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
              {submitting ? 'Signing in…' : 'Sign in'}
            </AppText>
          </Pressable>

          <Link href="/sign-up" asChild>
            <Pressable className="mt-lg py-sm items-center">
              <AppText variant="label" className="text-brand-marigold">
                New here? Create an account
              </AppText>
            </Pressable>
          </Link>

          <AppText variant="caption" className="mt-md text-center text-brand-ivory-soft">
            Phase 1 stub — Apple & Google auth in Phase 2
          </AppText>
        </View>
      </Screen>
    </>
  );
}
