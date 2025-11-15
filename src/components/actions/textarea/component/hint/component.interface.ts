import { HTMLAttributes } from 'react';
import { TextareaHintType } from './component.enums';

export interface TextareaHintProps
  extends HTMLAttributes<HTMLParagraphElement> {
  type?: TextareaHintType;
}
