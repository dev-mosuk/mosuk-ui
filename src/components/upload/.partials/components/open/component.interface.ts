import { ReactNode, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

export type UploadOpenProps<C = 'label'> = {
  as?: C;
  ref?: Ref<any>;
  htmlFor?: string;
  className?: string;
  children?: ReactNode;
} & Omit<PropsOf<C>, 'as' | 'ref' | 'htmlFor' | 'className' | 'children'>;
