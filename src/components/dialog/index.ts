import { Dialog as Component } from '@/components/dialog/component';
import { DialogProps as ComponentProps } from '@/components/dialog/component.interface';
import { DialogClose } from '@/components/dialog/close/component';
import { DialogCloseProps } from '@/components/dialog/close/component.interface';
import { DialogOpen } from '@/components/dialog/open/component';
import { DialogOpenProps } from '@/components/dialog/open/component.interface';
import { DialogViewport } from '@/components/dialog/viewport/component';
import { DialogViewportProps } from '@/components/dialog/viewport/component.interface';
import { DialogViewportBackdrop } from '@/components/dialog/viewport/backdrop/component';
import { DialogViewportBackdropProps } from '@/components/dialog/viewport/backdrop/component.interface';
import { DialogViewportPopup } from '@/components/dialog/viewport/popup/component';
import { DialogViewportPopupProps } from '@/components/dialog/viewport/popup/component.interface';
import { DialogViewportPopupContent } from '@/components/dialog/viewport/popup/content/component';
import { DialogViewportPopupContentProps } from '@/components/dialog/viewport/popup/content/component.interface';

export const Dialog = Object.assign(Component, {
  Open: DialogOpen,
  Close: DialogClose,
  Viewport: Object.assign(DialogViewport, {
    Backdrop: DialogViewportBackdrop,
    Popup: Object.assign(DialogViewportPopup, {
      Content: DialogViewportPopupContent,
    }),
  }),
});

export namespace Dialog {
  export type Props = ComponentProps;

  export namespace Open {
    export type Props = DialogOpenProps;
  }

  export namespace Close {
    export type Props = DialogCloseProps;
  }

  export namespace Viewport {
    export type Props = DialogViewportProps;

    export namespace Backdrop {
      export type Props = DialogViewportBackdropProps;
    }

    export namespace Popup {
      export type Props = DialogViewportPopupProps;

      export namespace Content {
        export type Props = DialogViewportPopupContentProps;
      }
    }
  }
}
