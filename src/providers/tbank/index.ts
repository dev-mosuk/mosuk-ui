import { TBankProvider as BaseTBankProvider } from '@/providers/tbank/provider';
import { TBankProviderProps } from '@/providers/tbank/provider.interface';
import { createElement } from 'react';

export const TBankProvider = (props: TBankProviderProps) => {
  return createElement(BaseTBankProvider, props);
};

export namespace TBankProvider {
  export type Props = TBankProviderProps;
}
