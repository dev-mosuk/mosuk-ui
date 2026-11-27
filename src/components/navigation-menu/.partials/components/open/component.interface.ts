import { NavigationMenu as BaseUINavigationMenu } from '@base-ui/react/navigation-menu';
import type {
  CSSProperties,
  ReactNode,
  Ref,
} from 'react';

import type { PropsOf } from '@/types/props-of';

type NavigationMenuOpenBaseUIProps = Omit<
  BaseUINavigationMenu.Trigger.Props,
  'render' | 'className' | 'style' | 'children' | 'ref' | 'disabled'
>;

export type NavigationMenuOpenProps<C = 'button'> = {
  as?: C;
  ref?: Ref<any>;
  isDisabled?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & NavigationMenuOpenBaseUIProps &
  Omit<
    PropsOf<C>,
    | 'as'
    | 'ref'
    | 'disabled'
    | 'color'
    | 'className'
    | 'style'
    | 'children'
    | keyof NavigationMenuOpenBaseUIProps
  >;
