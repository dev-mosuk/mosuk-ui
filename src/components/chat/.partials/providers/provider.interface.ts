import type { ChatContextProps } from '@/components/chat/.partials/providers/context/context.interface';
import type { ReactNode } from 'react';

export interface ChatProviderProps extends ChatContextProps {
  children?: ReactNode;
}
