import { ToastsProvider as BaseToastsProvider } from './.partials/provider.js';
import type { ToastsProviderProps } from './.partials/provider.interface.js';
import { createElement } from 'react';

export const ToastsProvider = (props: ToastsProviderProps) => {
  return createElement(BaseToastsProvider, props);
};

export namespace ToastsProvider {
  export type Props = ToastsProviderProps;
}
