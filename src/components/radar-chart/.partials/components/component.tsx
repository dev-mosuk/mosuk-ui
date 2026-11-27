'use client';

import { RadarChartProps } from '@/components/radar-chart/.partials/components/component.interface';
import styles from '@/components/radar-chart/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';
import { RadarChart as RechartsChart, ResponsiveContainer } from 'recharts';

export function RadarChart({
  data,
  className,
  children,
  ...rest
}: RadarChartProps) {
  return (
    <div
      {...rest}
      className={classNames(
        'mosuk-radar-chart',
        'group/radar-chart',
        styles.radarChart,
        className,
      )}
    >
      <ResponsiveContainer width='100%' height='100%'>
        <RechartsChart data={data}>{children}</RechartsChart>
      </ResponsiveContainer>
    </div>
  );
}
