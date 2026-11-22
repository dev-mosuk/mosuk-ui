import { ProgressBar as Component } from '@/components/progress-bar/.partials/components/component';
import { ProgressBarProps } from '@/components/progress-bar/.partials/components/component.interface';
import { ProgressBarIndicator } from '@/components/progress-bar/.partials/components/indicator/component';
import { ProgressBarIndicatorProps } from '@/components/progress-bar/.partials/components/indicator/component.interface';
import { ProgressBarColor } from '@/components/progress-bar/.partials/enums/component.enums';

export const ProgressBar = Object.assign(Component, {
  Indicator: ProgressBarIndicator,
  ENUMS: {
    Color: ProgressBarColor,
  },
});

export namespace ProgressBar {
  export type Props = ProgressBarProps;

  export namespace Indicator {
    export type Props = ProgressBarIndicatorProps;
  }
}
