import type {
  FileAnimation,
  FilePress,
  FileVariant,
} from '@/components/file/.partials/enums/component.enums';
import type { PropsOf } from '@/types/props-of';
import type { CSSProperties, PointerEventHandler, ReactNode, Ref } from 'react';

type FileOwnProps<C> = {
  as?: C;
  ref?: Ref<any>;
  size?: number;
  variant?: FileVariant | `${FileVariant}`;
  animation?: FileAnimation | `${FileAnimation}`;
  press?: FilePress | `${FilePress}` | false;
  isDisabled?: boolean;
  name?: string | null;
  extension?: string | null;
  style?: CSSProperties;
  className?: string;
  onPointerDown?: PointerEventHandler<any>;
  children?: ReactNode;
};

export type FileProps<C = 'div'> = FileOwnProps<C> &
  Omit<
    PropsOf<C>,
    | 'as'
    | 'ref'
    | 'className'
    | 'style'
    | 'onPointerDown'
    | 'children'
    | 'color'
    | 'name'
  >;
