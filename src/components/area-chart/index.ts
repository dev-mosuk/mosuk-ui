import { AreaChart as Component } from '@/components/area-chart/.partials/components/component';
import { AreaChartProps } from '@/components/area-chart/.partials/components/component.interface';
import { AreaChartGrid } from '@/components/area-chart/.partials/components/grid/component';
import { AreaChartGridProps } from '@/components/area-chart/.partials/components/grid/component.interface';
import { AreaChartTooltip } from '@/components/area-chart/.partials/components/tooltip/component';
import { AreaChartTooltipProps } from '@/components/area-chart/.partials/components/tooltip/component.interface';
import { AreaChartTooltipContent } from '@/components/area-chart/.partials/components/tooltip-content/component';
import { AreaChartTooltipContentProps } from '@/components/area-chart/.partials/components/tooltip-content/component.interface';
import { AreaChartXAxis } from '@/components/area-chart/.partials/components/x-axis/component';
import { AreaChartXAxisProps } from '@/components/area-chart/.partials/components/x-axis/component.interface';
import { AreaChartYAxis } from '@/components/area-chart/.partials/components/y-axis/component';
import { AreaChartYAxisProps } from '@/components/area-chart/.partials/components/y-axis/component.interface';
import { AreaChartArea } from '@/components/area-chart/.partials/components/area/component';
import { AreaChartAreaProps } from '@/components/area-chart/.partials/components/area/component.interface';

export const AreaChart = Object.assign(Component, {
  Area: AreaChartArea,
  XAxis: AreaChartXAxis,
  YAxis: AreaChartYAxis,
  Grid: AreaChartGrid,
  Tooltip: AreaChartTooltip,
  TooltipContent: AreaChartTooltipContent,
});

export namespace AreaChart {
  export type Props = AreaChartProps;

  export namespace Area {
    export type Props = AreaChartAreaProps;
  }
  export namespace XAxis {
    export type Props = AreaChartXAxisProps;
  }
  export namespace YAxis {
    export type Props = AreaChartYAxisProps;
  }
  export namespace Grid {
    export type Props = AreaChartGridProps;
  }
  export namespace Tooltip {
    export type Props = AreaChartTooltipProps;
  }
  export namespace TooltipContent {
    export type Props = AreaChartTooltipContentProps;
  }
}
