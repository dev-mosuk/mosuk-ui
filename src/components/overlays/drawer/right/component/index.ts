import { DrawerRightClose } from './close/component';
import { DrawerRightCloseProps } from './close/component.interface';
import { DrawerRight as Component } from './component';
import { DrawerRightProps as ComponentProps } from './component.interface';
import { DrawerRightOpen } from './open/component';
import { DrawerRightOpenProps } from './open/component.interface';
import { DrawerRightPortal } from './portal/component';
import { DrawerRightPortalProps } from './portal/component.interface';
import { DrawerRightPortalViewportBackdrop } from './portal/viewport/backdrop/component';
import { DrawerRightPortalViewportBackdropProps } from './portal/viewport/backdrop/component.interface';
import { DrawerRightPortalViewport } from './portal/viewport/component';
import { DrawerRightPortalViewportProps } from './portal/viewport/component.interface';
import { DrawerRightPortalViewportPopup } from './portal/viewport/popup/component';
import { DrawerRightPortalViewportPopupProps } from './portal/viewport/popup/component.interface';
import { DrawerRightPortalViewportPopupContent } from './portal/viewport/popup/content/component';
import { DrawerRightPortalViewportPopupContentProps } from './portal/viewport/popup/content/component.interface';
import { DrawerRightPortalViewportPopupHandle } from './portal/viewport/popup/handle/component';
import { DrawerRightPortalViewportPopupHandleProps } from './portal/viewport/popup/handle/component.interface';

export const DrawerRight = Object.assign(Component, {
  Open: DrawerRightOpen,
  Close: DrawerRightClose,
  Portal: Object.assign(DrawerRightPortal, {
    Viewport: Object.assign(DrawerRightPortalViewport, {
      Backdrop: DrawerRightPortalViewportBackdrop,
      Popup: Object.assign(DrawerRightPortalViewportPopup, {
        Handle: DrawerRightPortalViewportPopupHandle,
        Content: DrawerRightPortalViewportPopupContent,
      }),
    }),
  }),
});

export namespace DrawerRight {
  export type Props = ComponentProps;

  export namespace Open {
    export type Props = DrawerRightOpenProps;
  }

  export namespace Close {
    export type Props = DrawerRightCloseProps;
  }

  export namespace Portal {
    export type Props = DrawerRightPortalProps;

    export namespace Viewport {
      export type Props = DrawerRightPortalViewportProps;

      export namespace Backdrop {
        export type Props = DrawerRightPortalViewportBackdropProps;
      }

      export namespace Popup {
        export type Props = DrawerRightPortalViewportPopupProps;

        export namespace Handle {
          export type Props = DrawerRightPortalViewportPopupHandleProps;
        }

        export namespace Content {
          export type Props = DrawerRightPortalViewportPopupContentProps;
        }
      }
    }
  }
}
