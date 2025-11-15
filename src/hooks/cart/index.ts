import { useCart as BaseUseCart } from './hook';
import { UseCartProps } from './hook.interface';

export const useCart = BaseUseCart;

export namespace useCart {
  export type Props = UseCartProps;
}

