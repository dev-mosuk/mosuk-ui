import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';
import type { ToggleOrientation } from '../providers/context/context.interface';

export type ToggleProps<C extends ElementType = 'div'> = {
  as?: C;
  ref?: Ref<any>;

  value?: any | null;
  onChange?: (value: any) => void;

  orientation?: ToggleOrientation;
} & Omit<
  ComponentPropsWithoutRef<C>,
  'as' | 'ref' | 'value' | 'onChange' | 'orientation'
>;
