import { Tooltip as BaseUITooltip } from '@base-ui/react/tooltip';
import type { ReactNode } from 'react';

type TooltipOwnProps = {
  isOpen?: boolean;
  isDisabled?: boolean;
  handle?: BaseUITooltip.Root.Props['handle'];
  children?: ReactNode;
};

export type TooltipProps = TooltipOwnProps &
  Omit<BaseUITooltip.Root.Props, 'children' | 'open' | 'disabled' | 'handle'>;