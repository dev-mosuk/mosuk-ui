import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type ToggleProps<C extends ElementType = 'div'> = {
  as?: C;
  ref?: Ref<any>;

  value?: any | null;
  onChange?: (value: any) => void;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref' | 'value' | 'onChange'>;
