import { SidebarClose } from './close/component';
import { SidebarCloseProps } from './close/component.interface';
import { Sidebar as Component } from './component';
import { SidebarProps as ComponentProps } from './component.interface';
import { SidebarOpen } from './open/component';
import { SidebarOpenProps } from './open/component.interface';
import { SidebarPortal } from './portal/component';
import { SidebarPortalProps } from './portal/component.interface';
import { SidebarPortalViewportBackdrop } from './portal/viewport/backdrop/component';
import { SidebarPortalViewportBackdropProps } from './portal/viewport/backdrop/component.interface';
import { SidebarPortalViewport } from './portal/viewport/component';
import { SidebarPortalViewportProps } from './portal/viewport/component.interface';
import { SidebarPortalViewportPopup } from './portal/viewport/popup/component';
import { SidebarPortalViewportPopupProps } from './portal/viewport/popup/component.interface';
import { SidebarPortalViewportPopupContent } from './portal/viewport/popup/content/component';
import { SidebarPortalViewportPopupContentProps } from './portal/viewport/popup/content/component.interface';
import { SidebarPortalViewportPopupHandle } from './portal/viewport/popup/handle/component';
import { SidebarPortalViewportPopupHandleProps } from './portal/viewport/popup/handle/component.interface';

export const Sidebar = Object.assign(Component, {
  Open: SidebarOpen,
  Close: SidebarClose,
  Portal: Object.assign(SidebarPortal, {
    Viewport: Object.assign(SidebarPortalViewport, {
      Backdrop: SidebarPortalViewportBackdrop,
      Popup: Object.assign(SidebarPortalViewportPopup, {
        Handle: SidebarPortalViewportPopupHandle,
        Content: SidebarPortalViewportPopupContent,
      }),
    }),
  }),
});

export namespace Sidebar {
  export type Props = ComponentProps;

  export namespace Open {
    export type Props = SidebarOpenProps;
  }

  export namespace Close {
    export type Props = SidebarCloseProps;
  }

  export namespace Portal {
    export type Props = SidebarPortalProps;

    export namespace Viewport {
      export type Props = SidebarPortalViewportProps;

      export namespace Backdrop {
        export type Props = SidebarPortalViewportBackdropProps;
      }

      export namespace Popup {
        export type Props = SidebarPortalViewportPopupProps;

        export namespace Handle {
          export type Props = SidebarPortalViewportPopupHandleProps;
        }

        export namespace Content {
          export type Props = SidebarPortalViewportPopupContentProps;
        }
      }
    }
  }
}
