import type { Dialog as BaseUIDialog } from '@base-ui/react';

export interface DialogContextProps {
  keepMounted?: boolean;
  container?: BaseUIDialog.Portal.Props['container'];
}
