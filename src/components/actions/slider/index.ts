import { Slider as Component } from '@/components/actions/slider/.partials/components/component';
import { SliderProps } from '@/components/actions/slider/.partials/components/component.interface';
import { SliderIndicator } from '@/components/actions/slider/.partials/components/indicator/component';
import { SliderIndicatorProps } from '@/components/actions/slider/.partials/components/indicator/component.interface';
import { SliderLabel } from '@/components/actions/slider/.partials/components/label/component';
import { SliderLabelProps } from '@/components/actions/slider/.partials/components/label/component.interface';
import { SliderThumb } from '@/components/actions/slider/.partials/components/thumb/component';
import { SliderThumbProps } from '@/components/actions/slider/.partials/components/thumb/component.interface';
import { SliderTrack } from '@/components/actions/slider/.partials/components/track/component';
import { SliderTrackProps } from '@/components/actions/slider/.partials/components/track/component.interface';
import { SliderValue } from '@/components/actions/slider/.partials/components/value/component';
import { SliderValueProps } from '@/components/actions/slider/.partials/components/value/component.interface';

export const Slider = Object.assign(Component, {
  Label: SliderLabel,
  Value: SliderValue,
  Track: SliderTrack,
  Indicator: SliderIndicator,
  Thumb: SliderThumb,
});

export namespace Slider {
  export type Props = SliderProps;

  export namespace Label {
    export type Props = SliderLabelProps;
  }

  export namespace Value {
    export type Props = SliderValueProps;
  }

  export namespace Track {
    export type Props = SliderTrackProps;
  }

  export namespace Indicator {
    export type Props = SliderIndicatorProps;
  }

  export namespace Thumb {
    export type Props = SliderThumbProps;
  }
}
