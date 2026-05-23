import type { ToggleOrientation } from '@/components/actions/toggle/component/.partials/providers/context/context.interface';
import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

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
