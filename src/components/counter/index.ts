import { Counter as Component } from '@/components/counter/.partials/components/component';
import type { CounterProps } from '@/components/counter/.partials/components/component.interface';
import { CounterAnimation } from '@/components/counter/.partials/enums/component.enums';

export const Counter = Object.assign(Component, {
  ENUMS: {
    Animation: CounterAnimation,
  },
});

export namespace Counter {
  export type Props<C = 'span'> = CounterProps<C>;
}
