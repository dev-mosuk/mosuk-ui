import { Counter as BaseCounter } from './component';
import type { CounterProps } from './component.interface';

export const Counter = Object.assign(BaseCounter, {});

export namespace Counter {
  export type Props = CounterProps;
}
