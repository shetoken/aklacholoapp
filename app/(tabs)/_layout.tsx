import React from 'react';
import { Tabs } from 'expo-router';
import { colors, fonts } from '@/theme';
import {
  HomeIcon,
  CompassIcon,
  CreatorsIcon,
  HeartIcon,
} from '@/components/ui/icons';

/**
 * Bottom tab bar — the four main areas. All labels are plain English per the
 * brand naming convention (no pronunciation friction for a global audience).
 */
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.terracotta[500],
        tabBarInactiveTintColor: colors.ink.muted,
        tabBarStyle: {
          backgroundColor: colors.cream[50],
          borderTopColor: colors.cream[400],
          height: 64,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontFamily: fonts.sansMedium,
          fontSize: 11,
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
        name="discover"
        options={{
          title: 'Discover',
          tabBarIcon: ({ color, focused }) => (
            <CompassIcon color={color} filled={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="creators"
        options={{
          title: 'Creators',
          tabBarIcon: ({ color, focused }) => (
            <CreatorsIcon color={color} filled={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          tabBarIcon: ({ color, focused }) => (
            <HeartIcon color={color} filled={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
