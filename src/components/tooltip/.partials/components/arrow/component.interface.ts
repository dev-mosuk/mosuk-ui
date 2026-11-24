import { Tooltip as BaseUITooltip } from '@base-ui/react/tooltip';
import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  ReactNode,
  Ref,
} from 'react';

type TooltipArrowBaseUIProps = Omit<
  BaseUITooltip.Arrow.Props,
  'render' | 'className' | 'style' | 'children' | 'ref'
>;

export type TooltipArrowProps<C extends ElementType = 'div'> = {
  as?: C;
  ref?: Ref<any>;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & TooltipArrowBaseUIProps &
  Omit<
    ComponentPropsWithoutRef<C>,
    | 'as'
    | 'ref'
    | 'className'
    | 'style'
    | 'children'
    | keyof TooltipArrowBaseUIProps
  >;
