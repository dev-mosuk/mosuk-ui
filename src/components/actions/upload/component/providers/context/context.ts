import { UploadContextProps } from '@/components/actions/upload/component/providers/context/context.interface';
import { createContext } from 'react';

export const UploadContext = createContext<UploadContextProps | null>(null);
