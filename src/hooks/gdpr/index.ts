import { useGDPR as BaseUseGDPR } from './hook';
import { UseGDPRProps } from './hook.interface';

export const useGDPR = BaseUseGDPR;

export namespace useGDPR {
  export type Props = UseGDPRProps;
}

