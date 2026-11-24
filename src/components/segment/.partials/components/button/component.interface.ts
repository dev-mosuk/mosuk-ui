import type { Button } from '@/components/button';

export type SegmentButtonProps<C = 'button'> = Button.Props<C> & {
  value: any;
};
