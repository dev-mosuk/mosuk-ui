import type { PropsOf } from '@/components/avatar/.partials/utilities/props-of';
import type { CSSProperties, ReactNode, Ref } from 'react';

type AvatarFallbackOwnProps<C> = {
  as?: C;
  ref?: Ref<any>;
  delayMs?: number;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
};

export type AvatarFallbackProps<C = 'span'> = AvatarFallbackOwnProps<C> &
  Omit<PropsOf<C>, 'as' | 'ref' | 'className' | 'style' | 'children'>;
