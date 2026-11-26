import { Image as Component } from '@/components/image/.partials/components/component';
import { ImageProps as ComponentProps } from '@/components/image/.partials/components/component.interface';
import { ImageFallback } from '@/components/image/.partials/components/fallback/component';
import { ImageFallbackProps } from '@/components/image/.partials/components/fallback/component.interface';
import { ImageLoader } from '@/components/image/.partials/components/loader/component';
import { ImageLoaderProps } from '@/components/image/.partials/components/loader/component.interface';
import { ImageView } from '@/components/image/.partials/components/view/component';
import { ImageViewProps } from '@/components/image/.partials/components/view/component.interface';
import {
  ImageAnimation,
  ImagePress,
  ImageVariant,
} from '@/components/image/.partials/enums/component.enums';

export const Image = Object.assign(Component, {
  Loader: ImageLoader,
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

  export namespace Loader {
    export type Props = ImageLoaderProps;
  }

  export namespace View {
    export type Props<C = 'img'> = ImageViewProps<C>;
  }

  export namespace Fallback {
    export type Props<C = 'span'> = ImageFallbackProps<C>;
  }
}
