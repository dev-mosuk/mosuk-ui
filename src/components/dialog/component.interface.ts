import { Dialog as BaseUIDialog } from '@base-ui/react';

export interface DialogProps extends BaseUIDialog.Root.Props {
  keepMounted?: boolean;
  container?: BaseUIDialog.Portal.Props['container'];
}
