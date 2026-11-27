import { Drawer as BaseUiDrawer } from '@base-ui/react';
import type { CSSProperties, ReactNode, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

type DrawerBodyBaseUIProps = Omit<
  BaseUiDrawer.Content.Props,
  'render' | 'color' | 'className' | 'style' | 'children' | 'ref'
>;

export type DrawerViewportPopupBodyProps<C = 'div'> = {
  as?: C;
  ref?: Ref<any>;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & DrawerBodyBaseUIProps &
  Omit<
    PropsOf<C>,
    | 'as'
    | 'ref'
    | 'color'
    | 'className'
    | 'style'
    | 'children'
    | keyof DrawerBodyBaseUIProps
  >;
