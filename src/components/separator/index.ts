import { Separator as Component } from '@/components/separator/.partials/components/component';
import type { SeparatorProps as ComponentProps } from '@/components/separator/.partials/components/component.interface';
import {
  SeparatorOrientation,
  SeparatorVariant,
} from '@/components/separator/.partials/enums/component.enums';
import type { ElementType } from 'react';

export const Separator = Object.assign(Component, {
  ENUMS: {
    Orientation: SeparatorOrientation,
    Variant: SeparatorVariant,
  },
});

export namespace Separator {
  export type Props<C extends ElementType = 'hr'> = ComponentProps<C>;
}
