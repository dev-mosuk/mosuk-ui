import { ContextMenu as BaseUIContextMenu } from '@base-ui/react/context-menu';

type ContextMenuOwnProps = {
  keepMounted?: boolean;
  container?: BaseUIContextMenu.Portal.Props['container'];
  isOpen?: boolean;
  defaultOpen?: boolean;
  isDisabled?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  onOpenChangeComplete?: (isOpen: boolean) => void;
  /** @deprecated Use `isOpen` */
  open?: never;
  /** @deprecated Use `isDisabled` */
  disabled?: never;
};

export type ContextMenuProps = ContextMenuOwnProps &
  Omit<
    BaseUIContextMenu.Root.Props,
    'open' | 'defaultOpen' | 'disabled' | 'onOpenChange' | 'onOpenChangeComplete'
  >;