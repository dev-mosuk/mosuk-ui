import { HTMLAttributes, RefObject } from 'react';

export interface InputFilesDndProps extends HTMLAttributes<HTMLDivElement> {
  ref?: RefObject<HTMLDivElement | null>;
}