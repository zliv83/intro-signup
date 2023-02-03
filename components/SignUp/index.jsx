import styles from './SignUp.module.scss';

import Hero from './Hero';
import Form from './Form';

export default function SignUp() {
  return (
    <div className={styles.signUp}>
      <div className={styles.heroGrid}>
        <Hero className={styles.hero} />
      </div>
      <div className={styles.formGrid}>
        <Form className={styles.form} />
      </div>
    </div>
  );
}
