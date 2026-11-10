import type { YandexMapProps } from '@/integrations/yandex/maps/components/component.interface';
import { YandexMapSkeleton } from '@/integrations/yandex/maps/components/.partials/skeleton/component';
import { YandexMapDefaultSchemeLayerSkeleton } from '@/integrations/yandex/maps/components/.partials/skeleton/default/scheme/layer/component';
import { YandexMapContext } from '@/integrations/yandex/maps/provider/context/context';
import React, { useContext } from 'react';

export function YandexMap({ ...rest }: YandexMapProps) {
  const context = useContext(YandexMapContext);

  if (!context) {
    throw new Error('YandexMap должен использоваться внутри YandexMap');
  }

  const { api, isLoading, error } = context;

  if (!api || isLoading || error) {
    return (
      <YandexMapSkeleton {...rest}>
        <YandexMapDefaultSchemeLayerSkeleton />
      </YandexMapSkeleton>
    );
  }

  const { YMap } = api;

  return <YMap {...rest}>{rest?.children}</YMap>;
}
