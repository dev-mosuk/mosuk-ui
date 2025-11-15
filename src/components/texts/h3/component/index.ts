import {
    H3 as BaseH3
} from './component';
import type { H3Props } from './component.interface';
import { H3Icon } from './icon/component';
import { H3IconProps } from './icon/component.interface';
import { H3Text } from './text/component';
import { H3TextProps } from './text/component.interface';

export const H3 = Object.assign(BaseH3, {
  Icon: H3Icon,
  Text: H3Text,
});

export namespace H3 {
  export type Props = H3Props;

  export namespace Icon {
    export type Props = H3IconProps;
  }

  export namespace Text {
    export type Props = H3TextProps;
  }
}
