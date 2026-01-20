import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export interface BaseFileInterface {
  src: string;
  name: string;
}

export interface FileInterface extends BaseFileInterface {
  id: string;
  position: number;
  error?: string;
  isLoading?: boolean;
}

export type UploadProps<C extends ElementType = 'fieldset'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
