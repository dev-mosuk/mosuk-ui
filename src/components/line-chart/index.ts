import { LineChart as Component } from '@/components/line-chart/.partials/components/component';
import { LineChartProps } from '@/components/line-chart/.partials/components/component.interface';
import { LineChartGrid } from '@/components/line-chart/.partials/components/grid/component';
import { LineChartGridProps } from '@/components/line-chart/.partials/components/grid/component.interface';
import { LineChartTooltip } from '@/components/line-chart/.partials/components/tooltip/component';
import { LineChartTooltipProps } from '@/components/line-chart/.partials/components/tooltip/component.interface';
import { LineChartTooltipContent } from '@/components/line-chart/.partials/components/tooltip-content/component';
import { LineChartTooltipContentProps } from '@/components/line-chart/.partials/components/tooltip-content/component.interface';
import { LineChartXAxis } from '@/components/line-chart/.partials/components/x-axis/component';
import { LineChartXAxisProps } from '@/components/line-chart/.partials/components/x-axis/component.interface';
import { LineChartYAxis } from '@/components/line-chart/.partials/components/y-axis/component';
import { LineChartYAxisProps } from '@/components/line-chart/.partials/components/y-axis/component.interface';
import { LineChartLine } from '@/components/line-chart/.partials/components/line/component';
import { LineChartLineProps } from '@/components/line-chart/.partials/components/line/component.interface';

export const LineChart = Object.assign(Component, {
  Line: LineChartLine,
  XAxis: LineChartXAxis,
  YAxis: LineChartYAxis,
  Grid: LineChartGrid,
  Tooltip: LineChartTooltip,
  TooltipContent: LineChartTooltipContent,
});

export namespace LineChart {
  export type Props = LineChartProps;

  export namespace Line {
    export type Props = LineChartLineProps;
  }
  export namespace XAxis {
    export type Props = LineChartXAxisProps;
  }
  export namespace YAxis {
    export type Props = LineChartYAxisProps;
  }
  export namespace Grid {
    export type Props = LineChartGridProps;
  }
  export namespace Tooltip {
    export type Props = LineChartTooltipProps;
  }
  export namespace TooltipContent {
    export type Props = LineChartTooltipContentProps;
  }
}
