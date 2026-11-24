import { Drawer as BaseUiDrawer } from '@base-ui/react';
import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  ReactNode,
  Ref,
} from 'react';

type DrawerBodyBaseUIProps = Omit<
  BaseUiDrawer.Content.Props,
  'render' | 'color' | 'className' | 'style' | 'children' | 'ref'
>;

export type DrawerViewportPopupBodyProps<C extends ElementType = 'div'> = {
  as?: C;
  ref?: Ref<any>;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & DrawerBodyBaseUIProps &
  Omit<
    ComponentPropsWithoutRef<C>,
    | 'as'
    | 'ref'
    | 'color'
    | 'className'
    | 'style'
    | 'children'
    | keyof DrawerBodyBaseUIProps
  >;
