import { Dialog as BaseUIDialog } from '@base-ui/react';

type DialogOwnProps = {
  keepMounted?: boolean;
  container?: BaseUIDialog.Portal.Props['container'];
  isOpen?: boolean;
  defaultOpen?: boolean;
  /** @deprecated Use `isOpen` */
  open?: never;
};

export type DialogProps = DialogOwnProps &
  Omit<BaseUIDialog.Root.Props, 'open' | 'defaultOpen' | 'disabled'>;
