import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';
import { HintTypeEnum } from './component.enums';

export type HintProps<C extends ElementType = 'p'> = {
  as?: C;
  ref?: Ref<any>;
  type?: HintTypeEnum;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
