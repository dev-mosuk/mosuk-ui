import { Checkbox as Component } from '@/components/actions/checkbox/.partials/components/component';
import { CheckboxProps } from '@/components/actions/checkbox/.partials/components/component.interface';
import { CheckboxIndicator } from '@/components/actions/checkbox/.partials/components/indicator/component';
import { CheckboxIndicatorProps } from '@/components/actions/checkbox/.partials/components/indicator/component.interface';

export const Checkbox = Object.assign(Component, {
  Indicator: CheckboxIndicator,
});

export namespace Checkbox {
  export type Props = CheckboxProps;

  export namespace Indicator {
    export type Props = CheckboxIndicatorProps;
  }
}

import { CheckboxSkeleton as SkeletonComponent } from '@/components/actions/checkbox/.partials/skeleton/components/component';
import type { CheckboxSkeletonProps } from '@/components/actions/checkbox/.partials/skeleton/components/component.interface';
import { CheckboxIndicatorSkeleton } from '@/components/actions/checkbox/.partials/skeleton/components/indicator/component';
import { CheckboxIndicatorSkeletonProps } from '@/components/actions/checkbox/.partials/skeleton/components/indicator/component.interface';

export const CheckboxSkeleton = Object.assign(SkeletonComponent, {
  Indicator: CheckboxIndicatorSkeleton,
});

export namespace CheckboxSkeleton {
  export type Props = CheckboxSkeletonProps;

  export namespace Indicator {
    export type Props = CheckboxIndicatorSkeletonProps;
  }
}
