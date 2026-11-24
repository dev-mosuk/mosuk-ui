import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type UploadOpenProps<C extends ElementType = 'label'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
