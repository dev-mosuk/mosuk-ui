import { Input } from '@/components/input';
import type { InputOtpInputProps } from '@/components/input-otp/.partials/components/input/component.interface';
import styles from '@/components/input-otp/.partials/styles/component.module.css';
import { OTPField } from '@base-ui/react/otp-field';
import classNames from 'classnames';
import React from 'react';

export function InputOtpInput({
  isDisabled,
  isReadOnly,
  isRequired,
  className,
  ...rest
}: InputOtpInputProps) {
  return (
    <OTPField.Input
      disabled={isDisabled}
      readOnly={isReadOnly}
      required={isRequired}
      render={
        <Input
          {...rest}
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          isRequired={isRequired}
          className={classNames(
            'mosuk-input-otp-input',
            styles.input,
            className,
          )}
        />
      }
    />
  );
}
