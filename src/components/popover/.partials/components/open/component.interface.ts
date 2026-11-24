import { Popover as BaseUIPopover } from '@base-ui/react/popover';
import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  ReactNode,
  Ref,
} from 'react';

type PopoverOpenBaseUIProps = Pick<
  BaseUIPopover.Trigger.Props,
  'openOnHover' | 'delay' | 'closeDelay' | 'handle' | 'payload' | 'id'
>;

export type PopoverOpenProps<C extends ElementType = 'button'> = {
  as?: C;
  ref?: Ref<any>;
  isDisabled?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & PopoverOpenBaseUIProps &
  Omit<
    ComponentPropsWithoutRef<C>,
    'as' | 'ref' | 'disabled' | 'color' | 'className' | 'style' | 'children'
  >;
