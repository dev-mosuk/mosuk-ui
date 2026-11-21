import { Counter as BaseCounter } from '@/components/counter/component';
import type { CounterProps } from '@/components/counter/component.interface';

export const Counter = Object.assign(BaseCounter, {});

export namespace Counter {
  export type Props = CounterProps;
}
