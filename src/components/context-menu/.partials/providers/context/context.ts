import type { ContextMenuContextProps } from '@/components/context-menu/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const ContextMenuContext =
  createContext<ContextMenuContextProps | null>(null);
