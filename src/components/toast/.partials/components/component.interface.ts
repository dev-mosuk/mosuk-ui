import { Toast as BaseUiToast } from '@base-ui/react/toast';
import type { ReactNode } from 'react';

type ToastRootOwnProps = {
  toast?: BaseUiToast.Root.Props['toast'];
  isOpen?: boolean;
  isDisabled?: boolean;
  children?: ReactNode;
  /** @deprecated Use `isOpen` */
  open?: never;
  /** @deprecated Use `isDisabled` */
  disabled?: never;
};

export type ToastProps = ToastRootOwnProps &
  Omit<BaseUiToast.Root.Props, 'toast' | 'open' | 'disabled' | 'children'>;