import React from 'react';
import { Buttons } from '../../../containers/buttons/component';
import {
  EmptyButtonsProps,
  EmptyIconProps,
  EmptyProps,
  EmptyTitleProps,
} from './component.interface';
import styles from './component.module.css';

export function Empty({ ...props }: EmptyProps) {
  return (
    <section
      {...props}
      className={`mosuk-empty ${styles.empty} ${props?.className ?? ''}`}
    >
      {props?.children}
    </section>
  );
}

export function EmptyIcon({ ...props }: EmptyIconProps) {
  return (
    <div
      className={`mosuk-empty-icon ${styles.icon} ${props?.className ?? ''}`}
      {...props}
    >
      {props?.children}
    </div>
  );
}

export function EmptyTitle({ ...props }: EmptyTitleProps) {
  return (
    <h3
      {...props}
      className={`mosuk-empty-title ${styles.title} ${props?.className ?? ''}`}
    >
      {props?.children}
    </h3>
  );
}

export function EmptyButtons({ ...props }: EmptyButtonsProps) {
  return (
    <Buttons
      {...props}
      className={`mosuk-empty-buttons ${styles.buttons} ${
        props?.className ?? ''
      }`}
    >
      {props?.children}
    </Buttons>
  );
}
