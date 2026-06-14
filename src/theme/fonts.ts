/**
 * Font loading hook. Pairs an elegant serif (Fraunces) for headings with a
 * clean sans (Inter) for body text — both free for commercial app use, loaded
 * from Google Fonts via Expo's prebuilt font packages (no manual .ttf files).
 */
import {
  useFonts,
  Fraunces_500Medium,
  Fraunces_500Medium_Italic,
  Fraunces_600SemiBold,
} from '@expo-google-fonts/fraunces';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter';

export function useBrandFonts() {
  const [loaded, error] = useFonts({
    Fraunces_500Medium,
    Fraunces_500Medium_Italic,
    Fraunces_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });
  return { fontsLoaded: loaded, fontError: error };
}
