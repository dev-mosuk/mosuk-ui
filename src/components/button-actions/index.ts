import { ButtonActions as Component } from '@/components/button-actions/.partials/components/component';
import type { ButtonActionsProps as ComponentProps } from '@/components/button-actions/.partials/components/component.interface';
import {
  ButtonActionsAlign,
  ButtonActionsOrientation,
} from '@/components/button-actions/.partials/enums/component.enums';

export const ButtonActions = Object.assign(Component, {
  ENUMS: {
    Orientation: ButtonActionsOrientation,
    Align: ButtonActionsAlign,
  },
});

export namespace ButtonActions {
  export type Props<C = 'nav'> = ComponentProps<C>;
}
