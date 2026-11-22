import { ProgressCircle as Component } from '@/components/progress-circle/.partials/components/component';
import { ProgressCircleProps } from '@/components/progress-circle/.partials/components/component.interface';
import { ProgressCircleIndicator } from '@/components/progress-circle/.partials/components/indicator/component';
import { ProgressCircleIndicatorProps } from '@/components/progress-circle/.partials/components/indicator/component.interface';
import { ProgressCircleColor } from '@/components/progress-circle/.partials/enums/component.enums';

export const ProgressCircle = Object.assign(Component, {
  Indicator: ProgressCircleIndicator,
  ENUMS: {
    Color: ProgressCircleColor,
  },
});

export namespace ProgressCircle {
  export type Props = ProgressCircleProps;

  export namespace Indicator {
    export type Props = ProgressCircleIndicatorProps;
  }
}
