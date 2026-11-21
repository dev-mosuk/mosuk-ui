import { Button as Component } from '@/components/button/.partials/components/component';
import type { ButtonProps } from '@/components/button/.partials/components/component.interface';
import {
  ButtonPress,
  ButtonVariant,
  ButtonWidth,
} from '@/components/button/.partials/enums/component.enums';

export const Button = Object.assign(Component, {
  ENUMS: {
    Variant: ButtonVariant,
    Width: ButtonWidth,
    Press: ButtonPress,
  },
});

export namespace Button {
  export type Props<C = 'button'> = ButtonProps<C>;
}
