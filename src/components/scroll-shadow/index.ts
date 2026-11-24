import { ScrollShadow as Component } from '@/components/scroll-shadow/.partials/components/component';
import {
  ScrollShadowProps,
  ScrollShadowVisibility,
} from '@/components/scroll-shadow/.partials/components/component.interface';
import { ScrollShadowVariant } from '@/components/scroll-shadow/.partials/enums/component.enums';

export const ScrollShadow = Object.assign(Component, {
  ENUMS: {
    Variant: ScrollShadowVariant,
  },
});

export namespace ScrollShadow {
  export type Props = ScrollShadowProps;
  export type Visibility = ScrollShadowVisibility;
}
