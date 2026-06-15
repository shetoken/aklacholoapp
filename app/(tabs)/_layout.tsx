import React from 'react';
import { Tabs } from 'expo-router';
import { brand, fonts } from '@/theme';
import {
  HomeIcon,
  CompassIcon,
  MapPinIcon,
  ShopIcon,
  BriefcaseIcon,
} from '@/components/ui/icons';

/**
 * Bottom tab bar — Home · Discover · Experience · Shop · Hire
 * Learn is a sub-tab inside Experience.
 */
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: brand.marigold,
        tabBarInactiveTintColor: '#8A8498',
        tabBarStyle: {
          backgroundColor: brand.indigo,
          borderTopColor: `${brand.ivory}22`,
          height: 64,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontFamily: fonts.sansMedium,
          fontSize: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <HomeIcon color={color} filled={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Discover',
          tabBarIcon: ({ color, focused }) => (
            <CompassIcon color={color} filled={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="experience"
        options={{
          title: 'Experience',
          tabBarIcon: ({ color, focused }) => (
            <MapPinIcon color={color} filled={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: 'Shop',
          tabBarIcon: ({ color, focused }) => (
            <ShopIcon color={color} filled={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="hire"
        options={{
          title: 'Hire',
          tabBarIcon: ({ color, focused }) => (
            <BriefcaseIcon color={color} filled={focused} />
          ),
        }}
      />
      {/* Hidden routes */}
      <Tabs.Screen name="learn" options={{ href: null }} />
      <Tabs.Screen name="discover" options={{ href: null }} />
      <Tabs.Screen name="bengal" options={{ href: null }} />
      <Tabs.Screen name="talent" options={{ href: null }} />
      <Tabs.Screen name="creators" options={{ href: null }} />
      <Tabs.Screen name="saved" options={{ href: null }} />
    </Tabs>
  );
}
