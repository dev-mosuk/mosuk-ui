import styles from '@/components/actions/otp/component/.partials/styles/component.module.css';
import { OTPSkeletonProps } from '@/components/actions/otp/skeleton/.partials/components/component.interface';
import classNames from 'classnames';
import React from 'react';

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
