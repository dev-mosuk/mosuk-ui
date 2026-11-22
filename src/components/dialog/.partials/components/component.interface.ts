import { Dialog as BaseUIDialog } from '@base-ui/react';

export interface DialogProps extends Omit<BaseUIDialog.Root.Props, 'open'> {
  isOpen?: boolean;
  keepMounted?: boolean;
  container?: BaseUIDialog.Portal.Props['container'];
}
