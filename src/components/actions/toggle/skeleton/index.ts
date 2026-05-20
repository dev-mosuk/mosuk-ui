import { ToggleButtonSkeleton } from './.partials/components/button/component';
import { ToggleButtonSkeletonProps } from './.partials/components/button/component.props';
import { ToggleSkeleton as Component } from './.partials/components/component';
import type { ToggleSkeletonProps } from './.partials/components/component.props';

export const ToggleSkeleton = Object.assign(Component, {
  Button: ToggleButtonSkeleton,
});

export namespace ToggleSkeleton {
  export type Props = ToggleSkeletonProps;

  export namespace Button {
    export type Props = ToggleButtonSkeletonProps;
  }
}
