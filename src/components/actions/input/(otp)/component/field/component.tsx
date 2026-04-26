import classNames from 'classnames';
import React from 'react';
import {OTPFieldPreview as OTPField} from '@base-ui/react/otp-field';
import styles from '../component.module.css';
import {OTPFieldInputProps} from "@base-ui/react";

export interface InputOtpFieldProps extends OTPFieldInputProps {
  index?: number;
  length?: number;
}

export function InputOtpField({index, length, className, ...rest}: InputOtpFieldProps) {
  return (
    <OTPField.Input
      className={classNames(styles.input, 'mosuk-input-otp-field', className)}
      aria-label={`Character ${index ?? 1} of ${length}`}
      {...rest}
    />
  );
}
