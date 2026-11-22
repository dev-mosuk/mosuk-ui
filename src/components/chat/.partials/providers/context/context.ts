import type { ChatContextProps } from '@/components/chat/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const ChatContext = createContext<ChatContextProps | null>(null);
