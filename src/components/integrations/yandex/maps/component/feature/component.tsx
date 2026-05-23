import type { YandexMapFeatureProps } from '@/components/integrations/yandex/maps/component/feature/component.interface';
import { YandexMapContext } from '@/providers/yandex/maps/context/context';
import React, { useContext } from 'react';

export function YandexMapFeature({ ...rest }: YandexMapFeatureProps) {
  const context = useContext(YandexMapContext);

  if (!context || !context.api) {
    return null;
  }

  const { YMapFeature } = context.api;

  return <YMapFeature {...rest}>{rest?.children}</YMapFeature>;
}
