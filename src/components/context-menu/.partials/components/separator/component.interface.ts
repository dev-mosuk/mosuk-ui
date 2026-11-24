import { ContextMenu as BaseUIContextMenu } from '@base-ui/react/context-menu';
import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  ReactNode,
  Ref,
} from 'react';

type ContextMenuSeparatorBaseUIProps = Omit<
  BaseUIContextMenu.Separator.Props,
  'render' | 'className' | 'style' | 'children' | 'ref'
>;

export type ContextMenuSeparatorProps<C extends ElementType = 'div'> = {
  as?: C;
  ref?: Ref<any>;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & ContextMenuSeparatorBaseUIProps &
  Omit<
    ComponentPropsWithoutRef<C>,
    | 'as'
    | 'ref'
    | 'color'
    | 'className'
    | 'style'
    | 'children'
    | keyof ContextMenuSeparatorBaseUIProps
  >;
