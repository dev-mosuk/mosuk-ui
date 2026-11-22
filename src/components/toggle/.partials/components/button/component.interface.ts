import type { Button } from '@/components/button';

export type ToggleButtonProps<C = 'button'> = Button.Props<C> & {
  value: any;
};
