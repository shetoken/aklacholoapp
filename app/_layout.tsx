import '../global.css';

import React, { useCallback } from 'react';
import { View } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useBrandFonts } from '@/theme/fonts';
import { colors, fonts } from '@/theme';
import { WishlistProvider } from '@/context/WishlistProvider';

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function RootLayout() {
  const { fontsLoaded, fontError } = useBrandFonts();

  const onReady = useCallback(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync().catch(() => {});
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    // Keep the native splash up until fonts resolve.
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <WishlistProvider>
          <View style={{ flex: 1 }} onLayout={onReady}>
            <StatusBar style="dark" />
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: colors.cream[200] },
                headerStyle: { backgroundColor: colors.cream[200] },
                headerTintColor: colors.terracotta[600],
                headerTitleStyle: { fontFamily: fonts.serifBold },
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
                name="motifs"
                options={{ headerShown: true, title: 'Kolka Studio' }}
              />
            </Stack>
          </View>
        </WishlistProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
