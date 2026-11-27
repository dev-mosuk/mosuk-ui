import { ReactNode, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

export type SectionProps<C = 'section'> = {
  as?: C;
  ref?: Ref<any>;
  className?: string;
  children?: ReactNode;
} & Omit<PropsOf<C>, 'as' | 'ref' | 'className' | 'children'>;
