import React from 'react';
import { ContentProps } from './component.interface';
import styles from './component.module.css';

export function Content({ ...props }: ContentProps) {
  return (
    <div {...props} className={`mosuk-content ${styles.content} ${props?.className ?? ''}`}>
      {props?.children}
    </div>
  );
}
