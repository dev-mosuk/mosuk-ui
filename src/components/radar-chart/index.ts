import { RadarChart as Component } from '@/components/radar-chart/.partials/components/component';
import { RadarChartProps } from '@/components/radar-chart/.partials/components/component.interface';
import { RadarChartAngleAxis } from '@/components/radar-chart/.partials/components/angle-axis/component';
import { RadarChartAngleAxisProps } from '@/components/radar-chart/.partials/components/angle-axis/component.interface';
import { RadarChartGrid } from '@/components/radar-chart/.partials/components/grid/component';
import { RadarChartGridProps } from '@/components/radar-chart/.partials/components/grid/component.interface';
import { RadarChartRadar } from '@/components/radar-chart/.partials/components/radar/component';
import { RadarChartRadarProps } from '@/components/radar-chart/.partials/components/radar/component.interface';
import { RadarChartRadiusAxis } from '@/components/radar-chart/.partials/components/radius-axis/component';
import { RadarChartRadiusAxisProps } from '@/components/radar-chart/.partials/components/radius-axis/component.interface';
import { RadarChartTooltip } from '@/components/radar-chart/.partials/components/tooltip/component';
import { RadarChartTooltipProps } from '@/components/radar-chart/.partials/components/tooltip/component.interface';
import { RadarChartTooltipContent } from '@/components/radar-chart/.partials/components/tooltip-content/component';
import { RadarChartTooltipContentProps } from '@/components/radar-chart/.partials/components/tooltip-content/component.interface';

export const RadarChart = Object.assign(Component, {
  Radar: RadarChartRadar,
  Grid: RadarChartGrid,
  AngleAxis: RadarChartAngleAxis,
  RadiusAxis: RadarChartRadiusAxis,
  Tooltip: RadarChartTooltip,
  TooltipContent: RadarChartTooltipContent,
});

export namespace RadarChart {
  export type Props = RadarChartProps;

  export namespace Radar {
    export type Props = RadarChartRadarProps;
  }

  export namespace Grid {
    export type Props = RadarChartGridProps;
  }

  export namespace AngleAxis {
    export type Props = RadarChartAngleAxisProps;
  }

  export namespace RadiusAxis {
    export type Props = RadarChartRadiusAxisProps;
  }

  export namespace Tooltip {
    export type Props = RadarChartTooltipProps;
  }

  export namespace TooltipContent {
    export type Props = RadarChartTooltipContentProps;
  }
}
