import { Card as Component } from '@/components/card/.partials/components/component';
import type { CardProps } from '@/components/card/.partials/components/component.interface';
import {
  CardAnimation,
  CardPress,
  CardVariant,
} from '@/components/card/.partials/enums/component.enums';
import type { ElementType } from 'react';

export const Card = Object.assign(Component, {
  ENUMS: {
    Variant: CardVariant,
    Animation: CardAnimation,
    Press: CardPress,
  },
});

export namespace Card {
  export type Props<C extends ElementType = 'div'> = CardProps<C>;
}
