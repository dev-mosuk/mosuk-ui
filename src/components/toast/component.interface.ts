import { Toast as BaseUiToast } from '@base-ui/react/toast';

export interface ToastProps extends Omit<BaseUiToast.Root.Props, 'toast'> {
  toast?: BaseUiToast.Root.Props['toast'];
}
