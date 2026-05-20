import { ToggleButton } from './.partials/components/button/component';
import { ToggleButtonProps } from './.partials/components/button/component.props';
import { Toggle as Component } from './.partials/components/component';
import type { ToggleProps } from './.partials/components/component.props';
import { ToggleIndicator } from './.partials/components/indicator/component';
import { ToggleIndicatorProps } from './.partials/components/indicator/component.props';

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
