import { Dialog as Component } from '@/components/overlays/dialog/component';
import { DialogProps as ComponentProps } from '@/components/overlays/dialog/component.interface';
import { DialogPortal } from '@/components/overlays/dialog/portal/component';
import { DialogPortalProps } from '@/components/overlays/dialog/portal/component.interface';
import { DialogPortalViewportBackdrop } from '@/components/overlays/dialog/portal/viewport/backdrop/component';
import { DialogPortalViewportBackdropProps } from '@/components/overlays/dialog/portal/viewport/backdrop/component.interface';
import { DialogPortalViewport } from '@/components/overlays/dialog/portal/viewport/component';
import { DialogPortalViewportProps } from '@/components/overlays/dialog/portal/viewport/component.interface';
import { DialogPortalViewportPopup } from '@/components/overlays/dialog/portal/viewport/popup/component';
import { DialogPortalViewportPopupProps } from '@/components/overlays/dialog/portal/viewport/popup/component.interface';
import { DialogPortalViewportPopupClose } from '@/components/overlays/dialog/portal/viewport/popup/close/component';
import { DialogPortalViewportPopupCloseProps } from '@/components/overlays/dialog/portal/viewport/popup/close/component.interface';
import { DialogPortalViewportPopupContent } from '@/components/overlays/dialog/portal/viewport/popup/content/component';
import { DialogPortalViewportPopupContentProps } from '@/components/overlays/dialog/portal/viewport/popup/content/component.interface';
import { DialogTrigger } from '@/components/overlays/dialog/trigger/component';
import { DialogTriggerProps } from '@/components/overlays/dialog/trigger/component.interface';

export const Dialog = Object.assign(Component, {
  Trigger: DialogTrigger,
  Portal: Object.assign(DialogPortal, {
    Viewport: Object.assign(DialogPortalViewport, {
      Backdrop: DialogPortalViewportBackdrop,
      Popup: Object.assign(DialogPortalViewportPopup, {
        Content: DialogPortalViewportPopupContent,
        Close: DialogPortalViewportPopupClose,
      }),
    }),
  }),
});

export namespace Dialog {
  export type Props = ComponentProps;

  export namespace Trigger {
    export type Props = DialogTriggerProps;
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

        export namespace Close {
          export type Props = DialogPortalViewportPopupCloseProps;
        }
      }
    }
  }
}
