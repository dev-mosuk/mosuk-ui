import { SegmentButton } from '@/components/segment/.partials/components/button/component';
import { SegmentButtonProps } from '@/components/segment/.partials/components/button/component.interface';
import { Segment as Component } from '@/components/segment/.partials/components/component';
import type { SegmentProps } from '@/components/segment/.partials/components/component.interface';
import { SegmentIndicator } from '@/components/segment/.partials/components/indicator/component';
import { SegmentIndicatorProps } from '@/components/segment/.partials/components/indicator/component.interface';
import { SegmentVariant } from '@/components/segment/.partials/enums/component.enums';

export const Segment = Object.assign(Component, {
  Button: SegmentButton,
  Indicator: SegmentIndicator,
  ENUMS: {
    Variant: SegmentVariant,
  },
});

export namespace Segment {
  export type Props = SegmentProps;

  export namespace Button {
    export type Props<C = 'button'> = SegmentButtonProps<C>;
  }

  export namespace Indicator {
    export type Props<C = 'figure'> = SegmentIndicatorProps<C>;
  }
}
