import { StorageLocalService } from '@/services/storage-local/.partials/service';
import type { StorageLocalServiceInterface } from '@/services/storage-local/.partials/service.interface';

export const storageLocalService = StorageLocalService.getInstance();

export namespace storageLocalService {
  export type Interface = StorageLocalServiceInterface;
}
