import { OTPSkeleton as Component } from '@/components/actions/otp/skeleton/.partials/components/component';
import { OTPSkeletonProps as ComponentProps } from '@/components/actions/otp/skeleton/.partials/components/component.interface';
import { OTPInputSkeleton } from '@/components/actions/otp/skeleton/.partials/components/input/component';
import { OTPInputSkeletonProps } from '@/components/actions/otp/skeleton/.partials/components/input/component.interface';

export const OTPSkeleton = Object.assign(Component, {
  Input: OTPInputSkeleton,
});

export namespace OTPSkeleton {
  export type Props = ComponentProps;

  export namespace Input {
    export type Props = OTPInputSkeletonProps;
  }
}
