import { DialogClose } from '@/components/dialog/.partials/components/close/component';
import { DialogCloseProps } from '@/components/dialog/.partials/components/close/component.interface';
import { Dialog as Component } from '@/components/dialog/.partials/components/component';
import { DialogProps as ComponentProps } from '@/components/dialog/.partials/components/component.interface';
import { DialogOpen } from '@/components/dialog/.partials/components/open/component';
import { DialogOpenProps } from '@/components/dialog/.partials/components/open/component.interface';
import { DialogViewportBackdrop } from '@/components/dialog/.partials/components/viewport-backdrop/component';
import { DialogViewportBackdropProps } from '@/components/dialog/.partials/components/viewport-backdrop/component.interface';
import { DialogViewportPopupContent } from '@/components/dialog/.partials/components/viewport-popup-content/component';
import { DialogViewportPopupContentProps } from '@/components/dialog/.partials/components/viewport-popup-content/component.interface';
import { DialogViewportPopup } from '@/components/dialog/.partials/components/viewport-popup/component';
import { DialogViewportPopupProps } from '@/components/dialog/.partials/components/viewport-popup/component.interface';
import { DialogViewport } from '@/components/dialog/.partials/components/viewport/component';
import { DialogViewportProps } from '@/components/dialog/.partials/components/viewport/component.interface';

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
