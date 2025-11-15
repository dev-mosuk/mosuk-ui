import { ReactifiedModule } from '@yandex/ymaps3-types/reactify';

export interface YandexMapsContextProps {
  api: ReactifiedModule<typeof ymaps3> | null;
  isLoading: boolean;
  error: string | null;
}
