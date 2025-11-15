import { useContext } from 'react';
import { AuthContext } from '../../providers/auth/context/context';
import { Auth } from '../../services/auth/service.interface';
import { UseAuthProps } from './hook.interface';

export function useAuth<U = any>(): UseAuthProps<U> {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within <AuthProvider>');
  }

  return {
    auth: context.auth as Auth<U> | null,
    
    create: (data: Auth<U>) => context.create(data as Auth<U>),
    update: (data: Auth<U>) => context.update(data as Auth<U>),
    delete: context.delete,

    isLoading: context.isLoading,
    setIsLoading: context.setIsLoading
  };
}
