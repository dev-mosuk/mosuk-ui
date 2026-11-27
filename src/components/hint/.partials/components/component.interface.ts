import type {
  HintAnimation,
  HintColor,
  HintPress,
} from '@/components/hint/.partials/enums/component.enums';
import type { PointerEventHandler, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

export type HintProps<C = 'p'> = {
  as?: C;
  ref?: Ref<any>;
  color?: HintColor | `${HintColor}`;
  animation?: HintAnimation | `${HintAnimation}`;
  press?: HintPress | `${HintPress}` | false;
  onPointerDown?: PointerEventHandler<any>;
  className?: string;
} & Omit<PropsOf<C>, 'as' | 'ref' | 'color' | 'onPointerDown' | 'className'>;
