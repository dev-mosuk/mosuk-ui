import { StorageLocalService } from '@/services/storage/local/service';
import type { StorageLocalServiceInterface } from '@/services/storage/local/service.interface';

export const storageLocalService = StorageLocalService.getInstance();

export namespace storageLocalService {
  export type Interface = StorageLocalServiceInterface;
}
