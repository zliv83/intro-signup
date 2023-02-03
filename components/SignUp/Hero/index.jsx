import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Learn to code by watching others</h1>
      <h2 className={styles.subtitle}>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </h2>
    </div>
  );
}
