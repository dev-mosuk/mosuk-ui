import { DialogBackdrop as ParentDialogBackdrop } from '../component/backdrop/component';
import { DialogBackdropProps as ParentDialogBackdropProps } from '../component/backdrop/component.interface';
import { Dialog as ParentDialog } from '../component/component';
import { DialogProps as ParentDialogProps } from '../component/component.interface';
import { DialogContext as ParentDialogContext } from '../component/context/component';
import { DialogContextProps as ParentDialogContextProps } from '../component/context/component.interface';
import { DialogDialogBodyProps as ParentDialogBodyProps } from '../component/dialog/body/component.interface';
import { DialogDialogFooterProps as ParentDialogFooterProps } from '../component/dialog/footer/component.interface';
import { DialogDialogHeaderProps as ParentDialogHeaderProps } from '../component/dialog/header/component.interface';
import { DialogImagesDialog } from './dialog/component';
import { DialogImagesDialogProps } from './dialog/component.interface';
import { DialogImagesDialogImages } from './dialog/images/component';
import { DialogImagesDialogImagesProps } from './dialog/images/component.interface';
import { DialogImagesDialogImagesImage } from './dialog/images/image/component';
import { DialogImagesDialogImagesImageProps } from './dialog/images/image/component.interface';

const ChildDialog = (props: ParentDialogProps) => ParentDialog(props);

export const DialogImages = Object.assign(ChildDialog, {
  Context: ParentDialogContext,
  Backdrop: ParentDialogBackdrop,
  Dialog: Object.assign(DialogImagesDialog, {
    Images: Object.assign(DialogImagesDialogImages, {
      Image: DialogImagesDialogImagesImage,
    }),
    
  }),
});

export namespace Dialog {
  export type Props = ParentDialogProps;

  export namespace Context {
    export type Props = ParentDialogContextProps;
  }

  export namespace Backdrop {
    export type Props = ParentDialogBackdropProps;
  }

  export namespace Dialog {
    export type Props = DialogImagesDialogProps;

    export namespace Header {
      export type Props = ParentDialogHeaderProps;
    }

    export namespace Body {
      export type Props = ParentDialogBodyProps;
    }

    export namespace Footer {
      export type Props = ParentDialogFooterProps;
    }

    export namespace Images {
      export type Props = DialogImagesDialogImagesProps;

      export namespace Image {
        export type Props = DialogImagesDialogImagesImageProps;
      }
    }
  }
}
