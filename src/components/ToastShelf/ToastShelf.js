import React from 'react';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, onDismiss }) {
  return (
    <div
      className={styles.wrapper}
      role={'region'}
      aria-live={'polite'}
      aria-label={'Notification'}
    >
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast onDismiss={onDismiss} {...toast} />
        </li>
      ))}
    </div>
  );
}

export default ToastShelf;
