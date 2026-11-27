import { Card as Component } from '@/components/card/.partials/components/component';
import type { CardProps } from '@/components/card/.partials/components/component.interface';
import {
  CardAnimation,
  CardPress,
  CardVariant,
} from '@/components/card/.partials/enums/component.enums';

export const Card = Object.assign(Component, {
  ENUMS: {
    Variant: CardVariant,
    Animation: CardAnimation,
    Press: CardPress,
  },
});

export namespace Card {
  export type Props<C = 'div'> = CardProps<C>;
}
