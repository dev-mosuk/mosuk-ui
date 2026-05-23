import { OTP as Component } from '@/components/actions/otp/component/.partials/components/component';
import { OTPProps } from '@/components/actions/otp/component/.partials/components/component.interface';
import { OTPInput } from '@/components/actions/otp/component/.partials/components/input/component';
import { OTPInputProps } from '@/components/actions/otp/component/.partials/components/input/component.interface';

export const OTP = Object.assign(Component, {
  Input: OTPInput,
});

export namespace OTP {
  export type Props = OTPProps;

  export namespace Input {
    export type Props = OTPInputProps;
  }
}
