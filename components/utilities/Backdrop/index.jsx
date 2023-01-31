/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import styles from './Backdrop.module.scss';

export default function Backdrop({ show, children, backdropClose }) {
  const [isBrowser, setIsBrowser] = useState(false);

  const backdropCloseKeyboard = (e) => {
    if (e.key === 'Escape') {
      backdropClose();
    }
  };

  const overlay = show ? (
    <div
      className={styles.backdrop}
      onClick={backdropClose}
      onKeyDown={backdropCloseKeyboard}
      role="dialog"
    >
      {children}
    </div>
  ) : null;

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    return createPortal(overlay, document.getElementById('modal-root'));
  }
  return null;
}
