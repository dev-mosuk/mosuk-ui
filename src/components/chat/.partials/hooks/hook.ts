import type { UseChatProps } from '@/components/chat/.partials/hooks/hook.interface';
import { ChatContext } from '@/components/chat/.partials/providers/context/context';
import { useContext } from 'react';

export function useChat(): UseChatProps {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error('useChat must be used within Chat.Composer');
  }

  return context;
}
