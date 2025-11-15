import React, { useContext } from 'react';
import { YandexMapsContext } from '../../../../../../providers/yandex/maps/context/context';
import type { YandexMapsMapProps } from './component.interface';

export function YandexMapsMap({ children, ...props }: YandexMapsMapProps) {
  const context = useContext(YandexMapsContext);

  if (!context) {
    throw new Error('YandexMapsMap должен использоваться внутри YandexMaps');
  }

  const { api } = context;

  if (!api) {
    return null;
  }

  const { YMap } = api;

  return (
    <YMap {...props}>
      {children}
    </YMap>
  );
}
