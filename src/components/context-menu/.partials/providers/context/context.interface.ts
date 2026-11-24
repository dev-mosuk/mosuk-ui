import type { ContextMenu as BaseUIContextMenu } from '@base-ui/react/context-menu';

export interface ContextMenuContextProps {
  keepMounted?: boolean;
  container?: BaseUIContextMenu.Portal.Props['container'];
}
