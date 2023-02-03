import styles from './Terms.module.scss';

export default function Terms() {
  return (
    <div className={styles.terms}>
      By clicking the button, you are agreeing to our
      <span className={styles.bold}>Terms and Services</span>
    </div>
  );
}
