import { Backdrop } from './backdrop/component';
import { BackdropProps } from './backdrop/component.interface';
import { Dialog as BaseDialog } from './component';
import { DialogProps } from './component.interface';
import { Context } from './context/component';
import { ContextProps } from './context/component.interface';
import { Body } from './dialog/body/component';
import { BodyProps } from './dialog/body/component.interface';
import { Dialog as DialogComponent } from './dialog/component';
import { DialogProps as DialogComponentProps } from './dialog/component.interface';
import { Footer } from './dialog/footer/component';
import { FooterProps } from './dialog/footer/component.interface';
import { Header } from './dialog/header/component';
import { HeaderProps } from './dialog/header/component.interface';

export const Dialog = Object.assign(BaseDialog, {
  Context: Context,
  Backdrop: Backdrop,
  Dialog: Object.assign(DialogComponent, {
    Header: Header,
    Body: Body,
    Footer: Footer,
  }),
});

export namespace Dialog {
  export type Props = DialogProps;

  export namespace Context {
    export type Props = ContextProps;
  }

  export namespace Backdrop {
    export type Props = BackdropProps;
  }

  export namespace Dialog {
    export type Props = DialogComponentProps;

    export namespace Header {
      export type Props = HeaderProps;
    }

    export namespace Body {
      export type Props = BodyProps;
    }

    export namespace Footer {
      export type Props = FooterProps;
    }
  }
}
