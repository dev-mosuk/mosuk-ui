import type {
  SeparatorOrientation,
  SeparatorVariant,
} from '@/components/separator/.partials/enums/component.enums';
import type { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type SeparatorProps<C extends ElementType = 'hr'> = {
  as?: C;
  ref?: Ref<any>;
  orientation?: SeparatorOrientation | `${SeparatorOrientation}`;
  variant?: SeparatorVariant | `${SeparatorVariant}`;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref' | 'color'>;
