import { ChartTooltip as Component } from '@/components/chart-tooltip/.partials/components/component';
import { ChartTooltipProps } from '@/components/chart-tooltip/.partials/components/component.interface';
import { ChartTooltipContent } from '@/components/chart-tooltip/.partials/components/content/component';
import { ChartTooltipContentProps } from '@/components/chart-tooltip/.partials/components/content/component.interface';
import { ChartTooltipHeader } from '@/components/chart-tooltip/.partials/components/header/component';
import { ChartTooltipHeaderProps } from '@/components/chart-tooltip/.partials/components/header/component.interface';
import { ChartTooltipIndicator } from '@/components/chart-tooltip/.partials/components/indicator/component';
import { ChartTooltipIndicatorProps } from '@/components/chart-tooltip/.partials/components/indicator/component.interface';
import { ChartTooltipItem } from '@/components/chart-tooltip/.partials/components/item/component';
import { ChartTooltipItemProps } from '@/components/chart-tooltip/.partials/components/item/component.interface';
import { ChartTooltipLabel } from '@/components/chart-tooltip/.partials/components/label/component';
import { ChartTooltipLabelProps } from '@/components/chart-tooltip/.partials/components/label/component.interface';
import { ChartTooltipValue } from '@/components/chart-tooltip/.partials/components/value/component';
import { ChartTooltipValueProps } from '@/components/chart-tooltip/.partials/components/value/component.interface';
import { TooltipVariant } from '@/components/tooltip/.partials/enums/component.enums';

export const ChartTooltip = Object.assign(Component, {
  Header: ChartTooltipHeader,
  Item: ChartTooltipItem,
  Indicator: ChartTooltipIndicator,
  Label: ChartTooltipLabel,
  Value: ChartTooltipValue,
  Content: ChartTooltipContent,
  ENUMS: {
    Variant: TooltipVariant,
  },
});

export namespace ChartTooltip {
  export type Props = ChartTooltipProps;

  export namespace Header {
    export type Props = ChartTooltipHeaderProps;
  }

  export namespace Item {
    export type Props = ChartTooltipItemProps;
  }

  export namespace Indicator {
    export type Props = ChartTooltipIndicatorProps;
  }

  export namespace Label {
    export type Props = ChartTooltipLabelProps;
  }

  export namespace Value {
    export type Props = ChartTooltipValueProps;
  }

  export namespace Content {
    export type Props = ChartTooltipContentProps;
  }
}
