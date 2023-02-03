import Image from 'next/image';

import styles from './Input.module.scss';

export default function Input({
  className,
  placeholder,
  name,
  handleChange,
  value,
  errorMessage,
  type = 'text',
}) {
  return (
    <>
      <div className={styles.textArea}>
        <input
          className={`${
            errorMessage ? styles.error : styles.input
          } ${className}`}
          placeholder={placeholder}
          name={name}
          id="farts"
          onChange={handleChange}
          value={value}
          type={type}
        />
        {errorMessage ? (
          <Image
            className={styles.image}
            width={24}
            height={24}
            alt="error exclimation mark"
            src="/icon-error.svg"
          />
        ) : null}
      </div>
      {errorMessage ? (
        <span className={styles.errorMessage}>{errorMessage}</span>
      ) : null}
    </>
  );
}
