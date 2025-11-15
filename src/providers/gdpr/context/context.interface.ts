import { GDPR } from '../../../services/gdpr/service.interface';

export interface GDPRContextProps {
  gdpr: GDPR | null;
  
  create: (data: GDPR) => void;
  update: (data: GDPR) => void;
  delete: () => void;

  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}
