import { Checkbox as Component } from '@/components/actions/checkbox/component/.partials/components/component';
import { CheckboxProps } from '@/components/actions/checkbox/component/.partials/components/component.interface';
import { CheckboxIndicator } from '@/components/actions/checkbox/component/.partials/components/indicator/component';
import { CheckboxIndicatorProps } from '@/components/actions/checkbox/component/.partials/components/indicator/component.interface';

export const Checkbox = Object.assign(Component, {
  Indicator: CheckboxIndicator,
});

export namespace Checkbox {
  export type Props = CheckboxProps;

  export namespace Indicator {
    export type Props = CheckboxIndicatorProps;
  }
}
