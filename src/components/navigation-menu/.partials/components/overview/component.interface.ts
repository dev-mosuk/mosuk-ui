import { NavigationMenu as BaseUINavigationMenu } from '@base-ui/react/navigation-menu';
import type {
  CSSProperties,
  ReactNode,
  Ref,
} from 'react';

import type { PropsOf } from '@/types/props-of';

type NavigationMenuOverviewBaseUIProps = Omit<
  BaseUINavigationMenu.Positioner.Props,
  'render' | 'className' | 'style' | 'children' | 'ref'
>;

export type NavigationMenuOverviewProps<C = 'div'> = {
  as?: C;
  ref?: Ref<any>;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & NavigationMenuOverviewBaseUIProps &
  Omit<
    PropsOf<C>,
    | 'as'
    | 'ref'
    | 'color'
    | 'className'
    | 'style'
    | 'children'
    | keyof NavigationMenuOverviewBaseUIProps
  >;
