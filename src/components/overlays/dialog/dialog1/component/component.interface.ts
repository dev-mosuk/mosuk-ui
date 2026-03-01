import { Dialog } from '@base-ui/react/dialog';
import { RefObject } from 'react';


export interface DialogProps extends Dialog.Root.Props {
  ref?: RefObject<HTMLDivElement | null>;
  container?: Dialog.Portal.Props['container'];
  keepMounted?: boolean;
  children?: React.ReactNode;
}
