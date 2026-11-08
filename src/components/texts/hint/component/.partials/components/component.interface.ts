import { HintTypeEnum } from '@/components/texts/hint/component/.partials/component.enums';
import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type HintProps<C extends ElementType = 'p'> = {
  as?: C;
  ref?: Ref<any>;
  type?: HintTypeEnum;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
