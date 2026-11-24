import type { UseImageProps } from '@/components/image/.partials/hooks/hook.interface';
import { ImageContext } from '@/components/image/.partials/providers/context/context';
import { useContext } from 'react';

export function useImage(): UseImageProps {
  const context = useContext(ImageContext);

  if (!context) {
    throw new Error('useImage must be used within Image');
  }

  return context;
}
