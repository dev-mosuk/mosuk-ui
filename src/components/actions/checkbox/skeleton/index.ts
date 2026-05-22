import { CheckboxSkeleton as Component } from './.partials/components/component';
import type { CheckboxSkeletonProps } from './.partials/components/component.interface';
import { CheckboxIndicatorSkeleton } from './.partials/components/indicator/component';
import { CheckboxIndicatorSkeletonProps } from './.partials/components/indicator/component.interface';

export const CheckboxSkeleton = Object.assign(Component, {
  Indicator: CheckboxIndicatorSkeleton,
});

export namespace CheckboxSkeleton {
  export type Props = CheckboxSkeletonProps;

  export namespace Indicator {
    export type Props = CheckboxIndicatorSkeletonProps;
  }
}
