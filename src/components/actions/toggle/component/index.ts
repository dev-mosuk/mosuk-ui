import { ToggleButton } from './button/component';
import { ToggleButtonProps } from './button/component.props';
import { Toggle as Component } from './component';
import type { ToggleProps } from './component.props';
import { ToggleIndicator } from './indicator/component';
import { ToggleIndicatorProps } from './indicator/component.props';

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
