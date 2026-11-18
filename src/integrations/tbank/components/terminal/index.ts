import { TBankTerminal as BaseTBankTerminal } from '@/integrations/tbank/components/terminal/component';
import { TBankTerminalProps } from '@/integrations/tbank/components/terminal/component.interface';

export const TBankTerminal = BaseTBankTerminal;

export namespace TBankTerminal {
  export type Props = TBankTerminalProps;
}
