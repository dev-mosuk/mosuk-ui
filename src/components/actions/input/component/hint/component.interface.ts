import { HTMLAttributes } from 'react';
import { InputHintType } from './component.enums';


export interface InputHintProps
  extends HTMLAttributes<HTMLParagraphElement> {
  type?: InputHintType;
}
