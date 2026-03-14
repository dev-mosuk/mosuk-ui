import React, { useContext } from 'react';
import { YandexMapContext } from '../../../../../../providers/yandex/maps/context/context';
import type { YandexMapMarkerProps } from './component.interface';

export function YandexMapMarker({
  coordinates,
  children,
  ...rest
}: YandexMapMarkerProps) {
  const context = useContext(YandexMapContext);

  if (!context || !context.api) return null;

  const { YMapMarker } = context.api;

  return (
    <YMapMarker coordinates={coordinates} {...rest}>
      {children}
    </YMapMarker>
  );
}
