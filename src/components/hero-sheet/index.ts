import { HeroSheetBackdrop } from '@/components/hero-sheet/.partials/components/backdrop/component';
import { HeroSheetBackdropProps } from '@/components/hero-sheet/.partials/components/backdrop/component.interface';
import { HeroSheet as Component } from '@/components/hero-sheet/.partials/components/component';
import { HeroSheetProps as ComponentProps } from '@/components/hero-sheet/.partials/components/component.interface';
import { HeroSheetContentHandle } from '@/components/hero-sheet/.partials/components/content-handle/component';
import { HeroSheetContentHandleProps } from '@/components/hero-sheet/.partials/components/content-handle/component.interface';
import { HeroSheetContent } from '@/components/hero-sheet/.partials/components/content/component';
import { HeroSheetContentProps } from '@/components/hero-sheet/.partials/components/content/component.interface';
import { HeroSheetHero } from '@/components/hero-sheet/.partials/components/hero/component';
import { HeroSheetHeroProps } from '@/components/hero-sheet/.partials/components/hero/component.interface';
import {
  HeroSheetDirection,
  HeroSheetVariant,
} from '@/components/hero-sheet/.partials/enums/component.enums';

export const HeroSheet = Object.assign(Component, {
  Hero: HeroSheetHero,
  Backdrop: HeroSheetBackdrop,
  Content: Object.assign(HeroSheetContent, {
    Handle: HeroSheetContentHandle,
  }),
  ENUMS: {
    Direction: HeroSheetDirection,
    Variant: HeroSheetVariant,
  },
});

export namespace HeroSheet {
  export type Props<C = 'div'> = ComponentProps<C>;

  export namespace Hero {
    export type Props<C = 'div'> = HeroSheetHeroProps<C>;
  }

  export namespace Backdrop {
    export type Props<C = 'div'> = HeroSheetBackdropProps<C>;
  }

  export namespace Content {
    export type Props<C = 'div'> = HeroSheetContentProps<C>;

    export namespace Handle {
      export type Props<C = 'div'> = HeroSheetContentHandleProps<C>;
    }
  }
}
