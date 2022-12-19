import React from 'react';
import styles from '@/components/UI/Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
}

export default function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button className={styles[className]} onClick={onClick}>
      {children}
    </button>
  );
}
