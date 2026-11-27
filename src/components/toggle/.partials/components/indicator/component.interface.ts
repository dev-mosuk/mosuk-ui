import { CSSProperties, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

export type ToggleIndicatorProps<C = 'span'> = {
  as?: C;
  ref?: Ref<any>;
  className?: string;
  style?: CSSProperties;
} & Omit<PropsOf<C>, 'as' | 'ref' | 'className' | 'style'>;
