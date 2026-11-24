import type { ContextMenuContextProps } from '@/components/context-menu/.partials/providers/context/context.interface';
import type { ReactNode } from 'react';

export interface ContextMenuProviderProps extends ContextMenuContextProps {
  children?: ReactNode;
}
