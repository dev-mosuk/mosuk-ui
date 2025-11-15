import type { YMapProps } from '@yandex/ymaps3-types';
import type { ReactNode } from 'react';

export interface YandexMapsMapProps extends YMapProps {
  children?: ReactNode;
}
