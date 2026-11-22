import type { HTMLAttributes } from 'react';

export interface ChatViewportProps extends HTMLAttributes<HTMLDivElement> {
  onLoadMore?: () => void | Promise<void>;
  hasMore?: boolean;
  isLoading?: boolean;
}
