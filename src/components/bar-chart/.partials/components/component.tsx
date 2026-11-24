'use client';

import { BarChartProps } from '@/components/bar-chart/.partials/components/component.interface';
import {
  BAR_CHART_DEFAULT_LAYOUT,
  BAR_CHART_DEFAULT_MARGIN,
  BAR_CHART_Y_AXIS_DEFAULT_WIDTH,
} from '@/components/bar-chart/.partials/constants/component.constants';
import styles from '@/components/bar-chart/.partials/styles/component.module.css';
import { adaptAxisChildren } from '@/components/bar-chart/.partials/utilities/adapt-axis-children';
import classNames from 'classnames';
import { BarChart as RechartsBarChart, ResponsiveContainer } from 'recharts';
import React from 'react';

export function BarChart({
  data,
  layout = BAR_CHART_DEFAULT_LAYOUT,
  margin = BAR_CHART_DEFAULT_MARGIN,
  className,
  children,
  ...rest
}: BarChartProps) {
  return (
    <div
      {...rest}
      className={classNames(
        'mosuk-bar-chart',
        '@container/bar-chart',
        'group/bar-chart',
        styles.barChart,
        className,
      )}
    >
      <ResponsiveContainer width='100%' height='100%'>
        <RechartsBarChart data={data} layout={layout} margin={margin}>
          {adaptAxisChildren(children, BAR_CHART_Y_AXIS_DEFAULT_WIDTH)}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}
