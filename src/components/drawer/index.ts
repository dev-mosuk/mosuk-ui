import { Drawer as Component } from '@/components/overlays/drawer/.partials/components/component';
import { DrawerProps as ComponentProps } from '@/components/overlays/drawer/.partials/components/component.interface';
import { DrawerPortal } from '@/components/overlays/drawer/.partials/components/portal/component';
import { DrawerPortalProps } from '@/components/overlays/drawer/.partials/components/portal/component.interface';
import { DrawerPortalViewportBackdrop } from '@/components/overlays/drawer/.partials/components/portal/viewport/backdrop/component';
import { DrawerPortalViewportBackdropProps } from '@/components/overlays/drawer/.partials/components/portal/viewport/backdrop/component.interface';
import { DrawerPortalViewport } from '@/components/overlays/drawer/.partials/components/portal/viewport/component';
import { DrawerPortalViewportProps } from '@/components/overlays/drawer/.partials/components/portal/viewport/component.interface';
import { DrawerPortalViewportPopup } from '@/components/overlays/drawer/.partials/components/portal/viewport/popup/component';
import { DrawerPortalViewportPopupProps } from '@/components/overlays/drawer/.partials/components/portal/viewport/popup/component.interface';
import { DrawerPortalViewportPopupClose } from '@/components/overlays/drawer/.partials/components/portal/viewport/popup/close/component';
import { DrawerPortalViewportPopupCloseProps } from '@/components/overlays/drawer/.partials/components/portal/viewport/popup/close/component.interface';
import { DrawerPortalViewportPopupContent } from '@/components/overlays/drawer/.partials/components/portal/viewport/popup/content/component';
import { DrawerPortalViewportPopupContentProps } from '@/components/overlays/drawer/.partials/components/portal/viewport/popup/content/component.interface';
import { DrawerPortalViewportPopupHandle } from '@/components/overlays/drawer/.partials/components/portal/viewport/popup/handle/component';
import { DrawerPortalViewportPopupHandleProps } from '@/components/overlays/drawer/.partials/components/portal/viewport/popup/handle/component.interface';
import { DrawerTrigger } from '@/components/overlays/drawer/.partials/components/trigger/component';
import { DrawerTriggerProps } from '@/components/overlays/drawer/.partials/components/trigger/component.interface';

export const Drawer = Object.assign(Component, {
  Trigger: DrawerTrigger,
  Portal: Object.assign(DrawerPortal, {
    Viewport: Object.assign(DrawerPortalViewport, {
      Backdrop: DrawerPortalViewportBackdrop,
      Popup: Object.assign(DrawerPortalViewportPopup, {
        Handle: DrawerPortalViewportPopupHandle,
        Close: DrawerPortalViewportPopupClose,
        Content: DrawerPortalViewportPopupContent,
      }),
    }),
  }),
});

export namespace Drawer {
  export type Props = ComponentProps;

  export namespace Trigger {
    export type Props = DrawerTriggerProps;
  }

  export namespace Portal {
    export type Props = DrawerPortalProps;

    export namespace Viewport {
      export type Props = DrawerPortalViewportProps;

      export namespace Backdrop {
        export type Props = DrawerPortalViewportBackdropProps;
      }

      export namespace Popup {
        export type Props = DrawerPortalViewportPopupProps;

        export namespace Handle {
          export type Props = DrawerPortalViewportPopupHandleProps;
        }

        export namespace Close {
          export type Props = DrawerPortalViewportPopupCloseProps;
        }

        export namespace Content {
          export type Props = DrawerPortalViewportPopupContentProps;
        }
      }
    }
  }
}
