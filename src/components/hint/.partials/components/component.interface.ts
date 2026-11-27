import type {
  HintAnimation,
  HintPress,
  HintVariant,
} from '@/components/hint/.partials/enums/component.enums';
import type { TypographyType } from '@/components/typography/.partials/enums/component.enums';
import type { PointerEventHandler, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

export type HintProps<C = 'p'> = {
  as?: C;
  ref?: Ref<any>;
  type?: TypographyType | `${TypographyType}`;
  variant?: HintVariant | `${HintVariant}`;
  animation?: HintAnimation | `${HintAnimation}`;
  press?: HintPress | `${HintPress}` | false;
  onPointerDown?: PointerEventHandler<any>;
  className?: string;
} & Omit<
  PropsOf<C>,
  'as' | 'ref' | 'type' | 'color' | 'onPointerDown' | 'className'
>;
