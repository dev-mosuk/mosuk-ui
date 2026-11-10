import { YandexMap as Component } from '@/integrations/yandex/maps/components/component';
import { YandexMapProps } from '@/integrations/yandex/maps/components/component.interface';
import { YandexMapControlsZoomProps } from '@/integrations/yandex/maps/components/controls/zoom/component.interface';
import { YandexMapControlsZoomMinus } from '@/integrations/yandex/maps/components/controls/zoom/minus/component';
import { YandexMapControlsZoomMinusProps } from '@/integrations/yandex/maps/components/controls/zoom/minus/component.interface';
import { YandexMapControlsZoomPlus } from '@/integrations/yandex/maps/components/controls/zoom/plus/component';
import { YandexMapControlsZoomPlusProps } from '@/integrations/yandex/maps/components/controls/zoom/plus/component.interface';
import { YandexMapDefaultFeaturesLayer } from '@/integrations/yandex/maps/components/default/features/layer/component';
import { YandexMapDefaultFeaturesLayerProps } from '@/integrations/yandex/maps/components/default/features/layer/component.interface';
import { YandexMapDefaultSchemeLayer } from '@/integrations/yandex/maps/components/default/scheme/layer/component';
import { YandexMapDefaultSchemeLayerProps } from '@/integrations/yandex/maps/components/default/scheme/layer/component.interface';
import { YandexMapFeature } from '@/integrations/yandex/maps/components/feature/component';
import { YandexMapFeatureProps } from '@/integrations/yandex/maps/components/feature/component.interface';
import { YandexMapMarker } from '@/integrations/yandex/maps/components/marker/component';
import { YandexMapMarkerProps } from '@/integrations/yandex/maps/components/marker/component.interface';
import { YandexMapSkeleton } from '@/integrations/yandex/maps/components/.partials/skeleton/component';
import type { YandexMapSkeletonProps } from '@/integrations/yandex/maps/components/.partials/skeleton/component.interface';
import { YandexMapDefaultSchemeLayerSkeleton } from '@/integrations/yandex/maps/components/.partials/skeleton/default/scheme/layer/component';
import { YandexMapDefaultSchemeLayerSkeletonProps } from '@/integrations/yandex/maps/components/.partials/skeleton/default/scheme/layer/component.interface';

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
