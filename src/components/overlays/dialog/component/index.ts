import { DialogClose } from './close/component';
import { DialogCloseProps } from './close/component.interface';
import { Dialog as Component } from './component';
import { DialogProps as ComponentProps } from './component.interface';
import { DialogOpen } from './open/component';
import { DialogOpenProps } from './open/component.interface';
import { DialogPortal } from './portal/component';
import { DialogPortalProps } from './portal/component.interface';
import { DialogPortalViewportBackdrop } from './portal/viewport/backdrop/component';
import { DialogPortalViewportBackdropProps } from './portal/viewport/backdrop/component.interface';
import { DialogPortalViewport } from './portal/viewport/component';
import { DialogPortalViewportProps } from './portal/viewport/component.interface';
import { DialogPortalViewportPopup } from './portal/viewport/popup/component';
import { DialogPortalViewportPopupProps } from './portal/viewport/popup/component.interface';
import { DialogPortalViewportPopupContent } from './portal/viewport/popup/content/component';
import { DialogPortalViewportPopupContentProps } from './portal/viewport/popup/content/component.interface';
import { DialogPortalViewportPopupHandle } from './portal/viewport/popup/handle/component';
import { DialogPortalViewportPopupHandleProps } from './portal/viewport/popup/handle/component.interface';

export const Dialog = Object.assign(Component, {
  Open: DialogOpen,
  Close: DialogClose,
  Portal: Object.assign(DialogPortal, {
    Viewport: Object.assign(DialogPortalViewport, {
      Backdrop: DialogPortalViewportBackdrop,
      Popup: Object.assign(DialogPortalViewportPopup, {
        Handle: DialogPortalViewportPopupHandle,
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

        export namespace Handle {
          export type Props = DialogPortalViewportPopupHandleProps;
        }

        export namespace Content {
          export type Props = DialogPortalViewportPopupContentProps;
        }
      }
    }
  }
}
