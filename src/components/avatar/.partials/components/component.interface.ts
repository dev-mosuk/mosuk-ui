import type { AvatarVariant } from '@/components/avatar/.partials/enums/component.enums';
import type { PropsOf } from '@/components/avatar/.partials/utilities/props-of';
import type { CSSProperties, ReactNode, Ref } from 'react';

type AvatarOwnProps<C> = {
  as?: C;
  ref?: Ref<any>;
  size?: number;
  variant?: AvatarVariant | `${AvatarVariant}`;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
};

export type AvatarProps<C = 'div'> = AvatarOwnProps<C> &
  Omit<PropsOf<C>, 'as' | 'ref' | 'className' | 'style' | 'children' | 'color'>;
