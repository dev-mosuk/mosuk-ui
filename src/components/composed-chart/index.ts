import { ComposedChart as Component } from '@/components/composed-chart/.partials/components/component';
import { ComposedChartProps } from '@/components/composed-chart/.partials/components/component.interface';
import { ComposedChartGrid } from '@/components/composed-chart/.partials/components/grid/component';
import { ComposedChartGridProps } from '@/components/composed-chart/.partials/components/grid/component.interface';
import { ComposedChartTooltip } from '@/components/composed-chart/.partials/components/tooltip/component';
import { ComposedChartTooltipProps } from '@/components/composed-chart/.partials/components/tooltip/component.interface';
import { ComposedChartTooltipContent } from '@/components/composed-chart/.partials/components/tooltip-content/component';
import { ComposedChartTooltipContentProps } from '@/components/composed-chart/.partials/components/tooltip-content/component.interface';
import { ComposedChartXAxis } from '@/components/composed-chart/.partials/components/x-axis/component';
import { ComposedChartXAxisProps } from '@/components/composed-chart/.partials/components/x-axis/component.interface';
import { ComposedChartYAxis } from '@/components/composed-chart/.partials/components/y-axis/component';
import { ComposedChartYAxisProps } from '@/components/composed-chart/.partials/components/y-axis/component.interface';
import { ComposedChartBar } from '@/components/composed-chart/.partials/components/bar/component';
import { ComposedChartBarProps } from '@/components/composed-chart/.partials/components/bar/component.interface';
import { ComposedChartLine } from '@/components/composed-chart/.partials/components/line/component';
import { ComposedChartLineProps } from '@/components/composed-chart/.partials/components/line/component.interface';
import { ComposedChartArea } from '@/components/composed-chart/.partials/components/area/component';
import { ComposedChartAreaProps } from '@/components/composed-chart/.partials/components/area/component.interface';

export const ComposedChart = Object.assign(Component, {
  Bar: ComposedChartBar,
  Line: ComposedChartLine,
  Area: ComposedChartArea,
  XAxis: ComposedChartXAxis,
  YAxis: ComposedChartYAxis,
  Grid: ComposedChartGrid,
  Tooltip: ComposedChartTooltip,
  TooltipContent: ComposedChartTooltipContent,
});

export namespace ComposedChart {
  export type Props = ComposedChartProps;

  export namespace Bar {
    export type Props = ComposedChartBarProps;
  }
  export namespace Line {
    export type Props = ComposedChartLineProps;
  }
  export namespace Area {
    export type Props = ComposedChartAreaProps;
  }
  export namespace XAxis {
    export type Props = ComposedChartXAxisProps;
  }
  export namespace YAxis {
    export type Props = ComposedChartYAxisProps;
  }
  export namespace Grid {
    export type Props = ComposedChartGridProps;
  }
  export namespace Tooltip {
    export type Props = ComposedChartTooltipProps;
  }
  export namespace TooltipContent {
    export type Props = ComposedChartTooltipContentProps;
  }
}
