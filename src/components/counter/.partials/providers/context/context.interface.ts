import type { CounterAnimation } from '@/components/counter/.partials/enums/component.enums';

export interface CounterContextProps {
  value: number;
  animation: CounterAnimation | `${CounterAnimation}`;
  maximumFractionDigits: number;
  formatValue: (value: number) => string;
}
