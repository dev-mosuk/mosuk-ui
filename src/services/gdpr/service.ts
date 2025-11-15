import { storageCookieService } from '../storage/cookie';
import { GDPR } from './service.interface';

const GDPR_KEY = 'gdpr';

export const gdprService = {
  create<U = any>(gdpr: GDPR<U>): void {
    storageCookieService.create(GDPR_KEY, gdpr);
  },

  read<U = any>(): GDPR<U> | null {
    return storageCookieService.read<GDPR<U>>(GDPR_KEY);
  },

  update<U = any>(gdpr: GDPR<U>): void {
    const data = this.read<U>();

    if (typeof gdpr === 'object' && gdpr !== null) {
      this.create({ ...data, ...gdpr } as GDPR<U>);
    } else {
      this.create(gdpr);
    }
  },

  delete(): void {
    storageCookieService.delete(GDPR_KEY);
  },
};
