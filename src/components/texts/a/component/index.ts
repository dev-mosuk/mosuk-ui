import {
    A as BaseA
} from './component';
import type { AProps } from './component.interface';
import { AIcon } from './icon/component';
import { AIconProps } from './icon/component.interface';
import { AText } from './text/component';
import { ATextProps } from './text/component.interface';

export const A = Object.assign(BaseA, {
  Icon: AIcon,
  Text: AText,
});

export namespace A {
  export type Props = AProps;

  export namespace Icon {
    export type Props = AIconProps;
  }

  export namespace Text {
    export type Props = ATextProps;
  }
}
