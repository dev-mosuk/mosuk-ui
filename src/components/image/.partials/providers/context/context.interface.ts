import { RefObject } from 'react';

export type ImageContextProps = {
  shown: boolean;
  instant: boolean;
  isLoading: boolean;
  visibleDots: boolean;
  node: RefObject<HTMLElement | null>;
  cover: () => void;
  reveal: () => void;
  finish: () => void;
};
