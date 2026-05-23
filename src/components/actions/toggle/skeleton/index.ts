import { ToggleButtonSkeleton } from '@/components/actions/toggle/skeleton/.partials/components/button/component';
import { ToggleButtonSkeletonProps } from '@/components/actions/toggle/skeleton/.partials/components/button/component.props';
import { ToggleSkeleton as Component } from '@/components/actions/toggle/skeleton/.partials/components/component';
import type { ToggleSkeletonProps } from '@/components/actions/toggle/skeleton/.partials/components/component.props';

export const ToggleSkeleton = Object.assign(Component, {
  Button: ToggleButtonSkeleton,
});

export namespace ToggleSkeleton {
  export type Props = ToggleSkeletonProps;

  export namespace Button {
    export type Props = ToggleButtonSkeletonProps;
  }
}
