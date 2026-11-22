import { TextareaAutosizeProps } from 'react-textarea-autosize';
import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type TextareaProps<C extends ElementType = 'textarea'> = {
  as?: C;
  ref?: Ref<any>;
  autoSize?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
} & Omit<
  ComponentPropsWithoutRef<C>,
  'as' | 'ref' | 'disabled' | 'readOnly' | 'required'
> &
  Pick<TextareaAutosizeProps, 'minRows' | 'maxRows'>;
