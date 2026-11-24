import { Avatar as Component } from '@/components/avatar/.partials/components/component';
import type { AvatarProps } from '@/components/avatar/.partials/components/component.interface';
import { AvatarFallback } from '@/components/avatar/.partials/components/fallback/component';
import type { AvatarFallbackProps } from '@/components/avatar/.partials/components/fallback/component.interface';
import { AvatarView } from '@/components/avatar/.partials/components/view/component';
import type { AvatarViewProps } from '@/components/avatar/.partials/components/view/component.interface';
import {
  AvatarAnimation,
  AvatarPress,
  AvatarVariant,
} from '@/components/avatar/.partials/enums/component.enums';

export const Avatar = Object.assign(Component, {
  View: AvatarView,
  Fallback: AvatarFallback,
  ENUMS: {
    Variant: AvatarVariant,
    Animation: AvatarAnimation,
    Press: AvatarPress,
  },
});

export namespace Avatar {
  export type Props<C = 'div'> = AvatarProps<C>;

  export namespace View {
    export type Props<C = 'img'> = AvatarViewProps<C>;
  }

  export namespace Fallback {
    export type Props<C = 'span'> = AvatarFallbackProps<C>;
  }
}
