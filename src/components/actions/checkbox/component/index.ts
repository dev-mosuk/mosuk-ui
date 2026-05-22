import { Checkbox as Component } from './.partials/components/component';
import { CheckboxProps } from './.partials/components/component.interface';
import { CheckboxIndicator } from './.partials/components/indicator/component';
import { CheckboxIndicatorProps } from './.partials/components/indicator/component.interface';

export const Checkbox = Object.assign(Component, {
  Indicator: CheckboxIndicator,
});

export namespace Checkbox {
  export type Props = CheckboxProps;

  export namespace Indicator {
    export type Props = CheckboxIndicatorProps;
  }
}
