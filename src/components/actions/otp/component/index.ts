import { OTP as Component } from './.partials/components/component';
import { OTPProps } from './.partials/components/component.interface';
import { OTPInput } from './.partials/components/input/component';
import { OTPInputProps } from './.partials/components/input/component.interface';

export const OTP = Object.assign(Component, {
  Input: OTPInput,
});

export namespace OTP {
  export type Props = OTPProps;

  export namespace Input {
    export type Props = OTPInputProps;
  }
}
