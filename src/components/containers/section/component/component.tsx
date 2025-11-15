import React from 'react';
import { SectionProps } from './component.interface';
import styles from './component.module.css';

export function Section({ ...props }: SectionProps) {
  return (
    <div {...props} className={`mosuk-section ${styles.section} ${props?.className ?? ''}`}>
      {props?.children}
    </div>
  );
}
