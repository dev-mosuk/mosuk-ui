import { ContextMenu as BaseUIContextMenu } from '@base-ui/react/context-menu';
import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  ReactNode,
  Ref,
} from 'react';

type ContextMenuOverviewBaseUIProps = Omit<
  BaseUIContextMenu.Positioner.Props,
  'render' | 'className' | 'style' | 'children' | 'ref'
>;

export type ContextMenuOverviewProps<C extends ElementType = 'div'> = {
  as?: C;
  ref?: Ref<any>;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & ContextMenuOverviewBaseUIProps &
  Omit<
    ComponentPropsWithoutRef<C>,
    | 'as'
    | 'ref'
    | 'color'
    | 'className'
    | 'style'
    | 'children'
    | keyof ContextMenuOverviewBaseUIProps
  >;
