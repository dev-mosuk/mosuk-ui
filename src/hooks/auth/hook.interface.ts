import { Auth } from '../../services/auth/service.interface';

export interface UseAuthProps<U = any> {
  auth: Auth<U> | null;
  
  create: (data: Auth<U>) => void;
  update: (data: Auth<U>) => void;
  delete: () => void;

  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}