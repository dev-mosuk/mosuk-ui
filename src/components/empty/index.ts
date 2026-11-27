import {
  CardAnimation,
  CardPress,
  CardVariant,
} from '@/components/card/.partials/enums/component.enums';
import { EmptyButton } from '@/components/empty/.partials/components/button/component';
import type { EmptyButtonProps } from '@/components/empty/.partials/components/button/component.interface';
import { EmptyComment } from '@/components/empty/.partials/components/comment/component';
import type { EmptyCommentProps } from '@/components/empty/.partials/components/comment/component.interface';
import { Empty as BaseEmpty } from '@/components/empty/.partials/components/component';
import type { EmptyProps } from '@/components/empty/.partials/components/component.interface';
import { EmptyIcon } from '@/components/empty/.partials/components/icon/component';
import type { EmptyIconProps } from '@/components/empty/.partials/components/icon/component.interface';
import { EmptySubject } from '@/components/empty/.partials/components/subject/component';
import type { EmptySubjectProps } from '@/components/empty/.partials/components/subject/component.interface';

export const Empty = Object.assign(BaseEmpty, {
  Icon: EmptyIcon,
  Subject: EmptySubject,
  Comment: EmptyComment,
  Button: EmptyButton,
  ENUMS: {
    Variant: CardVariant,
    Animation: CardAnimation,
    Press: CardPress,
  },
});

export namespace Empty {
  export type Props<C = 'section'> = EmptyProps<C>;

  export namespace Icon {
    export type Props = EmptyIconProps;
  }

  export namespace Subject {
    export type Props<C = 'p'> = EmptySubjectProps<C>;
  }

  export namespace Comment {
    export type Props<C = 'p'> = EmptyCommentProps<C>;
  }

  export namespace Button {
    export type Props<C = 'button'> = EmptyButtonProps<C>;
  }
}
