import type { AvatarContextProps } from '@/components/avatar/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const AvatarContext = createContext<AvatarContextProps | null>(null);
