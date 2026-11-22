import { TBankProvider as BaseTBankProvider } from '@/providers/tbank/.partials/provider';
import type { TBankProviderProps } from '@/providers/tbank/.partials/provider.interface';
import { createElement } from 'react';

export const TBankProvider = (props: TBankProviderProps) => {
  return createElement(BaseTBankProvider, props);
};

export namespace TBankProvider {
  export type Props = TBankProviderProps;
}
