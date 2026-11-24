import { ContextMenu as BaseUIContextMenu } from '@base-ui/react/context-menu';
import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  ReactNode,
  Ref,
} from 'react';

type ContextMenuOpenBaseUIProps = Omit<
  BaseUIContextMenu.Trigger.Props,
  'render' | 'className' | 'style' | 'children' | 'ref'
>;

export type ContextMenuOpenProps<C extends ElementType = 'div'> = {
  as?: C;
  ref?: Ref<any>;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & ContextMenuOpenBaseUIProps &
  Omit<
    ComponentPropsWithoutRef<C>,
    | 'as'
    | 'ref'
    | 'color'
    | 'className'
    | 'style'
    | 'children'
    | keyof ContextMenuOpenBaseUIProps
  >;
