import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type ToggleOrientation = 'horizontal' | 'vertical';

export type ToggleProps<C extends ElementType = 'div'> = {
  as?: C;
  ref?: Ref<any>;

  value?: any | null;
  defaultValue?: any | null;
  onChange?: (value: any) => void;

  orientation?: ToggleOrientation;
  activateOnFocus?: boolean;
  loopFocus?: boolean;
} & Omit<
  ComponentPropsWithoutRef<C>,
  | 'as'
  | 'ref'
  | 'value'
  | 'defaultValue'
  | 'onChange'
  | 'orientation'
  | 'activateOnFocus'
  | 'loopFocus'
>;
