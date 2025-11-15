import { Backdrop } from '../../../backdrop/component';
import { BackdropProps } from '../../../backdrop/component.interface';
import { Body } from '../../../body/component';
import { BodyProps } from '../../../body/component.interface';
import { Context } from '../../../context/component';
import { ContextProps } from '../../../context/component.interface';
import { Dialog } from '../../../dialog/component';
import { DialogProps } from '../../../dialog/component.interface';
import { Footer } from '../../../footer/component';
import { FooterProps } from '../../../footer/component.interface';
import { Header } from '../../../header/component';
import { HeaderProps } from '../../../header/component.interface';
import { Dialog as DialogComponent } from './dialog/component';
import { DialogProps as DialogComponentProps } from './dialog/component.interface';
import { Images } from './dialog/images/component';
import { ImagesProps } from './dialog/images/component.interface';
import { Image } from './dialog/images/image/component';
import { ImageProps } from './dialog/images/image/component.interface';

const ParentDialog = (props: DialogProps) => Dialog(props);
 
export const DialogImages = Object.assign(ParentDialog, {
  Context: Context,
  Backdrop: Backdrop,
  Dialog: Object.assign(DialogComponent, {
    Header: Header,
    Body: Body,
    Footer: Footer,

    Images: Object.assign(Images, {
      Image: Image
    }), 
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
    
    export namespace Images {
      export type Props = ImagesProps;

      export namespace Image {
        export type Props = ImageProps;
      }
    }
  }
}
