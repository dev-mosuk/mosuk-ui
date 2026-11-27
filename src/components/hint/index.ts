import { Hint as Component } from '@/components/hint/.partials/components/component';
import type { HintProps } from '@/components/hint/.partials/components/component.interface';
import {
  HintAnimation,
  HintColor,
  HintPress,
} from '@/components/hint/.partials/enums/component.enums';

export const Hint = Object.assign(Component, {
  ENUMS: {
    Color: HintColor,
    Animation: HintAnimation,
    Press: HintPress,
  },
});

export namespace Hint {
  export type Props<C = 'p'> = HintProps<C>;
}
