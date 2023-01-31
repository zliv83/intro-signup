import Head from 'next/head';

import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Home Page</title>
      </Head>
    </div>
  );
}
