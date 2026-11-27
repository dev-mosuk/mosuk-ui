import { Tooltip as BaseUITooltip } from '@base-ui/react/tooltip';
import type { CSSProperties, ReactNode, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

type TooltipOpenBaseUIProps = Pick<
  BaseUITooltip.Trigger.Props,
  'delay' | 'closeDelay' | 'handle' | 'payload' | 'id'
>;

export type TooltipOpenProps<C = 'button'> = {
  as?: C;
  ref?: Ref<any>;
  isDisabled?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & TooltipOpenBaseUIProps &
  Omit<
    PropsOf<C>,
    'as' | 'ref' | 'disabled' | 'color' | 'className' | 'style' | 'children'
  >;
