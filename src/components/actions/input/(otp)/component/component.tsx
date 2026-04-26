import classNames from 'classnames';
import React, {ElementType, useId} from 'react';
import {OTPFieldPreview as OTPField} from '@base-ui/react/otp-field';
import {InputOtpProps} from './component.interface';
import styles from './component.module.css';

export function InputOtp<C extends ElementType = 'div'>({
                                                          as,
                                                          children,
                                                          length,
                                                          ...rest
                                                        }: InputOtpProps<C>) {
  const Component = (as || OTPField.Root) as ElementType;
  const id = rest?.id ?? useId();

  return (
    <Component
      {...rest}
      id={id}
      length={length}
      className={classNames(styles.root, 'mosuk-input-otp', rest?.className)}
    >
      {children}
    </Component>
  );
}
