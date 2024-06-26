import { Metadata } from 'next';

import Link from '@/components/Link';
import styles from '@/styles/common/404.module.scss';

export default function NotFound() {
  return (
    <main className={styles.notFound}>
      <h1>404</h1>
      <h3>Page not found</h3>

      <Link href='/'>GO BACK</Link>
    </main>
  );
}

export const metadata: Metadata = {
  title: 'Page Not Found',
  alternates: { canonical: '/404' },
  robots: { index: false, follow: false }
};
