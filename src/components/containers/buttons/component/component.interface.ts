import { HTMLAttributes, RefObject } from 'react';

export interface ButtonsProps extends HTMLAttributes<HTMLDivElement> {
  ref?: RefObject<HTMLDivElement | null>;
}
