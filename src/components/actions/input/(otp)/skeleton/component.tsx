import classNames from 'classnames';
import React, {ElementType} from 'react';
import {InputOtpSkeletonProps} from './component.interface';
import styles from './component.module.css';

export function InputOtpSkeleton<C extends ElementType = 'div'>({
  as,
  slots = 6,
  children,
  ...rest
}: InputOtpSkeletonProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-input-otp-skeleton', styles.otp, rest?.className)}
    >
      {children}
    </Component>
  );
}
