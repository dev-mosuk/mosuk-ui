import type { SegmentVariant } from '@/components/segment/.partials/enums/component.enums';
import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type SegmentOrientation = 'horizontal' | 'vertical';

export type SegmentProps<C extends ElementType = 'div'> = {
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
} & Omit<
  ComponentPropsWithoutRef<C>,
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
>;
