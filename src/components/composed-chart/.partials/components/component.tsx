'use client';

import { ComposedChartProps } from '@/components/composed-chart/.partials/components/component.interface';
import {
  COMPOSED_CHART_DEFAULT_MARGIN,
  COMPOSED_CHART_Y_AXIS_DEFAULT_WIDTH,
} from '@/components/composed-chart/.partials/constants/component.constants';
import styles from '@/components/composed-chart/.partials/styles/component.module.css';
import { adaptAxisChildren } from '@/components/composed-chart/.partials/utilities/adapt-axis-children';
import classNames from 'classnames';
import React from 'react';
import { ComposedChart as RechartsChart, ResponsiveContainer } from 'recharts';

export function ComposedChart({
  data,
  margin = COMPOSED_CHART_DEFAULT_MARGIN,
  className,
  children,
  ...rest
}: ComposedChartProps) {
  return (
    <div
      {...rest}
      className={classNames(
        'mosuk-composed-chart',
        'group/composed-chart',
        styles.composedChart,
        className,
      )}
    >
      <ResponsiveContainer width='100%' height='100%'>
        <RechartsChart data={data} margin={margin}>
          {adaptAxisChildren(children, COMPOSED_CHART_Y_AXIS_DEFAULT_WIDTH)}
        </RechartsChart>
      </ResponsiveContainer>
    </div>
  );
}
