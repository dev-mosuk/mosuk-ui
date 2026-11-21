import { OTPInputProps } from '@/components/otp/.partials/components/input/component.interface';
import styles from '@/components/otp/.partials/styles/component.module.css';
import { OTPFieldPreview as OTPField } from '@base-ui/react/otp-field';
import classNames from 'classnames';
import React from 'react';

export function OTPInput({ ...rest }: OTPInputProps) {
  return (
    <OTPField.Input
      {...rest}
      className={classNames('mosuk-otp-input', styles.input, rest?.className)}
    />
  );
}
