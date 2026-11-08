import { Tooltip } from '@base-ui/react/tooltip';
import { ReactNode } from 'react';

export type TooltipProps = Omit<Tooltip.Root.Props, 'children'> & {
  children: ReactNode;
  /** Delay before opening on hover, in milliseconds. @default 0 */
  delay?: number;
  /** Delay before closing, in milliseconds. */
  closeDelay?: number;
};
