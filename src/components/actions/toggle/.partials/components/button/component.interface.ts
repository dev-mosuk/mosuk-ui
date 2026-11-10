import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type ToggleButtonProps<C extends ElementType = 'button'> = {
  as?: C;
  ref?: Ref<any>;

  value: any;
  disabled?: boolean;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref' | 'value' | 'disabled'>;
