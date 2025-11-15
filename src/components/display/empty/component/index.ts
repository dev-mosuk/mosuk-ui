import {
    Empty as BaseEmpty,
    EmptyButtons as BaseEmptyButtons,
    EmptyIcon as BaseEmptyIcon,
    EmptyTitle as BaseEmptyTitle,
} from './component';
import type { EmptyButtonsProps, EmptyIconProps, EmptyProps, EmptyTitleProps } from './component.interface';

export function Empty(props: EmptyProps) {
  return BaseEmpty(props);
}

Empty.Icon = BaseEmptyIcon;
Empty.Title = BaseEmptyTitle;
Empty.Buttons = BaseEmptyButtons;

export namespace Empty {
  export type Props = EmptyProps;

  export declare const Icon: typeof BaseEmptyIcon;

  export namespace Icon {
    export type Props = EmptyIconProps;
  }

  export declare const Title: typeof BaseEmptyTitle;

  export namespace Title {
    export type Props = EmptyTitleProps;
  }

  export declare const Buttons: typeof BaseEmptyButtons;

  export namespace Buttons {
    export type Props = EmptyButtonsProps;
  }
}
    