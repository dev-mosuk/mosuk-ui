import React from 'react';
import {
  InputSkeletonProps
} from './component.interface';
import styles from './component.module.css';

export function InputSkeleton({ ...props }: InputSkeletonProps) {
  return (
    <div
      {...props}
      className={'mosuk-input-skeleton' + ' ' + (styles.fieldset ?? '') + ' ' + (props?.className ?? '')}
    >
      {props?.children}
    </div>
  );
}

