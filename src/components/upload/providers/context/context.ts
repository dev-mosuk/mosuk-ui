import { UploadContextProps } from '@/components/upload/providers/context/context.interface';
import { createContext } from 'react';

export const UploadContext = createContext<UploadContextProps | null>(null);
