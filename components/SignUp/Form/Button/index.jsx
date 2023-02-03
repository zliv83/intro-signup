import styles from './Button.module.scss';

export default function Button({ children, onClick }) {
  return (
    <button type="submit" onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}
