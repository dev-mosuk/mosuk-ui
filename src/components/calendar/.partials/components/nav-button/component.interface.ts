import type { Button } from '@/components/button';
import type { ButtonProps as RacButtonProps } from 'react-aria-components/Button';

export type CalendarNavButtonProps = Omit<RacButtonProps, 'slot' | 'render'> & {
  slot?: 'previous' | 'next';
  size?: Button.Props['size'];
  variant?: Button.Props['variant'];
};
