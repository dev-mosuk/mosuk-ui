import { createContext } from 'react';
import { CartContextProps } from './context.interface';

export const CartContext = createContext<CartContextProps | null>(null);
