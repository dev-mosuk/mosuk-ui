import { Cart } from '../../../services/cart/service.interface';

export interface CartContextProps {
  cart: Cart | null;

  create: (data: Cart) => void;
  update: (data: Cart) => void;
  delete: () => void;

  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}
