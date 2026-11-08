import {
  AlertActionVariant,
  AlertType,
} from '@/services/alerts/service.enums';
import { ComponentType, ReactNode, SVGProps } from 'react';

export interface AlertActionProps {
  children?: ReactNode;
  className?: string;
  onPress?: () => void;
  variant?: AlertActionVariant | `${AlertActionVariant}`;
}

export type AlertIndicator = ComponentType<SVGProps<SVGSVGElement>>;

export interface AlertOptions {
  description?: ReactNode;
  indicator?: AlertIndicator;
  actionProps?: AlertActionProps;
}

export interface AlertData {
  indicator?: AlertIndicator;
  actionProps?: AlertActionProps;
  customContent?: ReactNode;
}

export interface Alert {
  type: AlertType;
  content: ReactNode;
}

export interface ToastApi {
  default(content: ReactNode, options?: AlertOptions): string | undefined;
  accent(content: ReactNode, options?: AlertOptions): string | undefined;
  success(content: ReactNode, options?: AlertOptions): string | undefined;
  warning(content: ReactNode, options?: AlertOptions): string | undefined;
  danger(content: ReactNode, options?: AlertOptions): string | undefined;
  custom(content: ReactNode): string | undefined;
  close(id?: string): void;
}

export interface AlertsServiceProps extends ToastApi {
  manager(manager: any): void;
}
