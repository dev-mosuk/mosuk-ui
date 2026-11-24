import { ChartLegend as Component } from '@/components/chart-legend/.partials/components/component';
import { ChartLegendProps } from '@/components/chart-legend/.partials/components/component.interface';
import { ChartLegendIndicator as IndicatorPart } from '@/components/chart-legend/.partials/components/indicator/component';
import { ChartLegendIndicatorProps } from '@/components/chart-legend/.partials/components/indicator/component.interface';
import { ChartLegendItem } from '@/components/chart-legend/.partials/components/item/component';
import { ChartLegendItemProps } from '@/components/chart-legend/.partials/components/item/component.interface';
import { ChartLegendLabel } from '@/components/chart-legend/.partials/components/label/component';
import { ChartLegendLabelProps } from '@/components/chart-legend/.partials/components/label/component.interface';
import {
  ChartLegendIndicator,
  ChartLegendTone,
} from '@/components/chart-legend/.partials/enums/component.enums';

export const ChartLegend = Object.assign(Component, {
  Item: ChartLegendItem,
  Indicator: IndicatorPart,
  Label: ChartLegendLabel,
  ENUMS: {
    Tone: ChartLegendTone,
    Indicator: ChartLegendIndicator,
  },
});

export namespace ChartLegend {
  export type Props = ChartLegendProps;

  export namespace Item {
    export type Props = ChartLegendItemProps;
  }

  export namespace Indicator {
    export type Props = ChartLegendIndicatorProps;
  }

  export namespace Label {
    export type Props = ChartLegendLabelProps;
  }
}
