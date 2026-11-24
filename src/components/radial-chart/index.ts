import { RadialChart as Component } from '@/components/radial-chart/.partials/components/component';
import { RadialChartProps } from '@/components/radial-chart/.partials/components/component.interface';
import { RadialChartAngleAxis } from '@/components/radial-chart/.partials/components/angle-axis/component';
import { RadialChartAngleAxisProps } from '@/components/radial-chart/.partials/components/angle-axis/component.interface';
import { RadialChartBar } from '@/components/radial-chart/.partials/components/bar/component';
import { RadialChartBarProps } from '@/components/radial-chart/.partials/components/bar/component.interface';
import { RadialChartCell } from '@/components/radial-chart/.partials/components/cell/component';
import { RadialChartCellProps } from '@/components/radial-chart/.partials/components/cell/component.interface';
import { RadialChartTooltip } from '@/components/radial-chart/.partials/components/tooltip/component';
import { RadialChartTooltipProps } from '@/components/radial-chart/.partials/components/tooltip/component.interface';
import { RadialChartTooltipContent } from '@/components/radial-chart/.partials/components/tooltip-content/component';
import { RadialChartTooltipContentProps } from '@/components/radial-chart/.partials/components/tooltip-content/component.interface';

export const RadialChart = Object.assign(Component, {
  Bar: RadialChartBar,
  Cell: RadialChartCell,
  AngleAxis: RadialChartAngleAxis,
  Tooltip: RadialChartTooltip,
  TooltipContent: RadialChartTooltipContent,
});

export namespace RadialChart {
  export type Props = RadialChartProps;

  export namespace Bar {
    export type Props = RadialChartBarProps;
  }

  export namespace Cell {
    export type Props = RadialChartCellProps;
  }

  export namespace AngleAxis {
    export type Props = RadialChartAngleAxisProps;
  }

  export namespace Tooltip {
    export type Props = RadialChartTooltipProps;
  }

  export namespace TooltipContent {
    export type Props = RadialChartTooltipContentProps;
  }
}
