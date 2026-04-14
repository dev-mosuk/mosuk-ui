import { EmptyButtons } from './buttons/component';
import { EmptyButtonsProps } from './buttons/component.interface';
import { Empty as BaseEmpty } from './component';
import type { EmptyProps } from './component.interface';
import { EmptyContent as BaseEmptyContent } from './content/component';
import { EmptyContentProps } from './content/component.interface';
import { EmptyContentDescription } from './content/description/component';
import { EmptyContentDescriptionProps } from './content/description/component.interface';
import { EmptyContentTitle } from './content/title/component';
import { EmptyContentTitleProps } from './content/title/component.interface';
import { EmptyIcon } from './icon/component';
import { EmptyIconProps } from './icon/component.interface';

export const Empty = Object.assign(BaseEmpty, {
  Icon: EmptyIcon,
  Content: Object.assign(BaseEmptyContent, {
    Title: EmptyContentTitle,
    Description: EmptyContentDescription,
  }),
  Buttons: EmptyButtons,
});

export namespace Empty {
  export type Props = EmptyProps;

  export namespace Icon {
    export type Props = EmptyIconProps;
  }

  export namespace Content {
    export type Props = EmptyContentProps;

    export namespace Title {
      export type Props = EmptyContentTitleProps;
    }

    export namespace Description {
      export type Props = EmptyContentDescriptionProps;
    }
  }

  export namespace Buttons {
    export type Props = EmptyButtonsProps;
  }
}
