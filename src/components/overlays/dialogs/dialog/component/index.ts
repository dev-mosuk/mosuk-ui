import { DialogBackdrop } from './backdrop/component';
import { DialogBackdropProps } from './backdrop/component.interface';
import { Dialog as BaseDialog } from './component';
import { DialogProps } from './component.interface';
import { DialogContext } from './context/component';
import { DialogContextProps } from './context/component.interface';
import { DialogDialogBody } from './dialog/body/component';
import { DialogDialogBodyProps } from './dialog/body/component.interface';
import { DialogDialog } from './dialog/component';
import { DialogDialogProps } from './dialog/component.interface';
import { DialogDialogFooter } from './dialog/footer/component';
import { DialogDialogFooterProps } from './dialog/footer/component.interface';
import { DialogDialogHeader } from './dialog/header/component';
import { DialogDialogHeaderProps } from './dialog/header/component.interface';

export const Dialog = Object.assign(BaseDialog, {
  Context: DialogContext,
  Backdrop: DialogBackdrop,
  Dialog: Object.assign(DialogDialog, {
    Header: DialogDialogHeader,
    Body: DialogDialogBody,
    Footer: DialogDialogFooter,
  }),
});

export namespace Dialog {
  export type Props = DialogProps;

  export namespace Context {
    export type Props = DialogContextProps;
  }

  export namespace Backdrop {
    export type Props = DialogBackdropProps;
  }

  export namespace Dialog {
    export type Props = DialogDialogProps;

    export namespace Header {
      export type Props = DialogDialogHeaderProps;
    }

    export namespace Body {
      export type Props = DialogDialogBodyProps;
    }

    export namespace Footer {
      export type Props = DialogDialogFooterProps;
    }
  }
}
