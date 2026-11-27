'use client';

import { LineChartProps } from '@/components/line-chart/.partials/components/component.interface';
import {
  LINE_CHART_DEFAULT_MARGIN,
  LINE_CHART_Y_AXIS_DEFAULT_WIDTH,
} from '@/components/line-chart/.partials/constants/component.constants';
import styles from '@/components/line-chart/.partials/styles/component.module.css';
import { adaptAxisChildren } from '@/components/line-chart/.partials/utilities/adapt-axis-children';
import classNames from 'classnames';
import React from 'react';
import { LineChart as RechartsChart, ResponsiveContainer } from 'recharts';

export function LineChart({
  data,
  margin = LINE_CHART_DEFAULT_MARGIN,
  className,
  children,
  ...rest
}: LineChartProps) {
  return (
    <div
      {...rest}
      className={classNames(
        'mosuk-line-chart',
        'group/line-chart',
        styles.lineChart,
        className,
      )}
    >
      <ResponsiveContainer width='100%' height='100%'>
        <RechartsChart data={data} margin={margin}>
          {adaptAxisChildren(children, LINE_CHART_Y_AXIS_DEFAULT_WIDTH)}
        </RechartsChart>
      </ResponsiveContainer>
    </div>
  );
}
