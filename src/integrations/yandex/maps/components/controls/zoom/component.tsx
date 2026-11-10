import styles from '@/integrations/yandex/maps/components/component.module.css';
import type { YandexMapControlsZoomProps } from '@/integrations/yandex/maps/components/controls/zoom/component.interface';
import { YandexMapControlsZoomMinus } from '@/integrations/yandex/maps/components/controls/zoom/minus/component';
import { YandexMapControlsZoomPlus } from '@/integrations/yandex/maps/components/controls/zoom/plus/component';
import { YandexMapContext } from '@/integrations/yandex/maps/provider/context/context';
import React, { useContext } from 'react';

export function YandexMapControlsZoom(props: YandexMapControlsZoomProps = {}) {
  const context = useContext(YandexMapContext);
  if (!context?.api) {
    return null;
  }

  const { YMapControls, YMapControl } = context?.api;
  const position = props.position ?? 'right';

  if (!YMapControls || !YMapControl) {
    return null;
  }

  return (
    <div className='GGGGGG absolute top-0 right-0 z-100'>
      <YMapControl transparent>
        <YandexMapControlsZoomPlus className={styles.yandexMapsZoomPlus} />
      </YMapControl>

      <YMapControl transparent>
        <YandexMapControlsZoomMinus className={styles.yandexMapsZoomMinus} />
      </YMapControl>
    </div>
  );
}
