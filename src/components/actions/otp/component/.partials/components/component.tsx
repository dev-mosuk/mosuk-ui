import { OTPFieldPreview as OTPField } from '@base-ui/react/otp-field';
import classNames from 'classnames';
import React, { useId } from 'react';
import styles from '../styles/component.module.css';
import { OTPProps } from './component.interface';

export function OTP({ ...rest }: OTPProps) {
  const id = rest?.id ?? useId();

  return (
    <OTPField.Root
      {...rest}
      id={id}
      className={classNames('mosuk-otp', styles.root, rest?.className)}
    >
      {rest?.children}
    </OTPField.Root>
  );
}
