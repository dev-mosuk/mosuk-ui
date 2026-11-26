import type { ArticleOrientation } from '@/components/article/.partials/enums/component.enums';
import type { PropsOf } from '@/types/props-of';
import type {
  CSSProperties,
  ElementType,
  ReactNode,
  Ref } from 'react';

export type ArticleProps<C = 'article'> = {
  as?: C;
  ref?: Ref<any>;
  orientation?: ArticleOrientation | `${ArticleOrientation}`;
  isDisabled?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & Omit<PropsOf<C>, 'as' | 'ref' | 'className' | 'style' | 'children'>;
