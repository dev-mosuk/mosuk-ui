import { OTPInputProps } from '@/components/otp/.partials/components/input/component.interface';
import styles from '@/components/otp/.partials/styles/component.module.css';
import { OTPFieldPreview as OTPField } from '@base-ui/react/otp-field';
import classNames from 'classnames';
import React from 'react';

export function OTPInput({
  isDisabled,
  isReadOnly,
  isRequired,
  className,
  ...rest
}: OTPInputProps) {
  return (
    <OTPField.Input
      {...rest}
      disabled={isDisabled}
      readOnly={isReadOnly}
      required={isRequired}
      className={classNames('mosuk-otp-input', styles.input, className)}
    />
  );
}
