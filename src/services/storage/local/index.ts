import { StorageLocalService } from './service';
import type { StorageLocalServiceInterface } from './service.interface';

export const storageLocalService = StorageLocalService.getInstance();

export namespace storageLocalService {
  export type Interface = StorageLocalServiceInterface;
} 