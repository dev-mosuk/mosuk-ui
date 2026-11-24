import { Slider as Component } from '@/components/slider/.partials/components/component';
import { SliderProps } from '@/components/slider/.partials/components/component.interface';
import { SliderIndicator } from '@/components/slider/.partials/components/indicator/component';
import { SliderIndicatorProps } from '@/components/slider/.partials/components/indicator/component.interface';
import { SliderSteps } from '@/components/slider/.partials/components/steps/component';
import { SliderStepsProps } from '@/components/slider/.partials/components/steps/component.interface';
import { SliderThumb } from '@/components/slider/.partials/components/thumb/component';
import { SliderThumbProps } from '@/components/slider/.partials/components/thumb/component.interface';
import { SliderTrack } from '@/components/slider/.partials/components/track/component';
import { SliderTrackProps } from '@/components/slider/.partials/components/track/component.interface';
import { SliderValue } from '@/components/slider/.partials/components/value/component';
import { SliderValueProps } from '@/components/slider/.partials/components/value/component.interface';
import { SliderVariant } from '@/components/slider/.partials/enums/component.enums';

export const Slider = Object.assign(Component, {
  Value: SliderValue,
  Track: SliderTrack,
  Indicator: SliderIndicator,
  Steps: SliderSteps,
  Thumb: SliderThumb,
  ENUMS: {
    Variant: SliderVariant,
  },
});

export namespace Slider {
  export type Props = SliderProps;

  export namespace Value {
    export type Props = SliderValueProps;
  }

  export namespace Track {
    export type Props = SliderTrackProps;
  }

  export namespace Indicator {
    export type Props = SliderIndicatorProps;
  }

  export namespace Steps {
    export type Props = SliderStepsProps;
  }

  export namespace Thumb {
    export type Props = SliderThumbProps;
  }
}
