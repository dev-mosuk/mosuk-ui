import { InputOtp as Component } from '@/components/input-otp/.partials/components/component';
import type { InputOtpProps } from '@/components/input-otp/.partials/components/component.interface';
import { InputOtpInput } from '@/components/input-otp/.partials/components/input/component';
import type { InputOtpInputProps } from '@/components/input-otp/.partials/components/input/component.interface';

export const InputOtp = Object.assign(Component, {
  Input: InputOtpInput,
});

export namespace InputOtp {
  export type Props = InputOtpProps;

  export namespace Input {
    export type Props = InputOtpInputProps;
  }
}
