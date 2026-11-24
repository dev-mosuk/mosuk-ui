import type { Popover } from '@/components/popover';
import type { ReactNode } from 'react';

export type MultiSelectPopoverProps = Omit<
  Popover.Overview.Props,
  'children'
> & {
  children?: ReactNode;
  contentClassName?: string;
};
