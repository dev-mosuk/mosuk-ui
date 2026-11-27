import { ContextMenu as BaseUIContextMenu } from '@base-ui/react/context-menu';
import type { CSSProperties, ReactNode, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

type ContextMenuSeparatorBaseUIProps = Omit<
  BaseUIContextMenu.Separator.Props,
  'render' | 'className' | 'style' | 'children' | 'ref'
>;

export type ContextMenuSeparatorProps<C = 'div'> = {
  as?: C;
  ref?: Ref<any>;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & ContextMenuSeparatorBaseUIProps &
  Omit<
    PropsOf<C>,
    | 'as'
    | 'ref'
    | 'color'
    | 'className'
    | 'style'
    | 'children'
    | keyof ContextMenuSeparatorBaseUIProps
  >;
