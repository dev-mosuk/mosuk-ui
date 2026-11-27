import { ContextMenu as BaseUIContextMenu } from '@base-ui/react/context-menu';
import type { CSSProperties, ReactNode, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

type ContextMenuOpenBaseUIProps = Omit<
  BaseUIContextMenu.Trigger.Props,
  'render' | 'className' | 'style' | 'children' | 'ref'
>;

export type ContextMenuOpenProps<C = 'div'> = {
  as?: C;
  ref?: Ref<any>;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & ContextMenuOpenBaseUIProps &
  Omit<
    PropsOf<C>,
    | 'as'
    | 'ref'
    | 'color'
    | 'className'
    | 'style'
    | 'children'
    | keyof ContextMenuOpenBaseUIProps
  >;
