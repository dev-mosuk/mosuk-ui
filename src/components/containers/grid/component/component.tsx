import React from 'react';
import { GridProps } from './component.interface';
import styles from './component.module.css';

export function Grid({ ...props }: GridProps) {
  return (
    <div
      {...props}
      className={
        'mosuk-grid' +
        ' ' +
        (styles.grid ?? '') +
        ' ' +
        (props?.className ?? '')
      }
    >
      {props?.children}
    </div>
  );
}
