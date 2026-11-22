import { UploadContextProps } from '@/components/upload/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const UploadContext = createContext<UploadContextProps | null>(null);
