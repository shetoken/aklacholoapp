import { Redirect } from 'expo-router';

/** Legacy route — Learn moved under Experience. */
export default function LearnRedirect() {
  return <Redirect href="/experience" />;
}
