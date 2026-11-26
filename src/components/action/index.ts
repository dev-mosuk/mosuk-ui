import { Action as Component } from '@/components/action/.partials/components/component';
import type { ActionProps } from '@/components/action/.partials/components/component.interface';
import {
  ActionAnimation,
  ActionPress,
} from '@/components/action/.partials/enums/component.enums';
import type { ElementType } from 'react';

export const Action = Object.assign(Component, {
  ENUMS: {
    Animation: ActionAnimation,
    Press: ActionPress,
  },
});

export namespace Action {
  export type Props<C extends ElementType = 'div'> = ActionProps<C>;
}
