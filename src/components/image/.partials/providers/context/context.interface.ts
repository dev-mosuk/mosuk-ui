import type { RefObject } from 'react';

export type ImageLoadStatus = 'idle' | 'loading' | 'loaded' | 'error';

export type ImageContextProps = {
  shown: boolean;
  instant: boolean;
  isLoading: boolean;
  visibleDots: boolean;
  status: ImageLoadStatus;
  setStatus: (status: ImageLoadStatus) => void;
  node: RefObject<HTMLElement | null>;
  cover: () => void;
  reveal: () => void;
  finish: () => void;
};
