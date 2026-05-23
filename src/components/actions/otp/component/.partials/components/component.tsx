import { OTPProps } from '@/components/actions/otp/component/.partials/components/component.interface';
import styles from '@/components/actions/otp/component/.partials/styles/component.module.css';
import { OTPFieldPreview as OTPField } from '@base-ui/react/otp-field';
import classNames from 'classnames';
import React, { useId } from 'react';

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
