import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type UploadProps<C extends ElementType = 'fieldset'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
