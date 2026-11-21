import { Checkbox as Component } from '@/components/checkbox/.partials/components/component';
import { CheckboxProps } from '@/components/checkbox/.partials/components/component.interface';
import { CheckboxIndicator } from '@/components/checkbox/.partials/components/indicator/component';
import { CheckboxIndicatorProps } from '@/components/checkbox/.partials/components/indicator/component.interface';
import { CheckboxVariant } from '@/components/checkbox/.partials/enums/component.enums';

export const Checkbox = Object.assign(Component, {
  Indicator: CheckboxIndicator,
  ENUMS: {
    Variant: CheckboxVariant,
  },
});

export namespace Checkbox {
  export type Props = CheckboxProps;

  export namespace Indicator {
    export type Props = CheckboxIndicatorProps;
  }
}
