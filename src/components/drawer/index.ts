import { DrawerClose } from '@/components/drawer/.partials/components/close/component';
import { DrawerCloseProps } from '@/components/drawer/.partials/components/close/component.interface';
import { Drawer as Component } from '@/components/drawer/.partials/components/component';
import { DrawerProps as ComponentProps } from '@/components/drawer/.partials/components/component.interface';
import { DrawerOpen } from '@/components/drawer/.partials/components/open/component';
import { DrawerOpenProps } from '@/components/drawer/.partials/components/open/component.interface';
import { DrawerViewportBackdrop } from '@/components/drawer/.partials/components/viewport-backdrop/component';
import { DrawerViewportBackdropProps } from '@/components/drawer/.partials/components/viewport-backdrop/component.interface';
import { DrawerViewportPopupHandle } from '@/components/drawer/.partials/components/viewport-popup-handle/component';
import { DrawerViewportPopupHandleProps } from '@/components/drawer/.partials/components/viewport-popup-handle/component.interface';
import { DrawerViewportPopup } from '@/components/drawer/.partials/components/viewport-popup/component';
import { DrawerViewportPopupProps } from '@/components/drawer/.partials/components/viewport-popup/component.interface';
import { DrawerViewport } from '@/components/drawer/.partials/components/viewport/component';
import { DrawerViewportProps } from '@/components/drawer/.partials/components/viewport/component.interface';
import { DrawerDirection } from '@/components/drawer/.partials/enums/component.enums';

export const Drawer = Object.assign(Component, {
  Open: DrawerOpen,
  Close: DrawerClose,
  Viewport: Object.assign(DrawerViewport, {
    Backdrop: DrawerViewportBackdrop,
    Popup: Object.assign(DrawerViewportPopup, {
      Handle: DrawerViewportPopupHandle,
    }),
  }),
  ENUMS: {
    Direction: DrawerDirection,
  },
});

export namespace Drawer {
  export type Props = ComponentProps;

  export namespace Open {
    export type Props = DrawerOpenProps;
  }

  export namespace Close {
    export type Props = DrawerCloseProps;
  }

  export namespace Viewport {
    export type Props = DrawerViewportProps;

    export namespace Backdrop {
      export type Props = DrawerViewportBackdropProps;
    }

    export namespace Popup {
      export type Props = DrawerViewportPopupProps;

      export namespace Handle {
        export type Props = DrawerViewportPopupHandleProps;
      }
    }
  }
}
