import type { ChatMessageStatus } from '@/components/collections/chat/.partials/components/message/component.enums';
import type { HTMLAttributes, ReactNode } from 'react';

export type ChatMessageSide = 'start' | 'end';

export interface ChatMessageProps extends HTMLAttributes<HTMLDivElement> {
  side?: ChatMessageSide;
  time?: ReactNode;
  status?: ChatMessageStatus | `${ChatMessageStatus}` | null;
}
