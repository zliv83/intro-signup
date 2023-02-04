import Link from 'next/link';
import styles from './Terms.module.scss';

export default function Terms() {
  return (
    <div className={styles.terms}>
      By clicking the button, you are agreeing to our
      <Link href="/terms">
        <span className={styles.bold}>Terms and Services</span>
      </Link>
    </div>
  );
}
