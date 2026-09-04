import { TBankTerminal as BaseTBankTerminal } from '@/integrations/tbank/components/terminal/component/component';
import { TBankTerminalProps } from '@/integrations/tbank/components/terminal/component/component.interface';

export const TBankTerminal = BaseTBankTerminal;

export namespace TBankTerminal {
  export type Props = TBankTerminalProps;
}
