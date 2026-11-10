import { TBankTerminal as BaseTBankTerminal } from '@/integrations/tbank/components/terminal/component';
import { TBankTerminalProps } from '@/integrations/tbank/components/terminal/component.interface';

export const TBankTerminal = BaseTBankTerminal;

export namespace TBankTerminal {
  export type Props = TBankTerminalProps;
}

import { TBankTerminalSkeleton as BaseTBankTerminalSkeleton } from '@/integrations/tbank/components/terminal/.partials/skeleton/component';
import { TBankTerminalSkeletonProps } from '@/integrations/tbank/components/terminal/.partials/skeleton/component.interface';

export const TBankTerminalSkeleton = BaseTBankTerminalSkeleton;

export namespace TBankTerminalSkeleton {
  export type Props = TBankTerminalSkeletonProps;
}
