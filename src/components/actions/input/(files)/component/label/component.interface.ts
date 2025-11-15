import { LabelHTMLAttributes, RefObject } from 'react';

export interface InputFilesLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  ref?: RefObject<HTMLLabelElement | null>;
}
