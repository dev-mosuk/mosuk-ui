import { Input as Component } from '@/components/input/.partials/components/component';
import type { InputProps } from '@/components/input/.partials/components/component.interface';
import {
  InputAnimation,
  InputPress,
  InputVariant,
} from '@/components/input/.partials/enums/component.enums';
import type { ElementType } from 'react';

export const Input = Object.assign(Component, {
  ENUMS: {
    Variant: InputVariant,
    Press: InputPress,
    Animation: InputAnimation,
  },
});

export namespace Input {
  export type Props<C extends ElementType = 'input'> = InputProps<C>;
}
