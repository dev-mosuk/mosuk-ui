import { HTMLAttributes } from 'react';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: string | number;
}