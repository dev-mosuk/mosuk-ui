import { Counter as BaseCounter } from '@/components/texts/counter/component/component';
import type { CounterProps } from '@/components/texts/counter/component/component.interface';

export const Counter = Object.assign(BaseCounter, {});

export namespace Counter {
  export type Props = CounterProps;
}
