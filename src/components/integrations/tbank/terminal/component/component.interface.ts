import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

interface TBankTerminalConfig {
  terminalKey: string;
  paymentStartCallback: () => Promise<string>;
  theme?: 'light' | 'dark';
  router?: {
    deepLinkRedirectCallback?: (url: string) => Promise<void>;
    deepLinksRedirectCallback?: (links: string[]) => Promise<void>;
    redirectCallback?: (url: string) => Promise<void>;
  };
  language?: {
    changedCallback?: (lang: string) => Promise<void>;
  };
  status?: {
    changedCallback?: (status: string) => Promise<void>;
  };
}

export type TBankTerminalProps<C extends ElementType = 'div'> = {
  as?: C;
  ref?: Ref<any>;
  config: TBankTerminalConfig;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
