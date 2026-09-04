import type { YandexMapMarkerProps } from '@/components/integrations/yandex/maps/component/marker/component.interface';
import { YandexMapContext } from '@/providers/yandex/maps/context/context';
import React, { useContext } from 'react';

export function YandexMapMarker({
  coordinates,
  children,
  ...rest
}: YandexMapMarkerProps) {
  const context = useContext(YandexMapContext);

  if (!context || !context.api) {
    return null;
  }

  const { YMapMarker } = context.api;

  return (
    <YMapMarker coordinates={coordinates} {...rest}>
      {children}
    </YMapMarker>
  );
}
