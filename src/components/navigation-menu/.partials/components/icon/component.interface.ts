import { NavigationMenu as BaseUINavigationMenu } from '@base-ui/react/navigation-menu';
import type {
  CSSProperties,
  ReactNode,
  Ref,
} from 'react';

import type { PropsOf } from '@/types/props-of';

type NavigationMenuIconBaseUIProps = Omit<
  BaseUINavigationMenu.Icon.Props,
  'render' | 'className' | 'style' | 'children' | 'ref'
>;

export type NavigationMenuIconProps<C = 'span'> = {
  as?: C;
  ref?: Ref<any>;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & NavigationMenuIconBaseUIProps &
  Omit<
    PropsOf<C>,
    | 'as'
    | 'ref'
    | 'color'
    | 'className'
    | 'style'
    | 'children'
    | keyof NavigationMenuIconBaseUIProps
  >;
