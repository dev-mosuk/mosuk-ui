import type { CounterAnimation } from '@/components/counter/.partials/enums/component.enums';
import type { ReactNode } from 'react';

export interface CounterProviderProps {
  value: number;
  animation: CounterAnimation | `${CounterAnimation}`;
  maximumFractionDigits: number;
  children?: ReactNode;
}
