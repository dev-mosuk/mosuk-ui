import type { YMapProps } from '@yandex/ymaps3-types';
import type { ReactNode } from 'react';

export interface YandexMapProps extends YMapProps {
  children?: ReactNode;
}
