import type { FileContextProps } from '@/components/file/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const FileContext = createContext<FileContextProps | null>(null);
