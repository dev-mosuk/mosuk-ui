import { OTPFieldPreview as OTPField } from '@base-ui/react/otp-field';
import classNames from 'classnames';
import React from 'react';
import styles from '../../styles/component.module.css';
import { OTPInputProps } from './component.interface';

export function OTPInput({ ...rest }: OTPInputProps) {
  return (
    <OTPField.Input
      {...rest}
      className={classNames('mosuk-otp-input', styles.input, rest?.className)}
    />
  );
}
