import { YandexMaps as BaseYandexMaps } from './component';
import type { YandexMapsProps } from './component.interface';
import { YandexMapsMap } from './map/component';
import type { YandexMapsMapProps } from './map/component.interface';
import { YandexMapsMapDefaultFeaturesLayer } from './map/default_features_layer/component';
import type { YandexMapsMapDefaultFeaturesLayerProps } from './map/default_features_layer/component.interface';
import { YandexMapsMapDefaultSchemeLayer } from './map/default_scheme_layer/component';
import type { YandexMapsMapDefaultSchemeLayerProps } from './map/default_scheme_layer/component.interface';
import { YandexMapsMapFeature } from './map/feature/component';
import { YandexMapsMapFeatureProps } from './map/feature/component.interface';
import { YandexMapsMapMarker } from './map/marker/component';
import type { YandexMapsMapMarkerProps } from './map/marker/component.interface';

export const YandexMaps = Object.assign(BaseYandexMaps, {
  Map: Object.assign(YandexMapsMap, {
    DefaultSchemeLayer: YandexMapsMapDefaultSchemeLayer,
    DefaultFeaturesLayer: YandexMapsMapDefaultFeaturesLayer,
    Marker: YandexMapsMapMarker,
    Feature: YandexMapsMapFeature,
  }),
});

export namespace YandexMaps {
  export type Props = YandexMapsProps;

  export namespace Map {
    export type Props = YandexMapsMapProps;

    export namespace DefaultSchemeLayer {
      export type Props = YandexMapsMapDefaultSchemeLayerProps;
    }

    export namespace DefaultFeaturesLayer {
      export type Props = YandexMapsMapDefaultFeaturesLayerProps;
    }

    export namespace Marker {
      export type Props = YandexMapsMapMarkerProps;
    }

    export namespace Feature {
      export type Props = YandexMapsMapFeatureProps;
    }
  }
}
