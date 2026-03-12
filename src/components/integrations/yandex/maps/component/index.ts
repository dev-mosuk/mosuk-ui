import { YandexMap as Component } from './component';
import { YandexMapProps } from './component.interface';
import { YandexMapControlsZoomProps } from './controls/zoom/component.interface';
import { YandexMapControlsZoomMinus } from './controls/zoom/minus/component';
import { YandexMapControlsZoomMinusProps } from './controls/zoom/minus/component.interface';
import { YandexMapControlsZoomPlus } from './controls/zoom/plus/component';
import { YandexMapControlsZoomPlusProps } from './controls/zoom/plus/component.interface';
import { YandexMapDefaultFeaturesLayer } from './default/features/layer/component';
import { YandexMapDefaultFeaturesLayerProps } from './default/features/layer/component.interface';
import { YandexMapDefaultSchemeLayer } from './default/scheme/layer/component';
import { YandexMapDefaultSchemeLayerProps } from './default/scheme/layer/component.interface';
import { YandexMapFeature } from './feature/component';
import { YandexMapFeatureProps } from './feature/component.interface';
import { YandexMapMarker } from './marker/component';
import { YandexMapMarkerProps } from './marker/component.interface';

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
