import React, { useContext, useState } from 'react';
import Button from '../Button';
import { ToastContext } from '../ToastProvider';
import ToastShelf from '../ToastShelf/ToastShelf';
import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [variant, setVariant] = useState('notice');
  const [message, setMessage] = useState('');
  const { toasts, addToast, removeToast } = useContext(ToastContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    addToast({
      id: crypto.randomUUID(),
      variant,
      message,
    });

    setMessage('');
    setVariant('notice');
  };

  return (
    <div className={styles.wrapper}>
      <ToastShelf toasts={toasts} onDismiss={removeToast} />
      <header>
        <img alt={'Cute toast mascot'} src={'/toast.png'} />
        <h1>Toast Playground</h1>
      </header>

      <form onSubmit={handleSubmit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor={'message'}
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id={'message'}
                className={styles.messageInput}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              {VARIANT_OPTIONS.map((option) => {
                return (
                  <label key={option} htmlFor={`variant-${option}`}>
                    <input
                      id={`variant-${option}`}
                      type={'radio'}
                      name={'variant'}
                      value={option}
                      checked={variant === option}
                      onChange={(event) => setVariant(event.target.value)}
                    />
                    {option}
                  </label>
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button
                type={'submit'}
              >
                Pop Toast!
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
