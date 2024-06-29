import { useEffect } from 'react';

export const useKeyDown = (keys, callback) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (keys.includes(event.code)) {
        callback();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [callback, keys]);
};
