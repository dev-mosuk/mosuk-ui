import type { YandexMapControlsZoomMinusProps } from '@/integrations/yandex/maps/components/component/controls/zoom/minus/component.interface';
import { YMapZoomContext } from '@/integrations/yandex/maps/components/component/zoom/context';
import React, { useContext } from 'react';

export function YandexMapControlsZoomMinus(
  props: YandexMapControlsZoomMinusProps = {},
) {
  const context = useContext(YMapZoomContext);
  if (!context?.onZoomOut) {
    return null;
  }

  const { onZoomOut, zoom, min } = context;
  const isDisabled = zoom !== undefined && min !== undefined && zoom <= min;

  return (
    <button
      type='button'
      onClick={onZoomOut}
      disabled={isDisabled}
      className={props.className}
      aria-label='Уменьшить масштаб'
    />
  );
}
