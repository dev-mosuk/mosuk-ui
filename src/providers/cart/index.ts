import { createElement } from 'react';
import { CartProvider as BaseCartProvider } from './provider';
import { CartProviderProps } from './provider.interface';

export const CartProvider = (props: CartProviderProps) => {
  return createElement(BaseCartProvider, props);
};

export namespace CartProvider {
  export type Props = CartProviderProps;
}

