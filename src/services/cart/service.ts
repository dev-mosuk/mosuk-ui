import { storageLocalService } from '../storage/local';
import { Cart } from './service.interface';

const CART_KEY = 'cart';

export const cartService = {
  create<U = any>(cart: Cart<U>): void {
    storageLocalService.create(CART_KEY, cart);
  },

  read<U = any>(): Cart<U> | null {
    return storageLocalService.read<Cart<U>>(CART_KEY);
  },

  update<U = any>(cart: Cart<U>): void {
    const data = this.read<U>();
    
    if (Array.isArray(cart)) {
      this.create(cart);
    } else if (typeof cart === 'object' && cart !== null) {
      this.create({ ...data, ...cart } as Cart<U>);
    } else {
      this.create(cart);
    }
  },

  delete(): void {
    storageLocalService.delete(CART_KEY);
  },
};
