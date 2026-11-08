import { ToastApi } from '@/services/alerts/service.interface';
import { Toast } from '@base-ui/react/toast';

export interface AlertsContextProps {
  manager: ReturnType<typeof Toast.createToastManager> | null;
  toast: ToastApi;
}
