import { UploadContextProps } from '@/components/actions/upload/providers/context/context.interface';
import { createContext } from 'react';

export const UploadContext = createContext<UploadContextProps | null>(null);
