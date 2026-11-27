import { Hint as Component } from '@/components/hint/.partials/components/component';
import type { HintProps } from '@/components/hint/.partials/components/component.interface';
import {
  HintAnimation,
  HintPress,
  HintVariant,
} from '@/components/hint/.partials/enums/component.enums';

export const Hint = Object.assign(Component, {
  ENUMS: {
    Variant: HintVariant,
    Animation: HintAnimation,
    Press: HintPress,
  },
});

export namespace Hint {
  export type Props<C = 'p'> = HintProps<C>;
}
