import { DialogClose } from '@/components/overlays/dialog/close/component';
import { DialogCloseProps } from '@/components/overlays/dialog/close/component.interface';
import { Dialog as Component } from '@/components/overlays/dialog/component';
import { DialogProps as ComponentProps } from '@/components/overlays/dialog/component.interface';
import { DialogOpen } from '@/components/overlays/dialog/open/component';
import { DialogOpenProps } from '@/components/overlays/dialog/open/component.interface';
import { DialogPortal } from '@/components/overlays/dialog/portal/component';
import { DialogPortalProps } from '@/components/overlays/dialog/portal/component.interface';
import { DialogPortalViewportBackdrop } from '@/components/overlays/dialog/portal/viewport/backdrop/component';
import { DialogPortalViewportBackdropProps } from '@/components/overlays/dialog/portal/viewport/backdrop/component.interface';
import { DialogPortalViewport } from '@/components/overlays/dialog/portal/viewport/component';
import { DialogPortalViewportProps } from '@/components/overlays/dialog/portal/viewport/component.interface';
import { DialogPortalViewportPopup } from '@/components/overlays/dialog/portal/viewport/popup/component';
import { DialogPortalViewportPopupProps } from '@/components/overlays/dialog/portal/viewport/popup/component.interface';
import { DialogPortalViewportPopupContent } from '@/components/overlays/dialog/portal/viewport/popup/content/component';
import { DialogPortalViewportPopupContentProps } from '@/components/overlays/dialog/portal/viewport/popup/content/component.interface';

export const Dialog = Object.assign(Component, {
  Open: DialogOpen,
  Close: DialogClose,
  Portal: Object.assign(DialogPortal, {
    Viewport: Object.assign(DialogPortalViewport, {
      Backdrop: DialogPortalViewportBackdrop,
      Popup: Object.assign(DialogPortalViewportPopup, {
        Content: DialogPortalViewportPopupContent,
      }),
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

  export namespace Portal {
    export type Props = DialogPortalProps;

    export namespace Viewport {
      export type Props = DialogPortalViewportProps;

      export namespace Backdrop {
        export type Props = DialogPortalViewportBackdropProps;
      }

      export namespace Popup {
        export type Props = DialogPortalViewportPopupProps;

        export namespace Content {
          export type Props = DialogPortalViewportPopupContentProps;
        }
      }
    }
  }
}
