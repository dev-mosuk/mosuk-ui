'use client';

import { RadialChartProps } from '@/components/radial-chart/.partials/components/component.interface';
import {
  RADIAL_CHART_DEFAULT_BAR_SIZE,
  RADIAL_CHART_DEFAULT_END_ANGLE,
  RADIAL_CHART_DEFAULT_INNER_RADIUS,
  RADIAL_CHART_DEFAULT_OUTER_RADIUS,
  RADIAL_CHART_DEFAULT_START_ANGLE,
} from '@/components/radial-chart/.partials/constants/component.constants';
import styles from '@/components/radial-chart/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';
import { RadialBarChart as RechartsChart, ResponsiveContainer } from 'recharts';

export function RadialChart({
  data,
  barSize = RADIAL_CHART_DEFAULT_BAR_SIZE,
  innerRadius = RADIAL_CHART_DEFAULT_INNER_RADIUS,
  outerRadius = RADIAL_CHART_DEFAULT_OUTER_RADIUS,
  startAngle = RADIAL_CHART_DEFAULT_START_ANGLE,
  endAngle = RADIAL_CHART_DEFAULT_END_ANGLE,
  className,
  children,
  ...rest
}: RadialChartProps) {
  return (
    <div
      {...rest}
      className={classNames(
        'mosuk-radial-chart',
        '@container/radial-chart',
        'group/radial-chart',
        styles.radialChart,
        className,
      )}
    >
      <ResponsiveContainer width='100%' height='100%'>
        <RechartsChart
          data={data}
          barSize={barSize}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
        >
          {children}
        </RechartsChart>
      </ResponsiveContainer>
    </div>
  );
}
