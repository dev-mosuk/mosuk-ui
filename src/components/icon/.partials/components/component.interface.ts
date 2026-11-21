import type {
  IconPress,
  IconVariant,
} from '@/components/icon/.partials/enums/component.enums';
import type { PropsOf } from '@/components/icon/.partials/utilities/props-of';
import type { CSSProperties, PointerEventHandler, ReactNode, Ref } from 'react';

type IconOwnProps<C> = {
  as?: C;
  ref?: Ref<any>;
  variant?: IconVariant | `${IconVariant}`;
  size?: number;
  press?: IconPress | `${IconPress}` | false;
  isPending?: boolean;
  isLoading?: boolean;
  className?: string;
  style?: CSSProperties;
  isDisabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onPointerDown?: PointerEventHandler<any>;
  children?: ReactNode;
};

export type IconProps<C = 'button'> = IconOwnProps<C> &
  Omit<
    PropsOf<C>,
    | 'as'
    | 'ref'
    | 'width'
    | 'className'
    | 'style'
    | 'disabled'
    | 'type'
    | 'onPointerDown'
    | 'children'
  >;
