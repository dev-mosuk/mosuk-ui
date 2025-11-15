import { Auth } from '../../../services/auth/service.interface';

export interface AuthContextProps {
  auth: Auth | null;
  
  create: (data: Auth) => void;
  update: (data: Auth) => void;
  delete: () => void;

  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}
