import type { NavigationMenuVariant } from '@/components/navigation-menu/.partials/enums/component.enums';
import { NavigationMenu as BaseUINavigationMenu } from '@base-ui/react/navigation-menu';
import type {
  CSSProperties,
  ReactNode,
  Ref,
} from 'react';

import type { PropsOf } from '@/types/props-of';

type NavigationMenuOverviewPopupBaseUIProps = Omit<
  BaseUINavigationMenu.Popup.Props,
  'render' | 'color' | 'className' | 'style' | 'children' | 'ref'
>;

export type NavigationMenuOverviewPopupProps<C = 'nav'> = {
  as?: C;
  ref?: Ref<any>;
  variant?: NavigationMenuVariant | `${NavigationMenuVariant}`;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & NavigationMenuOverviewPopupBaseUIProps &
  Omit<
    PropsOf<C>,
    | 'as'
    | 'ref'
    | 'color'
    | 'className'
    | 'style'
    | 'children'
    | keyof NavigationMenuOverviewPopupBaseUIProps
  >;
