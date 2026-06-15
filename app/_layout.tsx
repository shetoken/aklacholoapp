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
          </AuthProvider>
        </WishlistProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
