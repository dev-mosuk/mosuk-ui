import { Toast } from '@base-ui/react/toast';
import { ReactNode } from 'react';

export interface AlertsContextProps {  
  manager: ReturnType<typeof Toast.createToastManager> | null;
  
  info(content: ReactNode): void;
  success(content: ReactNode): void;
  warning(content: ReactNode): void;
  error(content: ReactNode): void;

  custom(content: ReactNode): void;
}
