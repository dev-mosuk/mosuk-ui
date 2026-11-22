import { Avatar as Component } from '@/components/avatar/.partials/components/component';
import type { AvatarProps } from '@/components/avatar/.partials/components/component.interface';
import { AvatarFallback } from '@/components/avatar/.partials/components/fallback/component';
import type { AvatarFallbackProps } from '@/components/avatar/.partials/components/fallback/component.interface';
import { AvatarImage } from '@/components/avatar/.partials/components/image/component';
import type { AvatarImageProps } from '@/components/avatar/.partials/components/image/component.interface';
import { AvatarVariant } from '@/components/avatar/.partials/enums/component.enums';

export const Avatar = Object.assign(Component, {
  Image: AvatarImage,
  Fallback: AvatarFallback,
  ENUMS: {
    Variant: AvatarVariant,
  },
});

export namespace Avatar {
  export type Props<C = 'div'> = AvatarProps<C>;

  export namespace Image {
    export type Props<C = 'img'> = AvatarImageProps<C>;
  }

  export namespace Fallback {
    export type Props<C = 'span'> = AvatarFallbackProps<C>;
  }
}
