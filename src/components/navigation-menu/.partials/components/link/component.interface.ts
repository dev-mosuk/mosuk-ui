import { NavigationMenu as BaseUINavigationMenu } from '@base-ui/react/navigation-menu';
import type {
  CSSProperties,
  ReactNode,
  Ref,
} from 'react';

import type { PropsOf } from '@/types/props-of';

type NavigationMenuLinkBaseUIProps = Omit<
  BaseUINavigationMenu.Link.Props,
  'render' | 'className' | 'style' | 'children' | 'ref' | 'active'
>;

export type NavigationMenuLinkProps<C = 'a'> = {
  as?: C;
  ref?: Ref<any>;
  isActive?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & NavigationMenuLinkBaseUIProps &
  Omit<
    PropsOf<C>,
    | 'as'
    | 'ref'
    | 'color'
    | 'className'
    | 'style'
    | 'children'
    | keyof NavigationMenuLinkBaseUIProps
  >;
