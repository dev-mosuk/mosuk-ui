import { InputHTMLAttributes, ReactNode, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

type UploadFileProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  'accept' | 'capture' | 'multiple' | 'form' | 'id' | 'name'
>;

type UploadOwnProps<C> = {
  as?: C;
  ref?: Ref<any>;
  accept?: UploadFileProps['accept'];
  capture?: UploadFileProps['capture'];
  multiple?: UploadFileProps['multiple'];
  form?: UploadFileProps['form'];
  id?: UploadFileProps['id'];
  name?: UploadFileProps['name'];
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  onChange?: (files: File[]) => void;
  className?: string;
  children?: ReactNode;
};

export type UploadProps<C = 'fieldset'> = UploadOwnProps<C> &
  Omit<
    PropsOf<C>,
    | 'as'
    | 'ref'
    | 'disabled'
    | 'onChange'
    | keyof UploadFileProps
    | 'className'
    | 'children'
  >;
