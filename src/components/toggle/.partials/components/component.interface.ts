import type { ToggleVariant } from '@/components/toggle/.partials/enums/component.enums';
import { CSSProperties, MouseEventHandler, ReactNode, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

export type ToggleOrientation = 'horizontal' | 'vertical';

export type ToggleProps<C = 'div'> = {
  as?: C;
  ref?: Ref<any>;
  size?: number;
  variant?: ToggleVariant | `${ToggleVariant}`;
  orientation?: ToggleOrientation;
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
