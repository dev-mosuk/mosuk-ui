import type {
  ImageAnimation,
  ImagePress,
  ImageVariant,
} from '@/components/image/.partials/enums/component.enums';
import type { CSSProperties, PointerEventHandler, ReactNode, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

export type ImageProps<C = 'div'> = {
  as?: C;
  ref?: Ref<any>;
  size?: number;
  variant?: ImageVariant | `${ImageVariant}`;
  animation?: ImageAnimation | `${ImageAnimation}`;
  press?: ImagePress | `${ImagePress}` | false;
  isDisabled?: boolean;
  isLoading?: boolean;
  style?: CSSProperties;
  onPointerDown?: PointerEventHandler<any>;
  className?: string;
  children?: ReactNode;
} & Omit<
  PropsOf<C>,
  'as' | 'ref' | 'style' | 'onPointerDown' | 'className' | 'children'
>;
