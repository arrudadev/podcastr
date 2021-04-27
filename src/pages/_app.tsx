import { AppProps } from 'next/app';

import { Header } from '../components/Header';
import '../styles/global.scss';
import styles from '../styles/app.module.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
    </div>
  );
}
