import { YandexMap as Component } from '@/components/yandex-maps/.partials/components/component';
import type { YandexMapProps } from '@/components/yandex-maps/.partials/components/component.interface';
import { YandexMapControlsZoomMinus } from '@/components/yandex-maps/.partials/components/controls-zoom-minus/component';
import type { YandexMapControlsZoomMinusProps } from '@/components/yandex-maps/.partials/components/controls-zoom-minus/component.interface';
import { YandexMapControlsZoomPlus } from '@/components/yandex-maps/.partials/components/controls-zoom-plus/component';
import type { YandexMapControlsZoomPlusProps } from '@/components/yandex-maps/.partials/components/controls-zoom-plus/component.interface';
import type { YandexMapControlsZoomProps } from '@/components/yandex-maps/.partials/components/controls-zoom/component.interface';
import { YandexMapDefaultFeaturesLayer } from '@/components/yandex-maps/.partials/components/default-features-layer/component';
import type { YandexMapDefaultFeaturesLayerProps } from '@/components/yandex-maps/.partials/components/default-features-layer/component.interface';
import { YandexMapDefaultSchemeLayer } from '@/components/yandex-maps/.partials/components/default-scheme-layer/component';
import type { YandexMapDefaultSchemeLayerProps } from '@/components/yandex-maps/.partials/components/default-scheme-layer/component.interface';
import { YandexMapFeature } from '@/components/yandex-maps/.partials/components/feature/component';
import type { YandexMapFeatureProps } from '@/components/yandex-maps/.partials/components/feature/component.interface';
import { YandexMapMarker } from '@/components/yandex-maps/.partials/components/marker/component';
import type { YandexMapMarkerProps } from '@/components/yandex-maps/.partials/components/marker/component.interface';
import { YandexMapDefaultSchemeLayerSkeleton } from '@/components/yandex-maps/.partials/components/skeleton-default-scheme-layer/component';
import type { YandexMapDefaultSchemeLayerSkeletonProps } from '@/components/yandex-maps/.partials/components/skeleton-default-scheme-layer/component.interface';
import { YandexMapSkeleton } from '@/components/yandex-maps/.partials/components/skeleton/component';
import type { YandexMapSkeletonProps } from '@/components/yandex-maps/.partials/components/skeleton/component.interface';

export const YandexMap = Object.assign(Component, {
  Default: {
    Scheme: {
      Layer: YandexMapDefaultSchemeLayer,
      LayerSkeleton: YandexMapDefaultSchemeLayerSkeleton,
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
  Skeleton: YandexMapSkeleton,
});

export namespace YandexMap {
  export type Props = YandexMapProps;

  export namespace Default {
    export namespace Scheme {
      export namespace Layer {
        export type Props = YandexMapDefaultSchemeLayerProps;
      }

      export namespace LayerSkeleton {
        export type Props = YandexMapDefaultSchemeLayerSkeletonProps;
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

  export namespace Skeleton {
    export type Props = YandexMapSkeletonProps;
  }
}
