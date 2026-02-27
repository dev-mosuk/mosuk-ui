import React, { useContext } from 'react';
import { YMapZoomContext } from '../../../zoom/context';
import type { YandexMapControlsZoomPlusProps } from './component.interface';

export function YandexMapControlsZoomPlus(
  props: YandexMapControlsZoomPlusProps = {},
) {
  const context = useContext(YMapZoomContext);
  if (!context?.onZoomIn) return null;

  const { onZoomIn, zoom, max } = context;
  const isDisabled = zoom !== undefined && max !== undefined && zoom >= max;

  return (
    <button
      type="button"
      onClick={onZoomIn}
      disabled={isDisabled}
      className={props.className}
      aria-label="Увеличить масштаб"
    />
  );
}
