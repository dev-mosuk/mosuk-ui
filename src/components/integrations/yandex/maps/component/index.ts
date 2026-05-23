import { YandexMap as Component } from '@/components/integrations/yandex/maps/component/component';
import { YandexMapProps } from '@/components/integrations/yandex/maps/component/component.interface';
import { YandexMapControlsZoomProps } from '@/components/integrations/yandex/maps/component/controls/zoom/component.interface';
import { YandexMapControlsZoomMinus } from '@/components/integrations/yandex/maps/component/controls/zoom/minus/component';
import { YandexMapControlsZoomMinusProps } from '@/components/integrations/yandex/maps/component/controls/zoom/minus/component.interface';
import { YandexMapControlsZoomPlus } from '@/components/integrations/yandex/maps/component/controls/zoom/plus/component';
import { YandexMapControlsZoomPlusProps } from '@/components/integrations/yandex/maps/component/controls/zoom/plus/component.interface';
import { YandexMapDefaultFeaturesLayer } from '@/components/integrations/yandex/maps/component/default/features/layer/component';
import { YandexMapDefaultFeaturesLayerProps } from '@/components/integrations/yandex/maps/component/default/features/layer/component.interface';
import { YandexMapDefaultSchemeLayer } from '@/components/integrations/yandex/maps/component/default/scheme/layer/component';
import { YandexMapDefaultSchemeLayerProps } from '@/components/integrations/yandex/maps/component/default/scheme/layer/component.interface';
import { YandexMapFeature } from '@/components/integrations/yandex/maps/component/feature/component';
import { YandexMapFeatureProps } from '@/components/integrations/yandex/maps/component/feature/component.interface';
import { YandexMapMarker } from '@/components/integrations/yandex/maps/component/marker/component';
import { YandexMapMarkerProps } from '@/components/integrations/yandex/maps/component/marker/component.interface';

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
