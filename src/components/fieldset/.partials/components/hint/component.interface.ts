import type { FieldsetHintType } from '@/components/fieldset/.partials/components/hint/component.enums';
import type { ReactNode, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

export type FieldsetHintProps<C = 'p'> = {
  as?: C;
  ref?: Ref<any>;
  type?: FieldsetHintType | `${FieldsetHintType}`;
  children?: ReactNode;
  className?: string;
} & Omit<PropsOf<C>, 'as' | 'ref' | 'children' | 'className'>;
