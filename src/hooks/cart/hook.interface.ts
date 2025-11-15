import { Cart } from '../../services/cart/service.interface';

export interface UseCartProps<U = any> {
  cart: Cart<U> | null;
  
  create: (data: Cart<U>) => void;
  update: (data: Cart<U>) => void;
  delete: () => void;

  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}