import styles from '@/components/actions/otp/component/.partials/styles/component.module.css';
import { OTPInputSkeletonProps } from '@/components/actions/otp/skeleton/.partials/components/input/component.interface';
import { Skeleton } from '@/components/core/skeleton/component/component';
import classNames from 'classnames';
import React from 'react';

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
