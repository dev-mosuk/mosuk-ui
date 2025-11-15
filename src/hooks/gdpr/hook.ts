import { useContext } from 'react';
import { GDPRContext } from '../../providers/gdpr/context/context';
import { GDPR } from '../../services/gdpr';
import { UseGDPRProps } from './hook.interface';

export function useGDPR<U = any>(): UseGDPRProps<U> {
  const context = useContext(GDPRContext);

  if (!context) {
    throw new Error('useGDPR must be used within <GDPRProvider>');
  }

  return {
    gdpr: context.gdpr as GDPR<U> | null,

    create: (data: GDPR<U>) => context.create(data as GDPR<U>),
    update: (data: GDPR<U>) => context.update(data as GDPR<U>),
    delete: context.delete,

    isLoading: context.isLoading,
    setIsLoading: context.setIsLoading,
  };
}
