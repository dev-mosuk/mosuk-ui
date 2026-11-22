import type { ListBoxContextProps } from '@/components/list-box/.partials/providers/context/context.interface';
import type { KeyboardEvent, RefObject } from 'react';

export type UseListBoxProps = ListBoxContextProps;

export interface UseListBoxKeyboardProps {
  listRef: RefObject<HTMLUListElement | null>;
  onKeyDown: (event: KeyboardEvent<HTMLUListElement>) => void;
}
