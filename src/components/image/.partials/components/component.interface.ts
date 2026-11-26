import type {
  ImageAnimation,
  ImagePress,
  ImageVariant,
} from '@/components/image/.partials/enums/component.enums';
import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  PointerEventHandler,
  Ref,
} from 'react';

export type ImageProps<C extends ElementType = 'div'> = {
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
} & Omit<
  ComponentPropsWithoutRef<C>,
  'as' | 'ref' | 'style' | 'onPointerDown'
>;