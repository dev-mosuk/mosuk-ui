import type { PopoverVariant } from '@/components/popover/.partials/enums/component.enums';
import { Popover as BaseUIPopover } from '@base-ui/react/popover';
import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  ReactNode,
  Ref,
} from 'react';

type PopoverOverviewPopupBaseUIProps = Omit<
  BaseUIPopover.Popup.Props,
  'render' | 'color' | 'className' | 'style' | 'children' | 'ref'
>;

export type PopoverOverviewPopupProps<C extends ElementType = 'div'> = {
  as?: C;
  ref?: Ref<any>;
  variant?: PopoverVariant | `${PopoverVariant}`;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & PopoverOverviewPopupBaseUIProps &
  Omit<
    ComponentPropsWithoutRef<C>,
    | 'as'
    | 'ref'
    | 'color'
    | 'className'
    | 'style'
    | 'children'
    | keyof PopoverOverviewPopupBaseUIProps
  >;
