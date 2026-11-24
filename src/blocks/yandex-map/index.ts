import { YandexMap as Component } from '@/blocks/yandex-map/.partials/components/component';
import type { YandexMapProps } from '@/blocks/yandex-map/.partials/components/component.interface';
import { YandexMapControlsZoomMinus } from '@/blocks/yandex-map/.partials/components/controls-zoom-minus/component';
import type { YandexMapControlsZoomMinusProps } from '@/blocks/yandex-map/.partials/components/controls-zoom-minus/component.interface';
import { YandexMapControlsZoomPlus } from '@/blocks/yandex-map/.partials/components/controls-zoom-plus/component';
import type { YandexMapControlsZoomPlusProps } from '@/blocks/yandex-map/.partials/components/controls-zoom-plus/component.interface';
import type { YandexMapControlsZoomProps } from '@/blocks/yandex-map/.partials/components/controls-zoom/component.interface';
import { YandexMapDefaultFeaturesLayer } from '@/blocks/yandex-map/.partials/components/default-features-layer/component';
import type { YandexMapDefaultFeaturesLayerProps } from '@/blocks/yandex-map/.partials/components/default-features-layer/component.interface';
import { YandexMapDefaultSchemeLayer } from '@/blocks/yandex-map/.partials/components/default-scheme-layer/component';
import type { YandexMapDefaultSchemeLayerProps } from '@/blocks/yandex-map/.partials/components/default-scheme-layer/component.interface';
import { YandexMapFeature } from '@/blocks/yandex-map/.partials/components/feature/component';
import type { YandexMapFeatureProps } from '@/blocks/yandex-map/.partials/components/feature/component.interface';
import { YandexMapMarker } from '@/blocks/yandex-map/.partials/components/marker/component';
import type { YandexMapMarkerProps } from '@/blocks/yandex-map/.partials/components/marker/component.interface';

export const YandexMap = Object.assign(Component, {
  Default: {
    Scheme: {
      Layer: YandexMapDefaultSchemeLayer,
    },
    Features: {
      Layer: YandexMapDefaultFeaturesLayer,
    },
  },
  Controls: {
    Zoom: {
      Plus: YandexMapControlsZoomPlus,
      Minus: YandexMapControlsZoomMinus,
    },
  },
  Marker: YandexMapMarker,
  Feature: YandexMapFeature,
});

export namespace YandexMap {
  export type Props = YandexMapProps;

  export namespace Default {
    export namespace Scheme {
      export namespace Layer {
        export type Props = YandexMapDefaultSchemeLayerProps;
      }
    }

    export namespace Features {
      export namespace Layer {
        export type Props = YandexMapDefaultFeaturesLayerProps;
      }
    }
  }

  export namespace Controls {
    export namespace Zoom {
      export type Props = YandexMapControlsZoomProps;

      export namespace Plus {
        export type Props = YandexMapControlsZoomPlusProps;
      }

      export namespace Minus {
        export type Props = YandexMapControlsZoomMinusProps;
      }
    }
  }

  export namespace Marker {
    export type Props = YandexMapMarkerProps;
  }

  export namespace Feature {
    export type Props = YandexMapFeatureProps;
  }
}
