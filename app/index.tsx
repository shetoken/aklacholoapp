import { Redirect } from 'expo-router';

/** App entry — land on Home tab first. */
export default function Index() {
  return <Redirect href="/(tabs)" />;
}
