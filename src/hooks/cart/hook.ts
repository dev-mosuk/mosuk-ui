import { useContext } from 'react';
import { CartContext } from '../../providers/cart/context/context';
import { Cart } from '../../services/cart/service.interface';
import { UseCartProps } from './hook.interface';

export function useCart<U = any>(): UseCartProps<U> {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within <CartProvider>');
  }

  return {
    cart: context.cart as Cart<U> | null,

    create: (data: Cart<U>) => context.create(data as Cart<U>),
    update: (data: Cart<U>) => context.update(data as Cart<U>),
    delete: context.delete,

    isLoading: context.isLoading,
    setIsLoading: context.setIsLoading,
  };
}
