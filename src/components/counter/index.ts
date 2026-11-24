import { Counter as Component } from '@/components/counter/.partials/components/component';
import type { CounterProps } from '@/components/counter/.partials/components/component.interface';
import { CounterAnimation } from '@/components/counter/.partials/enums/component.enums';
import type { ElementType } from 'react';

export const Counter = Object.assign(Component, {
  ENUMS: {
    Animation: CounterAnimation,
  },
});

export namespace Counter {
  export type Props<C extends ElementType = 'span'> = CounterProps<C>;
}
