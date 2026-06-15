import '../global.css';

import React, { useCallback, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useBrandFonts } from '@/theme/fonts';
import { brand, fonts } from '@/theme';
import { WishlistProvider } from '@/context/WishlistProvider';
import { AuthProvider } from '@/context/AuthProvider';
import { JourneyProvider } from '@/context/JourneyProvider';
import { PreferencesProvider } from '@/context/PreferencesProvider';

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function RootLayout() {
  const { fontsLoaded, fontError } = useBrandFonts();

  const onReady = useCallback(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync().catch(() => {});
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    if (fontsLoaded || fontError) return;
    const timer = setTimeout(() => {
      SplashScreen.hideAsync().catch(() => {});
    }, 4000);
    return () => clearTimeout(timer);
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: brand.indigo,
        }}
        onLayout={onReady}
      >
        <ActivityIndicator color={brand.marigold} size="large" />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <WishlistProvider>
          <AuthProvider>
          <PreferencesProvider>
          <JourneyProvider>
          <View style={{ flex: 1 }} onLayout={onReady}>
            <StatusBar style="light" />
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: brand.indigo },
                headerStyle: { backgroundColor: brand.indigo },
                headerTintColor: brand.ivory,
                headerTitleStyle: { fontFamily: fonts.serifBold, color: brand.ivory },
                headerShadowVisible: false,
                headerBackTitle: 'Back',
              }}
            >
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen
                name="collection/[id]"
                options={{ headerShown: true, title: '' }}
              />
              <Stack.Screen
                name="article/[id]"
                options={{ headerShown: true, title: '' }}
              />
              <Stack.Screen
                name="creator/[id]"
                options={{ headerShown: true, title: '' }}
              />
              <Stack.Screen
                name="product/[id]"
                options={{ headerShown: true, title: '' }}
              />
              <Stack.Screen
                name="travel/[id]"
                options={{ headerShown: true, title: '' }}
              />
              <Stack.Screen
                name="motifs"
                options={{ headerShown: true, title: 'Kolka Studio' }}
              />
              <Stack.Screen
                name="account"
                options={{ headerShown: true, title: 'Account' }}
              />
              <Stack.Screen
                name="sign-in"
                options={{ headerShown: true, title: 'Sign in' }}
              />
              <Stack.Screen
                name="sign-up"
                options={{ headerShown: true, title: 'Create account' }}
              />
              <Stack.Screen
                name="about"
                options={{ headerShown: true, title: 'About' }}
              />
              <Stack.Screen
                name="contact"
                options={{ headerShown: true, title: 'Contact us' }}
              />
              <Stack.Screen
                name="contact-sent"
                options={{ headerShown: true, title: 'Message sent' }}
              />
              <Stack.Screen
                name="privacy"
                options={{ headerShown: true, title: 'Privacy Policy' }}
              />
              <Stack.Screen
                name="terms"
                options={{ headerShown: true, title: 'Terms of Use' }}
              />
              <Stack.Screen
                name="creator-apply"
                options={{ headerShown: true, title: 'Apply as creator' }}
              />
              <Stack.Screen
                name="creator-apply-sent"
                options={{ headerShown: true, title: 'Application received' }}
              />
              <Stack.Screen
                name="admin-applications"
                options={{ headerShown: true, title: 'Creator pipeline' }}
              />
              <Stack.Screen
                name="sarees/index"
                options={{ headerShown: true, title: 'Bengali Sarees' }}
              />
              <Stack.Screen
                name="sarees/[slug]"
                options={{ headerShown: true, title: '' }}
              />
              <Stack.Screen
                name="authors/index"
                options={{ headerShown: true, title: 'Voices of Bengal' }}
              />
              <Stack.Screen
                name="authors/[slug]"
                options={{ headerShown: true, title: '' }}
              />
              <Stack.Screen
                name="icons/index"
                options={{ headerShown: true, title: 'Icons of Bengal' }}
              />
              <Stack.Screen
                name="icons/[slug]"
                options={{ headerShown: true, title: '' }}
              />
              <Stack.Screen
                name="natural-bengal/index"
                options={{ headerShown: true, title: 'Natural Bengal' }}
              />
              <Stack.Screen
                name="natural-bengal/[slug]"
                options={{ headerShown: true, title: '' }}
              />
              <Stack.Screen
                name="music/index"
                options={{ headerShown: true, title: 'Music of Bengal' }}
              />
              <Stack.Screen
                name="music/[slug]"
                options={{ headerShown: true, title: '' }}
              />
              <Stack.Screen
                name="bagan/index"
                options={{ headerShown: true, title: 'Bagan' }}
              />
              <Stack.Screen
                name="bagan/[slug]"
                options={{ headerShown: true, title: '' }}
              />
              <Stack.Screen
                name="pakhi/index"
                options={{ headerShown: true, title: 'Pakhi' }}
              />
              <Stack.Screen
                name="pakhi/[slug]"
                options={{ headerShown: true, title: '' }}
              />
              <Stack.Screen
                name="maachhe-bhaate/index"
                options={{ headerShown: true, title: 'Maachhe Bhaate' }}
              />
              <Stack.Screen
                name="maachhe-bhaate/fish/[slug]"
                options={{ headerShown: true, title: '' }}
              />
              <Stack.Screen
                name="maachhe-bhaate/dal/[slug]"
                options={{ headerShown: true, title: '' }}
              />
              <Stack.Screen
                name="rannaghar/index"
                options={{ headerShown: true, title: 'Rannaghar' }}
              />
              <Stack.Screen
                name="rannaghar/[slug]"
                options={{ headerShown: true, title: '' }}
              />
              <Stack.Screen
                name="hastoshilpo/index"
                options={{ headerShown: true, title: 'Hastoshilpo' }}
              />
              <Stack.Screen
                name="hastoshilpo/[slug]"
                options={{ headerShown: true, title: '' }}
              />
              <Stack.Screen
                name="saaj-o-poshak/index"
                options={{ headerShown: true, title: 'Saaj o Poshak' }}
              />
              <Stack.Screen
                name="saaj-o-poshak/[slug]"
                options={{ headerShown: true, title: '' }}
              />
              <Stack.Screen
                name="boi/index"
                options={{ headerShown: true, title: 'Boi' }}
              />
              <Stack.Screen
                name="boi/[slug]"
                options={{ headerShown: true, title: '' }}
              />
              <Stack.Screen
                name="cholochitro/index"
                options={{ headerShown: true, title: 'Cholochitro' }}
              />
              <Stack.Screen
                name="cholochitro/[slug]"
                options={{ headerShown: true, title: '' }}
              />
              <Stack.Screen
                name="bangabda/index"
                options={{ headerShown: true, title: 'Bangabda' }}
              />
              <Stack.Screen
                name="bangabda/ritu/[id]"
                options={{ headerShown: true, title: '' }}
              />
              <Stack.Screen
                name="bangabda/month/[id]"
                options={{ headerShown: true, title: '' }}
              />
              <Stack.Screen
                name="bangabda/ritual/[slug]"
                options={{ headerShown: true, title: '' }}
              />
              <Stack.Screen
                name="bhraman/index"
                options={{ headerShown: true, title: 'Bhraman' }}
              />
              <Stack.Screen
                name="bhraman/[slug]"
                options={{ headerShown: true, title: '' }}
              />
              <Stack.Screen
                name="tagore/index"
                options={{ headerShown: true, title: 'World of Tagore' }}
              />
              <Stack.Screen
                name="tagore/parjaay/[id]"
                options={{ headerShown: true, title: '' }}
              />
              <Stack.Screen
                name="tagore/work/[slug]"
                options={{ headerShown: true, title: '' }}
              />
              <Stack.Screen
                name="palaces/index"
                options={{ headerShown: true, title: 'Palaces & Rajbaris' }}
              />
              <Stack.Screen
                name="palaces/[slug]"
                options={{ headerShown: true, title: '' }}
              />
              <Stack.Screen
                name="festivals/index"
                options={{ headerShown: true, title: 'Festivals & Faiths' }}
              />
              <Stack.Screen
                name="festivals/festival/[slug]"
                options={{ headerShown: true, title: '' }}
              />
              <Stack.Screen
                name="festivals/site/[slug]"
                options={{ headerShown: true, title: '' }}
              />
              <Stack.Screen
                name="memorial/index"
                options={{ headerShown: true, title: 'Sons & Daughters of Bengal' }}
              />
              <Stack.Screen
                name="memorial/[slug]"
                options={{ headerShown: true, title: '' }}
              />
              <Stack.Screen
                name="memorial/prisoner/[id]"
                options={{ headerShown: true, title: '' }}
              />
              <Stack.Screen
                name="preferences-onboarding"
                options={{ headerShown: true, title: 'Your preferences' }}
              />
              <Stack.Screen
                name="journey"
                options={{ headerShown: true, title: 'Journey Through Bengal' }}
              />
              <Stack.Screen
                name="journey-onboarding"
                options={{ headerShown: true, title: '' }}
              />
              <Stack.Screen
                name="journey-reward"
                options={{ headerShown: true, title: 'Bengal Explorer' }}
              />
            </Stack>
          </View>
          </JourneyProvider>
          </PreferencesProvider>
          </AuthProvider>
        </WishlistProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
