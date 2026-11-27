import { NavigationMenu as BaseUINavigationMenu } from '@base-ui/react/navigation-menu';
import type {
  CSSProperties,
  ReactNode,
  Ref,
} from 'react';

import type { PropsOf } from '@/types/props-of';

type NavigationMenuContentBaseUIProps = Omit<
  BaseUINavigationMenu.Content.Props,
  'render' | 'className' | 'style' | 'children' | 'ref'
>;

export type NavigationMenuContentProps<C = 'div'> = {
  as?: C;
  ref?: Ref<any>;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & NavigationMenuContentBaseUIProps &
  Omit<
    PropsOf<C>,
    | 'as'
    | 'ref'
    | 'color'
    | 'className'
    | 'style'
    | 'children'
    | keyof NavigationMenuContentBaseUIProps
  >;
