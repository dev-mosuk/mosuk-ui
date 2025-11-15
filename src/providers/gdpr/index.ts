import { createElement } from 'react';
import { GDPRProvider as BaseGDPRProvider } from './provider';
import { GDPRProviderProps } from './provider.interface';

export const GDPRProvider = (props: GDPRProviderProps) => {
  return createElement(BaseGDPRProvider, props);
};

export namespace GDPRProvider {
  export type Props = GDPRProviderProps;
}

