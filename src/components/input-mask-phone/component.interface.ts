import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';
import { IMaskInputProps } from 'react-imask';

export type InputMaskPhoneProps<C extends ElementType = 'input'> =
  IMaskInputProps<HTMLInputElement> & {
    as?: C;
    ref?: Ref<any>;
  } & Omit<
      ComponentPropsWithoutRef<C>,
      'as' | 'ref' | 'type' | 'mask' | 'definitions' | 'prepare'
    >;
