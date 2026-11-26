import type {
  LinkUnderline,
  LinkVariant } from '@/components/link/.partials/enums/component.enums';
import type { PropsOf } from '@/types/props-of';
import type {
  CSSProperties,
  ElementType,
  ReactNode,
  Ref } from 'react';

type LinkOwnProps<C> = {
  as?: C;
  ref?: Ref<any>;
  variant?: LinkVariant | `${LinkVariant}`;
  underline?: LinkUnderline | `${LinkUnderline}`;
  isDisabled?: boolean;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
};

export type LinkProps<C = 'a'> = LinkOwnProps<C> &
  Omit<PropsOf<C>, 'as' | 'ref' | 'style' | 'className' | 'children'>;
