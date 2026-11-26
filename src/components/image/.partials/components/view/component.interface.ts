import type { PropsOf } from '@/types/props-of';
import type {
  CSSProperties,
  ImgHTMLAttributes,
  ReactNode,
  Ref,
  SyntheticEvent,
} from 'react';

type ImageViewOwnProps<C> = {
  as?: C;
  ref?: Ref<any>;
  src: string | null;
  loading?: ImgHTMLAttributes<HTMLImageElement>['loading'];
  fetchPriority?: ImgHTMLAttributes<HTMLImageElement>['fetchPriority'];
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
  onLoad?: (event: SyntheticEvent<any>) => void;
  onError?: (event: SyntheticEvent<any>) => void;
};

export type ImageViewProps<C = 'img'> = ImageViewOwnProps<C> &
  Omit<
    PropsOf<C>,
    | 'as'
    | 'ref'
    | 'className'
    | 'style'
    | 'children'
    | 'src'
    | 'loading'
    | 'fetchPriority'
    | 'onLoad'
    | 'onError'
  >;
