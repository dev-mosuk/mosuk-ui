import type {
  AvatarAnimation,
  AvatarPress,
  AvatarVariant,
} from '@/components/avatar/.partials/enums/component.enums';
import type { PropsOf } from '@/components/avatar/.partials/utilities/props-of';
import type { CSSProperties, PointerEventHandler, ReactNode, Ref } from 'react';

type AvatarOwnProps<C> = {
  as?: C;
  ref?: Ref<any>;
  size?: number;
  variant?: AvatarVariant | `${AvatarVariant}`;
  animation?: AvatarAnimation | `${AvatarAnimation}`;
  press?: AvatarPress | `${AvatarPress}` | false;
  isDisabled?: boolean;
  style?: CSSProperties;
  className?: string;
  onPointerDown?: PointerEventHandler<any>;
  children?: ReactNode;
};

export type AvatarProps<C = 'div'> = AvatarOwnProps<C> &
  Omit<
    PropsOf<C>,
    | 'as'
    | 'ref'
    | 'className'
    | 'style'
    | 'onPointerDown'
    | 'children'
    | 'color'
  >;
