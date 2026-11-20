import type { HTMLAttributes } from 'react';

export interface ChatProps extends HTMLAttributes<HTMLDivElement> {
  onLoadMore?: () => void | Promise<void>;
  hasMore?: boolean;
  loading?: boolean;
}
