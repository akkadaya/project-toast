import React, { createContext, useState } from 'react';

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const addToast = (newToast) => {
    setToasts((prev) => [...prev, newToast]);
  };
  const removeToast = (id) => {
    setToasts((prev) =>
      prev.filter(
        (toast) => toast.id !== id,
      )
    );
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
