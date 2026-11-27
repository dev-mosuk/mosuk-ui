import type { InputOtpProps } from '@/components/input-otp/.partials/components/component.interface';
import { InputOtpInput } from '@/components/input-otp/.partials/components/input/component';
import {
  INPUT_OTP_DEFAULT_SIZE,
  INPUT_OTP_DEFAULT_VARIANT,
} from '@/components/input-otp/.partials/constants/component.constants';
import styles from '@/components/input-otp/.partials/styles/component.module.css';
import { OTPField } from '@base-ui/react/otp-field';
import classNames from 'classnames';
import React, {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  useId,
} from 'react';

type InheritProps = {
  size?: InputOtpProps['size'];
  variant?: InputOtpProps['variant'];
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
};

export function InputOtp({
  size = INPUT_OTP_DEFAULT_SIZE,
  variant = INPUT_OTP_DEFAULT_VARIANT,
  isDisabled,
  isReadOnly,
  isRequired,
  children,
  className,
  ...rest
}: InputOtpProps) {
  const id = rest?.id ?? useId();

  const wrappedChildren = Children.map(children, (child) => {
    if (!isValidElement(child) || child.type !== InputOtpInput) {
      return child;
    }

    const props = child.props as InheritProps;

    return cloneElement(child as ReactElement<InheritProps>, {
      size,
      ...(props.variant == null ? { variant } : null),
      ...(props.isDisabled == null ? { isDisabled } : null),
      ...(props.isReadOnly == null ? { isReadOnly } : null),
      ...(props.isRequired == null ? { isRequired } : null),
    });
  });

  return (
    <OTPField.Root
      {...rest}
      id={id}
      disabled={isDisabled}
      readOnly={isReadOnly}
      required={isRequired}
      className={classNames(
        'mosuk-input-otp',
        'group/input-otp',
        styles.inputOtp,
        className,
      )}
    >
      {wrappedChildren}
    </OTPField.Root>
  );
}
