import { Tooltip as BaseUITooltip } from '@base-ui/react/tooltip';
import type { CSSProperties, ReactNode, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

type TooltipArrowBaseUIProps = Omit<
  BaseUITooltip.Arrow.Props,
  'render' | 'className' | 'style' | 'children' | 'ref'
>;

export type TooltipArrowProps<C = 'div'> = {
  as?: C;
  ref?: Ref<any>;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & TooltipArrowBaseUIProps &
  Omit<
    PropsOf<C>,
    | 'as'
    | 'ref'
    | 'className'
    | 'style'
    | 'children'
    | keyof TooltipArrowBaseUIProps
  >;
