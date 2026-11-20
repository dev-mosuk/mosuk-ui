import { ToastsApi } from '@/services/toasts/service.interface';
import { Toast as BaseUiToast } from '@base-ui/react/toast';

export interface ToastsContextProps {
  manager: ReturnType<typeof BaseUiToast.createToastManager> | null;
  toast: ToastsApi;
}
