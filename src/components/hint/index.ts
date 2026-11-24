import { Hint as Component } from '@/components/hint/.partials/components/component';
import type { HintProps } from '@/components/hint/.partials/components/component.interface';
import {
  HintAnimation,
  HintColor,
  HintPress,
} from '@/components/hint/.partials/enums/component.enums';
import type { ElementType } from 'react';

export const Hint = Object.assign(Component, {
  ENUMS: {
    Color: HintColor,
    Animation: HintAnimation,
    Press: HintPress,
  },
});

export namespace Hint {
  export type Props<C extends ElementType = 'p'> = HintProps<C>;
}
