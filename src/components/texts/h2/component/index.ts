import {
    H2 as BaseH2
} from './component';
import type { H2Props } from './component.interface';
import { H2Icon } from './icon/component';
import { H2IconProps } from './icon/component.interface';
import { H2Text } from './text/component';
import { H2TextProps } from './text/component.interface';

export const H2 = Object.assign(BaseH2, {
  Icon: H2Icon,
  Text: H2Text,
});

export namespace H2 {
  export type Props = H2Props;

  export namespace Icon {
    export type Props = H2IconProps;
  }

  export namespace Text {
    export type Props = H2TextProps;
  }
}
