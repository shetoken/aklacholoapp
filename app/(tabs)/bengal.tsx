import { Redirect } from 'expo-router';

/** Legacy alias — Bengal tab label now maps to Experience → Learn. */
export default function BengalRedirect() {
  return <Redirect href="/experience" />;
}
