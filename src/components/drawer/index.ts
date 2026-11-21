import { Drawer as Component } from '@/components/drawer/.partials/components/component';
import { DrawerProps as ComponentProps } from '@/components/drawer/.partials/components/component.interface';
import { DrawerPortal } from '@/components/drawer/.partials/components/portal/component';
import { DrawerPortalProps } from '@/components/drawer/.partials/components/portal/component.interface';
import { DrawerPortalViewportBackdrop } from '@/components/drawer/.partials/components/portal/viewport/backdrop/component';
import { DrawerPortalViewportBackdropProps } from '@/components/drawer/.partials/components/portal/viewport/backdrop/component.interface';
import { DrawerPortalViewport } from '@/components/drawer/.partials/components/portal/viewport/component';
import { DrawerPortalViewportProps } from '@/components/drawer/.partials/components/portal/viewport/component.interface';
import { DrawerPortalViewportPopup } from '@/components/drawer/.partials/components/portal/viewport/popup/component';
import { DrawerPortalViewportPopupProps } from '@/components/drawer/.partials/components/portal/viewport/popup/component.interface';
import { DrawerPortalViewportPopupClose } from '@/components/drawer/.partials/components/portal/viewport/popup/close/component';
import { DrawerPortalViewportPopupCloseProps } from '@/components/drawer/.partials/components/portal/viewport/popup/close/component.interface';
import { DrawerPortalViewportPopupContent } from '@/components/drawer/.partials/components/portal/viewport/popup/content/component';
import { DrawerPortalViewportPopupContentProps } from '@/components/drawer/.partials/components/portal/viewport/popup/content/component.interface';
import { DrawerPortalViewportPopupHandle } from '@/components/drawer/.partials/components/portal/viewport/popup/handle/component';
import { DrawerPortalViewportPopupHandleProps } from '@/components/drawer/.partials/components/portal/viewport/popup/handle/component.interface';
import { DrawerTrigger } from '@/components/drawer/.partials/components/trigger/component';
import { DrawerTriggerProps } from '@/components/drawer/.partials/components/trigger/component.interface';

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
