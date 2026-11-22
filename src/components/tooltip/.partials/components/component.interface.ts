import { Tooltip } from '@base-ui/react/tooltip';
import { ReactNode } from 'react';

export type TooltipProps = Omit<
  Tooltip.Root.Props,
  'children' | 'open' | 'disabled'
> & {
  children: ReactNode;
  isOpen?: boolean;
  isDisabled?: boolean;
  /**
   * Delay before opening on hover, in milliseconds.
   * Hover/focus open on pointer-fine devices; touch opens and closes on tap.
   * @default 0
   */
  delay?: number;
  /** Delay before closing, in milliseconds. */
  closeDelay?: number;
};
