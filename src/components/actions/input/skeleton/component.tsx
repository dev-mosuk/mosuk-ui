import classNames from 'classnames';
import React from 'react';
import {
  InputSkeletonProps
} from './component.interface';
import styles from './component.module.css';

export function InputSkeleton({ ...rest }: InputSkeletonProps) {
  return (
    <div
      {...rest}
      className={classNames('mosuk-input-skeleton', styles.fieldset, rest?.className)}
    >
      {rest?.children}
    </div>
  );
}

