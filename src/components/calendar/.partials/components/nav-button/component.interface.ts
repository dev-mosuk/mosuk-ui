import type { ButtonProps } from 'react-aria-components/Button';

export interface CalendarNavButtonProps extends Omit<ButtonProps, 'slot'> {
  slot?: 'previous' | 'next';
}
