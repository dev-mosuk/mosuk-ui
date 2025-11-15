import React from 'react';
import { ButtonsProps } from './component.interface';
import styles from './component.module.css';

export function Buttons({ ref, ...props }: ButtonsProps) {
  return (
    <section
      {...props}
      ref={ref}
      className={`mosuk-buttons ${styles.buttons} ${props?.className ?? ''}`}
    >
      {props?.children}
    </section>
  );
}
