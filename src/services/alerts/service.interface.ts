import { ReactNode } from 'react';
import { AlertType } from './service.enums';

export interface Alert {
  type: AlertType;
  content: ReactNode;
}

export interface AlertsServiceProps {
  manager(manager: any): void;
  
  info(content: ReactNode): void;
  success(content: ReactNode): void;
  warning(content: ReactNode): void;
  error(content: ReactNode): void;
}