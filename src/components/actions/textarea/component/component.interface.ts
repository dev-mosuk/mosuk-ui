import { TextareaAutosizeProps } from 'react-textarea-autosize';
import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type TextareaProps<C extends ElementType = 'textarea'> = {
  as?: C;
  ref?: Ref<any>;
  autoSize?: boolean;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'> &
  Pick<TextareaAutosizeProps, 'minRows' | 'maxRows'>;
