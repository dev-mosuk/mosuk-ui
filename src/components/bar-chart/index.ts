import { BarChart as Component } from '@/components/bar-chart/.partials/components/component';
import { BarChartProps } from '@/components/bar-chart/.partials/components/component.interface';
import { BarChartBar } from '@/components/bar-chart/.partials/components/bar/component';
import { BarChartBarProps } from '@/components/bar-chart/.partials/components/bar/component.interface';
import { BarChartGrid } from '@/components/bar-chart/.partials/components/grid/component';
import { BarChartGridProps } from '@/components/bar-chart/.partials/components/grid/component.interface';
import { BarChartTooltip } from '@/components/bar-chart/.partials/components/tooltip/component';
import { BarChartTooltipProps } from '@/components/bar-chart/.partials/components/tooltip/component.interface';
import { BarChartTooltipContent } from '@/components/bar-chart/.partials/components/tooltip-content/component';
import { BarChartTooltipContentProps } from '@/components/bar-chart/.partials/components/tooltip-content/component.interface';
import { BarChartXAxis } from '@/components/bar-chart/.partials/components/x-axis/component';
import { BarChartXAxisProps } from '@/components/bar-chart/.partials/components/x-axis/component.interface';
import { BarChartYAxis } from '@/components/bar-chart/.partials/components/y-axis/component';
import { BarChartYAxisProps } from '@/components/bar-chart/.partials/components/y-axis/component.interface';

export const BarChart = Object.assign(Component, {
  Bar: BarChartBar,
  XAxis: BarChartXAxis,
  YAxis: BarChartYAxis,
  Grid: BarChartGrid,
  Tooltip: BarChartTooltip,
  TooltipContent: BarChartTooltipContent,
});

export namespace BarChart {
  export type Props = BarChartProps;

  export namespace Bar {
    export type Props = BarChartBarProps;
  }

  export namespace XAxis {
    export type Props = BarChartXAxisProps;
  }

  export namespace YAxis {
    export type Props = BarChartYAxisProps;
  }

  export namespace Grid {
    export type Props = BarChartGridProps;
  }

  export namespace Tooltip {
    export type Props = BarChartTooltipProps;
  }

  export namespace TooltipContent {
    export type Props = BarChartTooltipContentProps;
  }
}
