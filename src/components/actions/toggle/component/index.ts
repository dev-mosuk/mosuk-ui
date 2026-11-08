import { ToggleButton } from '@/components/actions/toggle/component/.partials/components/button/component';
import { ToggleButtonProps } from '@/components/actions/toggle/component/.partials/components/button/component.interface';
import { Toggle as Component } from '@/components/actions/toggle/component/.partials/components/component';
import type { ToggleProps } from '@/components/actions/toggle/component/.partials/components/component.interface';
import { ToggleIndicator } from '@/components/actions/toggle/component/.partials/components/indicator/component';
import { ToggleIndicatorProps } from '@/components/actions/toggle/component/.partials/components/indicator/component.interface';

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
