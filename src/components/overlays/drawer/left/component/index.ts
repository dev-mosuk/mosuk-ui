import { DrawerLeftClose } from './close/component';
import { DrawerLeftCloseProps } from './close/component.interface';
import { DrawerLeft as Component } from './component';
import { DrawerLeftProps as ComponentProps } from './component.interface';
import { DrawerLeftOpen } from './open/component';
import { DrawerLeftOpenProps } from './open/component.interface';
import { DrawerLeftPortal } from './portal/component';
import { DrawerLeftPortalProps } from './portal/component.interface';
import { DrawerLeftPortalViewportBackdrop } from './portal/viewport/backdrop/component';
import { DrawerLeftPortalViewportBackdropProps } from './portal/viewport/backdrop/component.interface';
import { DrawerLeftPortalViewport } from './portal/viewport/component';
import { DrawerLeftPortalViewportProps } from './portal/viewport/component.interface';
import { DrawerLeftPortalViewportPopup } from './portal/viewport/popup/component';
import { DrawerLeftPortalViewportPopupProps } from './portal/viewport/popup/component.interface';
import { DrawerLeftPortalViewportPopupContent } from './portal/viewport/popup/content/component';
import { DrawerLeftPortalViewportPopupContentProps } from './portal/viewport/popup/content/component.interface';
import { DrawerLeftPortalViewportPopupHandle } from './portal/viewport/popup/handle/component';
import { DrawerLeftPortalViewportPopupHandleProps } from './portal/viewport/popup/handle/component.interface';

export const DrawerLeft = Object.assign(Component, {
  Open: DrawerLeftOpen,
  Close: DrawerLeftClose,
  Portal: Object.assign(DrawerLeftPortal, {
    Viewport: Object.assign(DrawerLeftPortalViewport, {
      Backdrop: DrawerLeftPortalViewportBackdrop,
      Popup: Object.assign(DrawerLeftPortalViewportPopup, {
        Handle: DrawerLeftPortalViewportPopupHandle,
        Content: DrawerLeftPortalViewportPopupContent,
      }),
    }),
  }),
});

export namespace DrawerLeft {
  export type Props = ComponentProps;

  export namespace Open {
    export type Props = DrawerLeftOpenProps;
  }

  export namespace Close {
    export type Props = DrawerLeftCloseProps;
  }

  export namespace Portal {
    export type Props = DrawerLeftPortalProps;

    export namespace Viewport {
      export type Props = DrawerLeftPortalViewportProps;

      export namespace Backdrop {
        export type Props = DrawerLeftPortalViewportBackdropProps;
      }

      export namespace Popup {
        export type Props = DrawerLeftPortalViewportPopupProps;

        export namespace Handle {
          export type Props = DrawerLeftPortalViewportPopupHandleProps;
        }

        export namespace Content {
          export type Props = DrawerLeftPortalViewportPopupContentProps;
        }
      }
    }
  }
}
