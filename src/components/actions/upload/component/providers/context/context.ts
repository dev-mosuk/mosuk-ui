import { createContext } from 'react';
import { UploadContextProps } from './context.interface';

export const UploadContext = createContext<UploadContextProps | null>(null);
