import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ChatComposerSendProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}
