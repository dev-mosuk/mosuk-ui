import {
    P as BaseP
} from './component';
import type { PProps } from './component.interface';
import { PIcon } from './icon/component';
import { PIconProps } from './icon/component.interface';
import { PText } from './text/component';
import { PTextProps } from './text/component.interface';

export const P = Object.assign(BaseP, {
  Icon: PIcon,
  Text: PText,
});

export namespace P {
  export type Props = PProps;

  export namespace Icon {
    export type Props = PIconProps;
  }

  export namespace Text {
    export type Props = PTextProps;
  }
}
