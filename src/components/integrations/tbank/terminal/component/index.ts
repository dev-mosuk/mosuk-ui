import { TBankTerminal as BaseTBankTerminal } from '@/components/integrations/tbank/terminal/component/component';
import { TBankTerminalProps } from '@/components/integrations/tbank/terminal/component/component.interface';

export const TBankTerminal = BaseTBankTerminal;

export namespace TBankTerminal {
  export type Props = TBankTerminalProps;
}
