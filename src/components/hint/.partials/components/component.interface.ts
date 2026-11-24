import type {
  HintAnimation,
  HintColor,
  HintPress,
} from '@/components/hint/.partials/enums/component.enums';
import type {
  ComponentPropsWithoutRef,
  ElementType,
  PointerEventHandler,
  Ref,
} from 'react';

export type HintProps<C extends ElementType = 'p'> = {
  as?: C;
  ref?: Ref<any>;
  color?: HintColor | `${HintColor}`;
  animation?: HintAnimation | `${HintAnimation}`;
  press?: HintPress | `${HintPress}` | false;
  onPointerDown?: PointerEventHandler<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref' | 'color' | 'onPointerDown'>;
