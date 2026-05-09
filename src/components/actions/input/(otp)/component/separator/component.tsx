import classNames from 'classnames';
import React from 'react';
import {OTPFieldPreview as OTPField} from '@base-ui/react/otp-field';
import styles from '../component.module.css';
import {SeparatorProps} from "@base-ui/react";

export interface InputOtpSeparatorProps extends SeparatorProps {
  index?: number;
  length?: number;
}

export function InputOtpSeparator({index, length, className, ...rest}: InputOtpSeparatorProps) {
  return (
    <OTPField.Separator
      className={classNames(styles.separator, 'mosuk-input-otp-separator', className)}
      aria-label={`Character ${index ?? 1} of ${length}`}
      {...rest}
    />
  );
}
