import { OTPSkeleton as Component } from './.partials/components/component';
import { OTPSkeletonProps as ComponentProps } from './.partials/components/component.interface';
import { OTPInputSkeleton } from './.partials/components/input/component';
import { OTPInputSkeletonProps } from './.partials/components/input/component.interface';

export const OTPSkeleton = Object.assign(Component, {
  Input: OTPInputSkeleton,
});

export namespace OTPSkeleton {
  export type Props = ComponentProps;

  export namespace Input {
    export type Props = OTPInputSkeletonProps;
  }
}
