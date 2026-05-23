import {
  DlDlProps,
  DlProps,
  DtDdProps,
  DtDtProps,
} from '@/components/display/dl/component/component.interface';
import styles from '@/components/display/dl/component/component.module.css';
import React from 'react';

export function Dl({ ...props }: DlProps) {
  return (
    <div className={`mosuk-dl-list ${styles['dl-list']} ${props?.className}`}>
      {props?.children}
    </div>
  );
}

export function DlDl({ ...props }: DlDlProps) {
  return (
    <dl {...props} className={`${styles.dl} ${props?.className}`}>
      {props?.children}
    </dl>
  );
}

export function DlDt({ ...props }: DtDtProps) {
  return (
    <dt {...props} className={`${styles.dt} ${props?.className}`}>
      {props?.children}
    </dt>
  );
}

export function DlDd({ ...props }: DtDdProps) {
  return (
    <dd {...props} className={`${styles.dd} ${props?.className}`}>
      {props?.children}
    </dd>
  );
}
