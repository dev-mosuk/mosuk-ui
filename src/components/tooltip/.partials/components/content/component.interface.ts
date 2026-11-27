import type { TooltipVariant } from '@/components/tooltip/.partials/enums/component.enums';
import { Tooltip as BaseUITooltip } from '@base-ui/react/tooltip';
import type { CSSProperties, ReactNode, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

type TooltipContentPositionerProps = Omit<
  BaseUITooltip.Positioner.Props,
  'className' | 'style' | 'render' | 'children' | 'ref'
>;

type TooltipContentPortalProps = Pick<
  BaseUITooltip.Portal.Props,
  'container' | 'keepMounted'
>;

export type TooltipContentProps<C = 'div'> = {
  as?: C;
  ref?: Ref<any>;
  variant?: TooltipVariant | `${TooltipVariant}`;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & TooltipContentPortalProps &
  TooltipContentPositionerProps &
  Omit<
    PropsOf<C>,
    | 'as'
    | 'ref'
    | 'color'
    | 'className'
    | 'style'
    | 'children'
    | keyof TooltipContentPositionerProps
    | keyof TooltipContentPortalProps
  >;
