import { createElement } from 'react';
import { TBankProvider as BaseTBankProvider } from './provider';
import { TBankProviderProps } from './provider.interface';

export const TBankProvider = (props: TBankProviderProps) => {
  return createElement(BaseTBankProvider, props);
};

export namespace TBankProvider {
  export type Props = TBankProviderProps;
}
