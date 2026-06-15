import { Redirect } from 'expo-router';

/** Legacy route — all memorial content lives on the unified hub. */
export default function CellularJailRedirect() {
  return <Redirect href="/memorial" />;
}
