import { Image as Component } from '@/components/image/.partials/components/component';
import { ImageProps as ComponentProps } from '@/components/image/.partials/components/component.interface';
import { ImageDots } from '@/components/image/.partials/components/dots/component';
import { ImageDotsProps } from '@/components/image/.partials/components/dots/component.interface';
import { ImageFallback } from '@/components/image/.partials/components/fallback/component';
import { ImageFallbackProps } from '@/components/image/.partials/components/fallback/component.interface';
import { ImageView } from '@/components/image/.partials/components/view/component';
import { ImageViewProps } from '@/components/image/.partials/components/view/component.interface';
import {
  ImageAnimation,
  ImagePress,
  ImageVariant,
} from '@/components/image/.partials/enums/component.enums';

export const Image = Object.assign(Component, {
  Dots: ImageDots,
  View: ImageView,
  Fallback: ImageFallback,
  ENUMS: {
    Variant: ImageVariant,
    Animation: ImageAnimation,
    Press: ImagePress,
  },
});

export namespace Image {
  export type Props = ComponentProps;

  export namespace Dots {
    export type Props = ImageDotsProps;
  }

  export namespace View {
    export type Props = ImageViewProps;
  }

  export namespace Fallback {
    export type Props<C = 'span'> = ImageFallbackProps<C>;
  }
}
