/* eslint-disable react/jsx-one-expression-per-line */
import styles from './TryIt.module.scss';

export default function TryIt({ className }) {
  return (
    <div className={`${styles.tryIt} ${className}`}>
      <span>
        <span className={styles.bold}>Try it free for 7 days</span> then $20/mo.
        thereafter
      </span>
    </div>
  );
}
