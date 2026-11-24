import { DialogClose } from '@/components/dialog/.partials/components/close/component';
import { DialogCloseProps } from '@/components/dialog/.partials/components/close/component.interface';
import { Dialog as Component } from '@/components/dialog/.partials/components/component';
import { DialogProps as ComponentProps } from '@/components/dialog/.partials/components/component.interface';
import { DialogOpen } from '@/components/dialog/.partials/components/open/component';
import { DialogOpenProps } from '@/components/dialog/.partials/components/open/component.interface';
import { DialogViewportBackdrop } from '@/components/dialog/.partials/components/viewport-backdrop/component';
import { DialogViewportBackdropProps } from '@/components/dialog/.partials/components/viewport-backdrop/component.interface';
import { DialogViewportPopupBody } from '@/components/dialog/.partials/components/viewport-popup-body/component';
import { DialogViewportPopupBodyProps } from '@/components/dialog/.partials/components/viewport-popup-body/component.interface';
import { DialogViewportPopupFooter } from '@/components/dialog/.partials/components/viewport-popup-footer/component';
import { DialogViewportPopupFooterProps } from '@/components/dialog/.partials/components/viewport-popup-footer/component.interface';
import { DialogViewportPopupHeader } from '@/components/dialog/.partials/components/viewport-popup-header/component';
import { DialogViewportPopupHeaderProps } from '@/components/dialog/.partials/components/viewport-popup-header/component.interface';
import { DialogViewportPopup } from '@/components/dialog/.partials/components/viewport-popup/component';
import { DialogViewportPopupProps } from '@/components/dialog/.partials/components/viewport-popup/component.interface';
import { DialogViewport } from '@/components/dialog/.partials/components/viewport/component';
import { DialogViewportProps } from '@/components/dialog/.partials/components/viewport/component.interface';
import { DialogVariant } from '@/components/dialog/.partials/enums/component.enums';
import type { ElementType } from 'react';

export const Dialog = Object.assign(Component, {
  Open: DialogOpen,
  Close: DialogClose,
  Viewport: Object.assign(DialogViewport, {
    Backdrop: DialogViewportBackdrop,
    Popup: Object.assign(DialogViewportPopup, {
      Header: DialogViewportPopupHeader,
      Body: DialogViewportPopupBody,
      Footer: DialogViewportPopupFooter,
    }),
  }),
  ENUMS: {
    Variant: DialogVariant,
  },
});

export namespace Dialog {
  export type Props = ComponentProps;

  export namespace Open {
    export type Props = DialogOpenProps;
  }

  export namespace Close {
    export type Props = DialogCloseProps;
  }

  export namespace Viewport {
    export type Props = DialogViewportProps;

    export namespace Backdrop {
      export type Props = DialogViewportBackdropProps;
    }

    export namespace Popup {
      export type Props = DialogViewportPopupProps;

      export namespace Header {
        export type Props<C extends ElementType = 'div'> =
          DialogViewportPopupHeaderProps<C>;
      }

      export namespace Body {
        export type Props<C extends ElementType = 'div'> =
          DialogViewportPopupBodyProps<C>;
      }

      export namespace Footer {
        export type Props<C extends ElementType = 'div'> =
          DialogViewportPopupFooterProps<C>;
      }
    }
  }
}
