import type { Button } from '@/components/button';

export type TabsHeaderItemProps<C = 'button'> = Button.Props<C> & {
  value: any;
};
