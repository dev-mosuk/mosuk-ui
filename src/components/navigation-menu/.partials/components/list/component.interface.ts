import { NavigationMenu as BaseUINavigationMenu } from '@base-ui/react/navigation-menu';
import type {
  CSSProperties,
  ReactNode,
  Ref,
} from 'react';

import type { PropsOf } from '@/types/props-of';

type NavigationMenuListBaseUIProps = Omit<
  BaseUINavigationMenu.List.Props,
  'render' | 'className' | 'style' | 'children' | 'ref'
>;

export type NavigationMenuListProps<C = 'ul'> = {
  as?: C;
  ref?: Ref<any>;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & NavigationMenuListBaseUIProps &
  Omit<
    PropsOf<C>,
    | 'as'
    | 'ref'
    | 'color'
    | 'className'
    | 'style'
    | 'children'
    | keyof NavigationMenuListBaseUIProps
  >;
