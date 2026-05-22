import classNames from 'classnames';
import React from 'react';
import { Skeleton } from '../../../../../../display/skeleton/component/component';
import styles from '../../../../component/.partials/styles/component.module.css';
import { OTPInputSkeletonProps } from './component.interface';

export function OTPInputSkeleton({ ...rest }: OTPInputSkeletonProps) {
  return (
    <Skeleton
      {...rest}
      className={classNames(
        'mosuk-otp-input-skeleton',
        styles.input,
        rest?.className,
      )}
    />
  );
}
