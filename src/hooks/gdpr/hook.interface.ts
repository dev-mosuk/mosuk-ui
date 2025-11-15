import { GDPR } from '../../services/gdpr/service.interface';

export interface UseGDPRProps<U = any> {
  gdpr: GDPR<U> | null;
  
  create: (data: GDPR<U>) => void;
  update: (data: GDPR<U>) => void;
  delete: () => void;

  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}