import { ReactifiedModule } from '@yandex/ymaps3-types/reactify';

export interface YandexMapContextProps {
  api: ReactifiedModule<typeof ymaps3> | null;
  isLoading: boolean;
  error: string | null;
}
