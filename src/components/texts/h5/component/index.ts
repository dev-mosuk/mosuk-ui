import {
  H5 as BaseH5
} from './component';
import type { H5Props } from './component.interface';
import { H5Icon } from './icon/component';
import { H5IconProps } from './icon/component.interface';
import { H5Text } from './text/component';
import { H5TextProps } from './text/component.interface';

export const H5 = Object.assign(BaseH5, {
  Icon: H5Icon,
  Text: H5Text,
});

export namespace H5 {
  export type Props = H5Props;

  export namespace Icon {
    export type Props = H5IconProps;
  }

  export namespace Text {
    export type Props = H5TextProps;
  }
}
