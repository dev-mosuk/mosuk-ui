import React, { useContext } from 'react';
import { YandexMapsContext } from '../../../../../../../providers/yandex/maps/context/context';
import type { YandexMapsMapMarkerProps } from './component.interface';

export function YandexMapsMapMarker({ coordinates, children, ...props }: YandexMapsMapMarkerProps) {
  const context = useContext(YandexMapsContext);
  
  if (!context || !context.api) return null;

  const { YMapMarker } = context.api;

  return (
    <YMapMarker coordinates={coordinates} {...props}>
      {children}
    </YMapMarker>
  );
}
