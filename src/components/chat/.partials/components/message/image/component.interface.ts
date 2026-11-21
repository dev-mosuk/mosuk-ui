import type { ButtonHTMLAttributes } from 'react';

export interface ChatMessageImageProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  src: string;
  alt?: string;
}
