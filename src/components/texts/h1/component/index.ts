import {
    H1 as BaseH1
} from './component';
import type { H1Props } from './component.interface';
import { H1Icon } from './icon/component';
import { H1IconProps } from './icon/component.interface';
import { H1Text } from './text/component';
import { H1TextProps } from './text/component.interface';

export const H1 = Object.assign(BaseH1, {
  Icon: H1Icon,
  Text: H1Text,
});

export namespace H1 {
  export type Props = H1Props;

  export namespace Icon {
    export type Props = H1IconProps;
  }

  export namespace Text {
    export type Props = H1TextProps;
  }
}
