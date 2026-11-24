'use client';

import { AreaChartProps } from '@/components/area-chart/.partials/components/component.interface';
import {
  AREA_CHART_DEFAULT_MARGIN,
  AREA_CHART_Y_AXIS_DEFAULT_WIDTH,
} from '@/components/area-chart/.partials/constants/component.constants';
import styles from '@/components/area-chart/.partials/styles/component.module.css';
import { adaptAxisChildren } from '@/components/area-chart/.partials/utilities/adapt-axis-children';
import classNames from 'classnames';
import React from 'react';
import { AreaChart as RechartsChart, ResponsiveContainer } from 'recharts';

export function AreaChart({
  data,
  margin = AREA_CHART_DEFAULT_MARGIN,
  className,
  children,
  ...rest
}: AreaChartProps) {
  return (
    <div
      {...rest}
      className={classNames(
        'mosuk-area-chart',
        '@container/area-chart',
        'group/area-chart',
        styles.areaChart,
        className,
      )}
    >
      <ResponsiveContainer width='100%' height='100%'>
        <RechartsChart data={data} margin={margin}>
          {adaptAxisChildren(children, AREA_CHART_Y_AXIS_DEFAULT_WIDTH)}
        </RechartsChart>
      </ResponsiveContainer>
    </div>
  );
}
