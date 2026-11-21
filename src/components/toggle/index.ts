import { ToggleButton } from '@/components/toggle/.partials/components/button/component';
import { ToggleButtonProps } from '@/components/toggle/.partials/components/button/component.interface';
import { Toggle as Component } from '@/components/toggle/.partials/components/component';
import type { ToggleProps } from '@/components/toggle/.partials/components/component.interface';
import { ToggleIndicator } from '@/components/toggle/.partials/components/indicator/component';
import { ToggleIndicatorProps } from '@/components/toggle/.partials/components/indicator/component.interface';

export const Toggle = Object.assign(Component, {
  Button: ToggleButton,
  Indicator: ToggleIndicator,
});

export namespace Toggle {
  export type Props = ToggleProps;

  export namespace Button {
    export type Props<C = 'button'> = ToggleButtonProps<C>;
  }

  export namespace Indicator {
    export type Props = ToggleIndicatorProps;
  }
}
