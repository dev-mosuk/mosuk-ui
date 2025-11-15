import React from 'react';
import { HrProps } from './component.interface';
import styles from './component.module.css';

export function Hr({ ...props }: HrProps) {
  return (
    <hr
      {...props}
      className={`mosuk-hr ${styles['hr']} ${props?.className ?? ''}`}
    />
  );
}
