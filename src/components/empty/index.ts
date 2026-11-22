import { EmptyButtons } from '@/components/empty/.partials/components/buttons/component';
import { EmptyButtonsProps } from '@/components/empty/.partials/components/buttons/component.interface';
import { Empty as BaseEmpty } from '@/components/empty/.partials/components/component';
import type { EmptyProps } from '@/components/empty/.partials/components/component.interface';
import { EmptyContentDescription } from '@/components/empty/.partials/components/content-description/component';
import { EmptyContentDescriptionProps } from '@/components/empty/.partials/components/content-description/component.interface';
import { EmptyContentTitle } from '@/components/empty/.partials/components/content-title/component';
import { EmptyContentTitleProps } from '@/components/empty/.partials/components/content-title/component.interface';
import { EmptyContent as BaseEmptyContent } from '@/components/empty/.partials/components/content/component';
import { EmptyContentProps } from '@/components/empty/.partials/components/content/component.interface';
import { EmptyIcon } from '@/components/empty/.partials/components/icon/component';
import { EmptyIconProps } from '@/components/empty/.partials/components/icon/component.interface';

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
