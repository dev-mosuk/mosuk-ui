import { Popover as BaseUIPopover } from '@base-ui/react/popover';
import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  ReactNode,
  Ref,
} from 'react';

type PopoverOverviewBaseUIProps = Omit<
  BaseUIPopover.Positioner.Props,
  'render' | 'className' | 'style' | 'children' | 'ref'
>;

export type PopoverOverviewProps<C extends ElementType = 'div'> = {
  as?: C;
  ref?: Ref<any>;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & PopoverOverviewBaseUIProps &
  Omit<
    ComponentPropsWithoutRef<C>,
    | 'as'
    | 'ref'
    | 'color'
    | 'className'
    | 'style'
    | 'children'
    | keyof PopoverOverviewBaseUIProps
  >;
