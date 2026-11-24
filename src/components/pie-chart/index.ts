import { PieChart as Component } from '@/components/pie-chart/.partials/components/component';
import { PieChartProps } from '@/components/pie-chart/.partials/components/component.interface';
import { PieChartCell } from '@/components/pie-chart/.partials/components/cell/component';
import { PieChartCellProps } from '@/components/pie-chart/.partials/components/cell/component.interface';
import { PieChartLabel } from '@/components/pie-chart/.partials/components/label/component';
import { PieChartLabelProps } from '@/components/pie-chart/.partials/components/label/component.interface';
import { PieChartPie } from '@/components/pie-chart/.partials/components/pie/component';
import { PieChartPieProps } from '@/components/pie-chart/.partials/components/pie/component.interface';
import { PieChartTooltip } from '@/components/pie-chart/.partials/components/tooltip/component';
import { PieChartTooltipProps } from '@/components/pie-chart/.partials/components/tooltip/component.interface';
import { PieChartTooltipContent } from '@/components/pie-chart/.partials/components/tooltip-content/component';
import { PieChartTooltipContentProps } from '@/components/pie-chart/.partials/components/tooltip-content/component.interface';

export const PieChart = Object.assign(Component, {
  Pie: PieChartPie,
  Cell: PieChartCell,
  Label: PieChartLabel,
  Tooltip: PieChartTooltip,
  TooltipContent: PieChartTooltipContent,
});

export namespace PieChart {
  export type Props = PieChartProps;

  export namespace Pie {
    export type Props = PieChartPieProps;
  }

  export namespace Cell {
    export type Props = PieChartCellProps;
  }

  export namespace Label {
    export type Props = PieChartLabelProps;
  }

  export namespace Tooltip {
    export type Props = PieChartTooltipProps;
  }

  export namespace TooltipContent {
    export type Props = PieChartTooltipContentProps;
  }
}
