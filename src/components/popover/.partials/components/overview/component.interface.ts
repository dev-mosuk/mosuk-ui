import { Popover as BaseUIPopover } from '@base-ui/react/popover';
import type { CSSProperties, ReactNode, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

type PopoverOverviewBaseUIProps = Omit<
  BaseUIPopover.Positioner.Props,
  'render' | 'className' | 'style' | 'children' | 'ref'
>;

export type PopoverOverviewProps<C = 'div'> = {
  as?: C;
  ref?: Ref<any>;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & PopoverOverviewBaseUIProps &
  Omit<
    PropsOf<C>,
    | 'as'
    | 'ref'
    | 'color'
    | 'className'
    | 'style'
    | 'children'
    | keyof PopoverOverviewBaseUIProps
  >;
