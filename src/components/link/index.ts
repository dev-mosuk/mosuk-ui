import { Link as Component } from '@/components/link/.partials/components/component';
import type { LinkProps } from '@/components/link/.partials/components/component.interface';
import { LinkIcon } from '@/components/link/.partials/components/icon/component';
import type { LinkIconProps } from '@/components/link/.partials/components/icon/component.interface';
import {
  LinkUnderline,
  LinkVariant,
} from '@/components/link/.partials/enums/component.enums';

export const Link = Object.assign(Component, {
  Icon: LinkIcon,
  ENUMS: {
    Variant: LinkVariant,
    Underline: LinkUnderline,
  },
});

export namespace Link {
  export type Props<C = 'a'> = LinkProps<C>;

  export namespace Icon {
    export type Props<C = 'span'> = LinkIconProps<C>;
  }
}
