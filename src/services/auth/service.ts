import { storageCookieService } from '../storage/cookie';
import { Auth } from './service.interface';

const AUTH_KEY = 'auth';

export const authService = {
  create<U = any>(auth: Auth<U>): void {
    storageCookieService.create(AUTH_KEY, auth);
  },

  read<U = any>(): Auth<U> | null {
    return storageCookieService.read<Auth<U>>(AUTH_KEY);
  },

  update<U = any>(auth: Auth<U>): void {
    const data = this.read<U>();

    if (typeof auth === 'object' && auth !== null) {
      this.create({ ...data, ...auth } as Auth<U>);
    } else {
      this.create(auth);
    }
  },

  delete(): void {
    storageCookieService.delete(AUTH_KEY);
  },
};
