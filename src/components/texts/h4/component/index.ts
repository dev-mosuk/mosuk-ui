import {
  H4 as BaseH4
} from './component';
import type { H4Props } from './component.interface';
import { H4Icon } from './icon/component';
import { H4IconProps } from './icon/component.interface';
import { H4Text } from './text/component';
import { H4TextProps } from './text/component.interface';

export const H4 = Object.assign(BaseH4, {
  Icon: H4Icon,
  Text: H4Text,
});

export namespace H4 {
  export type Props = H4Props;

  export namespace Icon {
    export type Props = H4IconProps;
  }

  export namespace Text {
    export type Props = H4TextProps;
  }
}
