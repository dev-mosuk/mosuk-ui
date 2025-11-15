import React, { useCallback, useEffect, useState } from 'react';
import { cartService } from '../../services/cart/service';
import { Cart } from '../../services/cart/service.interface';
import { CartContext } from './context/context';
import { CartProviderProps } from './provider.interface';

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Cart | null>(cartService.read());
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      setIsLoading(true);

      const existingCart = cartService.read();

      if (existingCart) {
        setCart(existingCart);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const create = useCallback((data: Cart) => {
    cartService.create(data);
    setCart(data);
  }, []);

  const update = useCallback((data: Cart) => {
    cartService.update(data);
    setCart(data);
  }, []);

  const deleteCart = useCallback(() => {
    cartService.delete();
    setCart(null);
  }, []);

  return (
    <CartContext.Provider
      value={{ cart, create, update, delete: deleteCart, isLoading, setIsLoading }}
    >
      {children}
    </CartContext.Provider>
  );
};
