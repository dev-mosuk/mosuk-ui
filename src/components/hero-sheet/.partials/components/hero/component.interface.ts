import type { ReactNode, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

export type HeroSheetHeroProps<C = 'div'> = {
  as?: C;
  ref?: Ref<any>;
  className?: string;
  children?: ReactNode;
} & Omit<PropsOf<C>, 'as' | 'ref' | 'className' | 'children'>;
