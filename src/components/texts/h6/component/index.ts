import {
    H6 as BaseH6
} from './component';
import type { H6Props } from './component.interface';
import { H6Icon } from './icon/component';
import { H6IconProps } from './icon/component.interface';
import { H6Text } from './text/component';
import { H6TextProps } from './text/component.interface';

export const H6 = Object.assign(BaseH6, {
  Icon: H6Icon,
  Text: H6Text,
});

export namespace H6 {
  export type Props = H6Props;

  export namespace Icon {
    export type Props = H6IconProps;
  }

  export namespace Text {
    export type Props = H6TextProps;
  }
}
