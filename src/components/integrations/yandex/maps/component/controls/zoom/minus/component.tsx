import React, { useContext } from 'react';
import { YMapZoomContext } from '../../../zoom/context';
import type { YandexMapControlsZoomMinusProps } from './component.interface';

export function YandexMapControlsZoomMinus(
  props: YandexMapControlsZoomMinusProps = {},
) {
  const context = useContext(YMapZoomContext);
  if (!context?.onZoomOut) return null;

  const { onZoomOut, zoom, min } = context;
  const isDisabled = zoom !== undefined && min !== undefined && zoom <= min;

  return (
    <button
      type="button"
      onClick={onZoomOut}
      disabled={isDisabled}
      className={props.className}
      aria-label="Уменьшить масштаб"
    />
  );
}
