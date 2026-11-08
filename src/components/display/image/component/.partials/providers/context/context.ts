import { ImageContextProps } from '@/components/display/image/component/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const ImageContext = createContext<ImageContextProps | null>(null);
