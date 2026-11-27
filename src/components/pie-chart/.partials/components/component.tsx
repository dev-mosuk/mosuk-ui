'use client';

import { PieChartProps } from '@/components/pie-chart/.partials/components/component.interface';
import styles from '@/components/pie-chart/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';
import { PieChart as RechartsChart, ResponsiveContainer } from 'recharts';

export function PieChart({
  className,
  children,
  ...rest
}: PieChartProps) {
  return (
    <div
      {...rest}
      className={classNames(
        'mosuk-pie-chart',
        'group/pie-chart',
        styles.pieChart,
        className,
      )}
    >
      <ResponsiveContainer width='100%' height='100%'>
        <RechartsChart>{children}</RechartsChart>
      </ResponsiveContainer>
    </div>
  );
}
