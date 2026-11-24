import { Tooltip as BaseUITooltip } from '@base-ui/react/tooltip';
import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  ReactNode,
  Ref,
} from 'react';

type TooltipOpenBaseUIProps = Pick<
  BaseUITooltip.Trigger.Props,
  'delay' | 'closeDelay' | 'handle' | 'payload' | 'id'
>;

export type TooltipOpenProps<C extends ElementType = 'button'> = {
  as?: C;
  ref?: Ref<any>;
  isDisabled?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & TooltipOpenBaseUIProps &
  Omit<
    ComponentPropsWithoutRef<C>,
    'as' | 'ref' | 'disabled' | 'color' | 'className' | 'style' | 'children'
  >;
