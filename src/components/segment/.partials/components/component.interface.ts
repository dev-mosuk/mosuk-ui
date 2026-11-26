import type { SegmentVariant } from '@/components/segment/.partials/enums/component.enums';
import type { PropsOf } from '@/types/props-of';
import type {
  CSSProperties,
  MouseEventHandler,
  ReactNode,
  Ref,
} from 'react';

export type SegmentOrientation = 'horizontal' | 'vertical';

export type SegmentProps<C = 'div'> = {
  as?: C;
  ref?: Ref<any>;
  size?: number;
  variant?: SegmentVariant | `${SegmentVariant}`;
  orientation?: SegmentOrientation;
  activateOnFocus?: boolean;
  loopFocus?: boolean;
  value?: any | null;
  defaultValue?: any | null;
  onChange?: (value: any) => void;
  className?: string;
  style?: CSSProperties;
  onClickCapture?: MouseEventHandler<any>;
  children?: ReactNode;
} & Omit<
  PropsOf<C>,
  | 'as'
  | 'ref'
  | 'value'
  | 'defaultValue'
  | 'onChange'
  | 'orientation'
  | 'size'
  | 'variant'
  | 'activateOnFocus'
  | 'loopFocus'
  | 'className'
  | 'style'
  | 'onClickCapture'
  | 'children'
>;