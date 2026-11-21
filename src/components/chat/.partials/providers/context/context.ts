import type { ChatContextProps } from '@/components/collections/chat/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const ChatContext = createContext<ChatContextProps | null>(null);
