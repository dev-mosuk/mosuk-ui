import { ChartTooltip } from '@/components/chart-tooltip/.partials/components/component';
import {
  CHART_TOOLTIP_CONTENT_DEFAULT_IS_HEADER_HIDDEN,
  CHART_TOOLTIP_DEFAULT_INDICATOR,
} from '@/components/chart-tooltip/.partials/constants/component.constants';
import { ChartTooltipContentProps } from '@/components/chart-tooltip/.partials/components/content/component.interface';
import { ChartTooltipHeader } from '@/components/chart-tooltip/.partials/components/header/component';
import { ChartTooltipIndicator } from '@/components/chart-tooltip/.partials/components/indicator/component';
import { ChartTooltipItem } from '@/components/chart-tooltip/.partials/components/item/component';
import { ChartTooltipLabel } from '@/components/chart-tooltip/.partials/components/label/component';
import { ChartTooltipValue } from '@/components/chart-tooltip/.partials/components/value/component';
import React from 'react';

export function ChartTooltipContent({
  active,
  payload,
  label,
  isHeaderHidden = CHART_TOOLTIP_CONTENT_DEFAULT_IS_HEADER_HIDDEN,
  indicator = CHART_TOOLTIP_DEFAULT_INDICATOR,
  labelFormatter,
  valueFormatter,
}: ChartTooltipContentProps) {
  if (!active || !payload?.length) {
    return null;
  }

  const header =
    label == null
      ? null
      : labelFormatter
        ? labelFormatter(label)
        : String(label);

  return (
    <ChartTooltip isActive indicator={indicator}>
      {!isHeaderHidden && header != null ? (
        <ChartTooltipHeader>{header}</ChartTooltipHeader>
      ) : null}
      {payload.map((entry, index) => {
        const value = entry.value;
        const color =
          (typeof entry.color === 'string' && entry.color) ||
          (typeof entry.fill === 'string' && entry.fill) ||
          'var(--color-chart-1)';
        const name = entry.name ?? entry.dataKey ?? index;

        return (
          <ChartTooltipItem key={`${String(name)}-${index}`}>
            <ChartTooltipIndicator color={color} />
            <ChartTooltipLabel>{String(name)}</ChartTooltipLabel>
            <ChartTooltipValue>
              {value == null
                ? '—'
                : valueFormatter
                  ? valueFormatter(value as string | number)
                  : String(value)}
            </ChartTooltipValue>
          </ChartTooltipItem>
        );
      })}
    </ChartTooltip>
  );
}
