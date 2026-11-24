import { YandexMapControlsZoomMinus } from '@/blocks/yandex-map/.partials/components/controls-zoom-minus/component';
import { YandexMapControlsZoomPlus } from '@/blocks/yandex-map/.partials/components/controls-zoom-plus/component';
import type { YandexMapControlsZoomProps } from '@/blocks/yandex-map/.partials/components/controls-zoom/component.interface';
import styles from '@/blocks/yandex-map/.partials/styles/component.module.css';
import { YandexMapContext } from '@/providers/yandex-map/.partials/context/context';
import classNames from 'classnames';
import React, { useContext } from 'react';

export function YandexMapControlsZoom(props: YandexMapControlsZoomProps = {}) {
  const context = useContext(YandexMapContext);
  if (!context?.api) {
    return null;
  }

  const { YMapControls, YMapControl } = context.api;
  const position = props.position ?? 'right';

  if (!YMapControls || !YMapControl) {
    return null;
  }

  return (
    <div
      className={classNames(
        'mosuk-yandex-map-controls',
        styles.controls,
      )}
      data-position={position}
    >
      <YMapControl transparent>
        <YandexMapControlsZoomPlus />
      </YMapControl>

      <YMapControl transparent>
        <YandexMapControlsZoomMinus />
      </YMapControl>
    </div>
  );
}
