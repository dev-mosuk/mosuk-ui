import { ToggleButtonSkeleton } from './button/component';
import { ToggleButtonSkeletonProps } from './button/component.props';
import { ToggleSkeleton as Component } from './component';
import type { ToggleSkeletonProps } from './component.props';

export const ToggleSkeleton = Object.assign(Component, {
  Button: ToggleButtonSkeleton,
});

export namespace ToggleSkeleton {
  export type Props = ToggleSkeletonProps;

  export namespace Button {
    export type Props = ToggleButtonSkeletonProps;
  }
}
