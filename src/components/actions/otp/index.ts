import { OTP as Component } from '@/components/actions/otp/.partials/components/component';
import { OTPProps } from '@/components/actions/otp/.partials/components/component.interface';
import { OTPInput } from '@/components/actions/otp/.partials/components/input/component';
import { OTPInputProps } from '@/components/actions/otp/.partials/components/input/component.interface';

export const OTP = Object.assign(Component, {
  Input: OTPInput,
});

export namespace OTP {
  export type Props = OTPProps;

  export namespace Input {
    export type Props = OTPInputProps;
  }
}

import { OTPSkeleton as SkeletonComponent } from '@/components/actions/otp/.partials/skeleton/components/component';
import { OTPSkeletonProps as SkeletonComponentProps } from '@/components/actions/otp/.partials/skeleton/components/component.interface';
import { OTPInputSkeleton } from '@/components/actions/otp/.partials/skeleton/components/input/component';
import { OTPInputSkeletonProps } from '@/components/actions/otp/.partials/skeleton/components/input/component.interface';

export const OTPSkeleton = Object.assign(SkeletonComponent, {
  Input: OTPInputSkeleton,
});

export namespace OTPSkeleton {
  export type Props = SkeletonComponentProps;

  export namespace Input {
    export type Props = OTPInputSkeletonProps;
  }
}
