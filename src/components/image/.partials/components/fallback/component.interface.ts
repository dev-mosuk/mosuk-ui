import type { PropsOf } from '@/types/props-of';
import type { CSSProperties, ReactNode, Ref } from 'react';

type ImageFallbackOwnProps<C> = {
  as?: C;
  ref?: Ref<any>;
  delayMs?: number;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
};

export type ImageFallbackProps<C = 'span'> = ImageFallbackOwnProps<C> &
  Omit<PropsOf<C>, 'as' | 'ref' | 'className' | 'style' | 'children'>;
