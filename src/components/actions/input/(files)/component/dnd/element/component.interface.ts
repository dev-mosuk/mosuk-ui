import { HTMLAttributes, RefObject } from 'react';

export interface InputFilesDndElementProps extends HTMLAttributes<HTMLDivElement> {
  ref?: RefObject<HTMLDivElement | null>;
  file?: any;
}
