import { ReactNode, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

export type DrawerViewportPopupHandleProps<C = 'div'> = {
  as?: C;
  ref?: Ref<any>;
  className?: string;
  children?: ReactNode;
} & Omit<PropsOf<C>, 'as' | 'ref' | 'className' | 'children'>;
