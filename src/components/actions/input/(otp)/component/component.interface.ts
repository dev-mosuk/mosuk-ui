import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';
import { OTPFieldPreview as BaseOTPField } from '@base-ui/react/otp-field';

export type InputOtpProps<C extends ElementType = 'div'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'> &
  Omit<BaseOTPField.Root.Props, 'className' | 'style'>;
