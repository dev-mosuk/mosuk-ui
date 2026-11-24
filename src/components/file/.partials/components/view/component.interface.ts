import type { PropsOf } from '@/components/file/.partials/utilities/props-of';
import type { CSSProperties, ReactNode, Ref, SyntheticEvent } from 'react';

type FileViewOwnProps<C> = {
  as?: C;
  ref?: Ref<any>;
  src?: string | null;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
  onLoad?: (event: SyntheticEvent<any>) => void;
  onError?: (event: SyntheticEvent<any>) => void;
};

export type FileViewProps<C = 'img'> = FileViewOwnProps<C> &
  Omit<
    PropsOf<C>,
    | 'as'
    | 'ref'
    | 'className'
    | 'style'
    | 'children'
    | 'src'
    | 'onLoad'
    | 'onError'
  >;
