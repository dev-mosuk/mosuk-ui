import type { ToggleVariant } from '@/components/toggle/.partials/enums/component.enums';
import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type ToggleOrientation = 'horizontal' | 'vertical';

export type ToggleProps<C extends ElementType = 'div'> = {
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
