import classNames from 'classnames';
import React from 'react';
import styles from '../../../component/.partials/styles/component.module.css';
import { OTPSkeletonProps } from './component.interface';

export function OTPSkeleton({ ...rest }: OTPSkeletonProps) {
  return (
    <div
      {...rest}
      className={classNames('mosuk-otp-skeleton', styles.root, rest?.className)}
    >
      {rest?.children}
    </div>
  );
}
