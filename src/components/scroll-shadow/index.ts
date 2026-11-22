import { ScrollShadow as Component } from '@/components/scroll-shadow/.partials/components/component';
import {
  ScrollShadowProps,
  ScrollShadowVisibility,
} from '@/components/scroll-shadow/.partials/components/component.interface';

export const ScrollShadow = Object.assign(Component, {});

export namespace ScrollShadow {
  export type Props = ScrollShadowProps;
  export type Visibility = ScrollShadowVisibility;
}
