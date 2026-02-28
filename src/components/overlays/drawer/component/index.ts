import { DrawerClose } from './close/component';
import { DrawerCloseProps } from './close/component.interface';
import { Drawer as Component } from './component';
import { DrawerProps as ComponentProps } from './component.interface';
import { DrawerOpen } from './open/component';
import { DrawerOpenProps } from './open/component.interface';
import { DrawerPortal } from './portal/component';
import { DrawerPortalProps } from './portal/component.interface';
import { DrawerPortalViewportBackdrop } from './portal/viewport/backdrop/component';
import { DrawerPortalViewportBackdropProps } from './portal/viewport/backdrop/component.interface';
import { DrawerPortalViewport } from './portal/viewport/component';
import { DrawerPortalViewportProps } from './portal/viewport/component.interface';
import { DrawerPortalViewportPopup } from './portal/viewport/popup/component';
import { DrawerPortalViewportPopupProps } from './portal/viewport/popup/component.interface';
import { DrawerPortalViewportPopupContent } from './portal/viewport/popup/content/component';
import { DrawerPortalViewportPopupContentProps } from './portal/viewport/popup/content/component.interface';
import { DrawerPortalViewportPopupHandle } from './portal/viewport/popup/handle/component';
import { DrawerPortalViewportPopupHandleProps } from './portal/viewport/popup/handle/component.interface';

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
