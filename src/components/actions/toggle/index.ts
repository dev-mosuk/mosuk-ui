import { ToggleButton } from '@/components/actions/toggle/.partials/components/button/component';
import { ToggleButtonProps } from '@/components/actions/toggle/.partials/components/button/component.interface';
import { Toggle as Component } from '@/components/actions/toggle/.partials/components/component';
import type { ToggleProps } from '@/components/actions/toggle/.partials/components/component.interface';
import { ToggleIndicator } from '@/components/actions/toggle/.partials/components/indicator/component';
import { ToggleIndicatorProps } from '@/components/actions/toggle/.partials/components/indicator/component.interface';

export const Toggle = Object.assign(Component, {
  Button: ToggleButton,
  Indicator: ToggleIndicator,
});

export namespace Toggle {
  export type Props = ToggleProps;

  export namespace Button {
    export type Props = ToggleButtonProps;
  }

  export namespace Indicator {
    export type Props = ToggleIndicatorProps;
  }
}

import { ToggleButtonSkeleton } from '@/components/actions/toggle/.partials/skeleton/components/button/component';
import { ToggleButtonSkeletonProps } from '@/components/actions/toggle/.partials/skeleton/components/button/component.props';
import { ToggleSkeleton as SkeletonComponent } from '@/components/actions/toggle/.partials/skeleton/components/component';
import type { ToggleSkeletonProps } from '@/components/actions/toggle/.partials/skeleton/components/component.props';

export const ToggleSkeleton = Object.assign(SkeletonComponent, {
  Button: ToggleButtonSkeleton,
});

export namespace ToggleSkeleton {
  export type Props = ToggleSkeletonProps;

  export namespace Button {
    export type Props = ToggleButtonSkeletonProps;
  }
}
