import { DrawerClose } from '@/components/drawer/.partials/components/close/component';
import { DrawerCloseProps } from '@/components/drawer/.partials/components/close/component.interface';
import { Drawer as Component } from '@/components/drawer/.partials/components/component';
import { DrawerProps as ComponentProps } from '@/components/drawer/.partials/components/component.interface';
import { DrawerOpen } from '@/components/drawer/.partials/components/open/component';
import { DrawerOpenProps } from '@/components/drawer/.partials/components/open/component.interface';
import { DrawerViewportBackdrop } from '@/components/drawer/.partials/components/viewport-backdrop/component';
import { DrawerViewportBackdropProps } from '@/components/drawer/.partials/components/viewport-backdrop/component.interface';
import { DrawerViewportPopupBody } from '@/components/drawer/.partials/components/viewport-popup-body/component';
import { DrawerViewportPopupBodyProps } from '@/components/drawer/.partials/components/viewport-popup-body/component.interface';
import { DrawerViewportPopupFooter } from '@/components/drawer/.partials/components/viewport-popup-footer/component';
import { DrawerViewportPopupFooterProps } from '@/components/drawer/.partials/components/viewport-popup-footer/component.interface';
import { DrawerViewportPopupHandle } from '@/components/drawer/.partials/components/viewport-popup-handle/component';
import { DrawerViewportPopupHandleProps } from '@/components/drawer/.partials/components/viewport-popup-handle/component.interface';
import { DrawerViewportPopupHeader } from '@/components/drawer/.partials/components/viewport-popup-header/component';
import { DrawerViewportPopupHeaderProps } from '@/components/drawer/.partials/components/viewport-popup-header/component.interface';
import { DrawerViewportPopup } from '@/components/drawer/.partials/components/viewport-popup/component';
import { DrawerViewportPopupProps } from '@/components/drawer/.partials/components/viewport-popup/component.interface';
import { DrawerViewport } from '@/components/drawer/.partials/components/viewport/component';
import { DrawerViewportProps } from '@/components/drawer/.partials/components/viewport/component.interface';
import {
  DrawerDirection,
  DrawerVariant,
} from '@/components/drawer/.partials/enums/component.enums';
import type { ElementType } from 'react';

export const Drawer = Object.assign(Component, {
  Open: DrawerOpen,
  Close: DrawerClose,
  Viewport: Object.assign(DrawerViewport, {
    Backdrop: DrawerViewportBackdrop,
    Popup: Object.assign(DrawerViewportPopup, {
      Handle: DrawerViewportPopupHandle,
      Header: DrawerViewportPopupHeader,
      Body: DrawerViewportPopupBody,
      Footer: DrawerViewportPopupFooter,
    }),
  }),
  ENUMS: {
    Direction: DrawerDirection,
    Variant: DrawerVariant,
  },
});

export namespace Drawer {
  export type Props = ComponentProps;

  export namespace Open {
    export type Props = DrawerOpenProps;
  }

  export namespace Close {
    export type Props<C extends ElementType = 'button'> = DrawerCloseProps<C>;
  }

  export namespace Viewport {
    export type Props = DrawerViewportProps;

    export namespace Backdrop {
      export type Props = DrawerViewportBackdropProps;
    }

    export namespace Popup {
      export type Props = DrawerViewportPopupProps;

      export namespace Handle {
        export type Props<C extends ElementType = 'div'> =
          DrawerViewportPopupHandleProps<C>;
      }

      export namespace Header {
        export type Props<C extends ElementType = 'div'> =
          DrawerViewportPopupHeaderProps<C>;
      }

      export namespace Body {
        export type Props<C extends ElementType = 'div'> =
          DrawerViewportPopupBodyProps<C>;
      }

      export namespace Footer {
        export type Props<C extends ElementType = 'div'> =
          DrawerViewportPopupFooterProps<C>;
      }
    }
  }
}
