import type {
  SeparatorOrientation,
  SeparatorVariant,
} from '@/components/separator/.partials/enums/component.enums';
import type { Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

export type SeparatorProps<C = 'hr'> = {
  as?: C;
  ref?: Ref<any>;
  orientation?: SeparatorOrientation | `${SeparatorOrientation}`;
  variant?: SeparatorVariant | `${SeparatorVariant}`;
  className?: string;
} & Omit<PropsOf<C>, 'as' | 'ref' | 'color' | 'className'>;
