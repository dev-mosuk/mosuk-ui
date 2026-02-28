import { DrawerBottomClose } from './close/component';
import { DrawerBottomCloseProps } from './close/component.interface';
import { Drawer as Component } from './component';
import { DrawerProps as ComponentProps } from './component.interface';
import { DrawerBottomOpen } from './open/component';
import { DrawerBottomOpenProps } from './open/component.interface';
import { DrawerBottomPortal } from './portal/component';
import { DrawerBottomPortalProps } from './portal/component.interface';
import { DrawerBottomPortalViewportBackdrop } from './portal/viewport/backdrop/component';
import { DrawerBottomPortalViewportBackdropProps } from './portal/viewport/backdrop/component.interface';
import { DrawerBottomPortalViewport } from './portal/viewport/component';
import { DrawerBottomPortalViewportProps } from './portal/viewport/component.interface';
import { DrawerBottomPortalViewportPopup } from './portal/viewport/popup/component';
import { DrawerBottomPortalViewportPopupProps } from './portal/viewport/popup/component.interface';
import { DrawerBottomPortalViewportPopupContent } from './portal/viewport/popup/content/component';
import { DrawerBottomPortalViewportPopupContentProps } from './portal/viewport/popup/content/component.interface';
import { DrawerBottomPortalViewportPopupHandle } from './portal/viewport/popup/handle/component';
import { DrawerBottomPortalViewportPopupHandleProps } from './portal/viewport/popup/handle/component.interface';

export const DrawerBottom = Object.assign(Component, {
  Open: DrawerBottomOpen,
  Close: DrawerBottomClose,
  Portal: Object.assign(DrawerBottomPortal, {
    Viewport: Object.assign(DrawerBottomPortalViewport, {
      Backdrop: DrawerBottomPortalViewportBackdrop,
      Popup: Object.assign(DrawerBottomPortalViewportPopup, {
        Handle: DrawerBottomPortalViewportPopupHandle,
        Content: DrawerBottomPortalViewportPopupContent,
      }),
    }),
  }),
});

export namespace DrawerBottom {
  export type Props = ComponentProps;

  export namespace Open {
    export type Props = DrawerBottomOpenProps;
  }

  export namespace Close {
    export type Props = DrawerBottomCloseProps;
  }

  export namespace Portal {
    export type Props = DrawerBottomPortalProps;

    export namespace Viewport {
      export type Props = DrawerBottomPortalViewportProps;

      export namespace Backdrop {
        export type Props = DrawerBottomPortalViewportBackdropProps;
      }

      export namespace Popup {
        export type Props = DrawerBottomPortalViewportPopupProps;

        export namespace Handle {
          export type Props = DrawerBottomPortalViewportPopupHandleProps;
        }

        export namespace Content {
          export type Props = DrawerBottomPortalViewportPopupContentProps;
        }
      }
    }
  }
}
