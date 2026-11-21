import { Dialog as Component } from '@/components/dialog/component';
import { DialogProps as ComponentProps } from '@/components/dialog/component.interface';
import { DialogPortal } from '@/components/dialog/portal/component';
import { DialogPortalProps } from '@/components/dialog/portal/component.interface';
import { DialogPortalViewportBackdrop } from '@/components/dialog/portal/viewport/backdrop/component';
import { DialogPortalViewportBackdropProps } from '@/components/dialog/portal/viewport/backdrop/component.interface';
import { DialogPortalViewport } from '@/components/dialog/portal/viewport/component';
import { DialogPortalViewportProps } from '@/components/dialog/portal/viewport/component.interface';
import { DialogPortalViewportPopup } from '@/components/dialog/portal/viewport/popup/component';
import { DialogPortalViewportPopupProps } from '@/components/dialog/portal/viewport/popup/component.interface';
import { DialogPortalViewportPopupClose } from '@/components/dialog/portal/viewport/popup/close/component';
import { DialogPortalViewportPopupCloseProps } from '@/components/dialog/portal/viewport/popup/close/component.interface';
import { DialogPortalViewportPopupContent } from '@/components/dialog/portal/viewport/popup/content/component';
import { DialogPortalViewportPopupContentProps } from '@/components/dialog/portal/viewport/popup/content/component.interface';
import { DialogTrigger } from '@/components/dialog/trigger/component';
import { DialogTriggerProps } from '@/components/dialog/trigger/component.interface';

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
