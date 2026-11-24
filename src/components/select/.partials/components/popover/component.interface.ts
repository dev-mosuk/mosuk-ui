import type { Popover } from '@/components/popover';
import type { ReactNode } from 'react';

export type SelectPopoverProps = Omit<Popover.Overview.Props, 'children'> & {
  children?: ReactNode;
  contentClassName?: string;
  empty?: ReactNode;
};
