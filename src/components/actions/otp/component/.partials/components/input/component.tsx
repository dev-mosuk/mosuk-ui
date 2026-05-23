import { OTPInputProps } from '@/components/actions/otp/component/.partials/components/input/component.interface';
import styles from '@/components/actions/otp/component/.partials/styles/component.module.css';
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
