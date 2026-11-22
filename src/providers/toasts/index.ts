import { ToastsProvider as BaseToastsProvider } from '@/providers/toasts/.partials/provider';
import type { ToastsProviderProps } from '@/providers/toasts/.partials/provider.interface';
import { createElement } from 'react';

export const ToastsProvider = (props: ToastsProviderProps) => {
  return createElement(BaseToastsProvider, props);
};

export namespace ToastsProvider {
  export type Props = ToastsProviderProps;
}
