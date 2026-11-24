import {
  ComponentPropsWithoutRef,
  ElementType,
  InputHTMLAttributes,
  Ref,
} from 'react';

type UploadFileProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  'accept' | 'capture' | 'multiple' | 'form' | 'id' | 'name'
>;

type UploadOwnProps<C extends ElementType> = {
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
};

export type UploadProps<C extends ElementType = 'fieldset'> =
  UploadOwnProps<C> &
    Omit<
      ComponentPropsWithoutRef<C>,
      'as' | 'ref' | 'disabled' | 'onChange' | keyof UploadFileProps
    >;
