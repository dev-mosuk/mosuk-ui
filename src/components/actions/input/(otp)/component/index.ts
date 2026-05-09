import { InputOtp as Component } from './component';
import { InputOtpProps as ComponentProps } from './component.interface';
import { InputOtpField, InputOtpFieldProps } from './field/component';
import { InputOtpSeparator, InputOtpSeparatorProps } from './separator/component';

export const InputOtp = Object.assign(Component, {
  Field: InputOtpField,
  Separator: InputOtpSeparator,
});

export namespace InputOtp {
  export type Props = ComponentProps;
  export type FieldProps = InputOtpFieldProps;
  export type SeparatorProps = InputOtpSeparatorProps;
}
