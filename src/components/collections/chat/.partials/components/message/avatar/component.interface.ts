import type { HTMLAttributes } from 'react';

export interface ChatMessageAvatarProps extends HTMLAttributes<HTMLSpanElement> {
  src?: string;
  alt?: string;
  fallback?: string;
}
