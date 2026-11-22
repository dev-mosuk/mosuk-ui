import { ImageContextProps } from '@/components/image/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const ImageContext = createContext<ImageContextProps | null>(null);
