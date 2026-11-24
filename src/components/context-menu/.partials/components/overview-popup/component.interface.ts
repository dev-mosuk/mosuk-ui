import type { ContextMenuVariant } from '@/components/context-menu/.partials/enums/component.enums';
import { ContextMenu as BaseUIContextMenu } from '@base-ui/react/context-menu';
import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  ReactNode,
  Ref,
} from 'react';

type ContextMenuOverviewPopupBaseUIProps = Omit<
  BaseUIContextMenu.Popup.Props,
  'render' | 'color' | 'className' | 'style' | 'children' | 'ref'
>;

export type ContextMenuOverviewPopupProps<C extends ElementType = 'div'> = {
  as?: C;
  ref?: Ref<any>;
  variant?: ContextMenuVariant | `${ContextMenuVariant}`;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & ContextMenuOverviewPopupBaseUIProps &
  Omit<
    ComponentPropsWithoutRef<C>,
    | 'as'
    | 'ref'
    | 'color'
    | 'className'
    | 'style'
    | 'children'
    | keyof ContextMenuOverviewPopupBaseUIProps
  >;
