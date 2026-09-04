import { TBankProvider as BaseTBankProvider } from '@/integrations/tbank/provider/provider';
import { TBankProviderProps } from '@/integrations/tbank/provider/provider.interface';
import { createElement } from 'react';

export const TBankProvider = (props: TBankProviderProps) => {
  return createElement(BaseTBankProvider, props);
};

export namespace TBankProvider {
  export type Props = TBankProviderProps;
}
