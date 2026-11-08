import { DrawerClose } from '@/components/overlays/drawer/component/.partials/components/close/component';
import { DrawerCloseProps } from '@/components/overlays/drawer/component/.partials/components/close/component.interface';
import { Drawer as Component } from '@/components/overlays/drawer/component/.partials/components/component';
import { DrawerProps as ComponentProps } from '@/components/overlays/drawer/component/.partials/components/component.interface';
import { DrawerOpen } from '@/components/overlays/drawer/component/.partials/components/open/component';
import { DrawerOpenProps } from '@/components/overlays/drawer/component/.partials/components/open/component.interface';
import { DrawerPortal } from '@/components/overlays/drawer/component/.partials/components/portal/component';
import { DrawerPortalProps } from '@/components/overlays/drawer/component/.partials/components/portal/component.interface';
import { DrawerPortalViewportBackdrop } from '@/components/overlays/drawer/component/.partials/components/portal/viewport/backdrop/component';
import { DrawerPortalViewportBackdropProps } from '@/components/overlays/drawer/component/.partials/components/portal/viewport/backdrop/component.interface';
import { DrawerPortalViewport } from '@/components/overlays/drawer/component/.partials/components/portal/viewport/component';
import { DrawerPortalViewportProps } from '@/components/overlays/drawer/component/.partials/components/portal/viewport/component.interface';
import { DrawerPortalViewportPopup } from '@/components/overlays/drawer/component/.partials/components/portal/viewport/popup/component';
import { DrawerPortalViewportPopupProps } from '@/components/overlays/drawer/component/.partials/components/portal/viewport/popup/component.interface';
import { DrawerPortalViewportPopupContent } from '@/components/overlays/drawer/component/.partials/components/portal/viewport/popup/content/component';
import { DrawerPortalViewportPopupContentProps } from '@/components/overlays/drawer/component/.partials/components/portal/viewport/popup/content/component.interface';
import { DrawerPortalViewportPopupHandle } from '@/components/overlays/drawer/component/.partials/components/portal/viewport/popup/handle/component';
import { DrawerPortalViewportPopupHandleProps } from '@/components/overlays/drawer/component/.partials/components/portal/viewport/popup/handle/component.interface';

export const Drawer = Object.assign(Component, {
  Open: DrawerOpen,
  Close: DrawerClose,
  Portal: Object.assign(DrawerPortal, {
    Viewport: Object.assign(DrawerPortalViewport, {
      Backdrop: DrawerPortalViewportBackdrop,
      Popup: Object.assign(DrawerPortalViewportPopup, {
        Handle: DrawerPortalViewportPopupHandle,
        Content: DrawerPortalViewportPopupContent,
      }),
    }),
  }),
});

export namespace Drawer {
  export type Props = ComponentProps;

  export namespace Open {
    export type Props = DrawerOpenProps;
  }

  export namespace Close {
    export type Props = DrawerCloseProps;
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

        export namespace Content {
          export type Props = DrawerPortalViewportPopupContentProps;
        }
      }
    }
  }
}
