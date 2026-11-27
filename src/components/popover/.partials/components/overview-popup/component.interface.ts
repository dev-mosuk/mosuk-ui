import type { PopoverVariant } from '@/components/popover/.partials/enums/component.enums';
import { Popover as BaseUIPopover } from '@base-ui/react/popover';
import type { CSSProperties, ReactNode, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

type PopoverOverviewPopupBaseUIProps = Omit<
  BaseUIPopover.Popup.Props,
  'render' | 'color' | 'className' | 'style' | 'children' | 'ref'
>;

export type PopoverOverviewPopupProps<C = 'div'> = {
  as?: C;
  ref?: Ref<any>;
  variant?: PopoverVariant | `${PopoverVariant}`;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & PopoverOverviewPopupBaseUIProps &
  Omit<
    PropsOf<C>,
    | 'as'
    | 'ref'
    | 'color'
    | 'className'
    | 'style'
    | 'children'
    | keyof PopoverOverviewPopupBaseUIProps
  >;
