import { Redirect } from 'expo-router';

/** @deprecated Use /talent */
export default function CreatorsRedirect() {
  return <Redirect href="/talent" />;
}
