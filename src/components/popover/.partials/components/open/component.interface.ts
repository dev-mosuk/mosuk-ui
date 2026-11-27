import { Popover as BaseUIPopover } from '@base-ui/react/popover';
import type { CSSProperties, ReactNode, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

type PopoverOpenBaseUIProps = Pick<
  BaseUIPopover.Trigger.Props,
  'openOnHover' | 'delay' | 'closeDelay' | 'handle' | 'payload' | 'id'
>;

export type PopoverOpenProps<C = 'button'> = {
  as?: C;
  ref?: Ref<any>;
  isDisabled?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & PopoverOpenBaseUIProps &
  Omit<
    PropsOf<C>,
    'as' | 'ref' | 'disabled' | 'color' | 'className' | 'style' | 'children'
  >;
