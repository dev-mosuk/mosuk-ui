import type { YandexMapMarkerProps } from '@/integrations/yandex/maps/components/component/marker/component.interface';
import { YandexMapContext } from '@/integrations/yandex/maps/provider/context/context';
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
