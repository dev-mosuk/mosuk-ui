import type { YandexMapFeatureProps } from '@/integrations/yandex/maps/components/component/feature/component.interface';
import { YandexMapContext } from '@/integrations/yandex/maps/provider/context/context';
import React, { useContext } from 'react';

export function YandexMapFeature({ ...rest }: YandexMapFeatureProps) {
  const context = useContext(YandexMapContext);

  if (!context || !context.api) {
    return null;
  }

  const { YMapFeature } = context.api;

  return <YMapFeature {...rest}>{rest?.children}</YMapFeature>;
}
