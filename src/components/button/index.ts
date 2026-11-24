import { Button as Component } from '@/components/button/.partials/components/component';
import type { ButtonProps } from '@/components/button/.partials/components/component.interface';
import {
  ButtonAnimation,
  ButtonFormat,
  ButtonPress,
  ButtonVariant,
} from '@/components/button/.partials/enums/component.enums';

export const Button = Object.assign(Component, {
  ENUMS: {
    Variant: ButtonVariant,
    Format: ButtonFormat,
    Press: ButtonPress,
    Animation: ButtonAnimation,
  },
});

export namespace Button {
  export type Props<C = 'button'> = ButtonProps<C>;
}
