import { ProgressBarProps } from '@/components/progress-bar/.partials/components/component.interface';
import {
  PROGRESS_BAR_DEFAULT_IS_LOADING,
  PROGRESS_BAR_DEFAULT_MAX,
  PROGRESS_BAR_DEFAULT_MIN,
  PROGRESS_BAR_DEFAULT_SIZE,
  PROGRESS_BAR_DEFAULT_VARIANT,
} from '@/components/progress-bar/.partials/constants/component.constants';
import styles from '@/components/progress-bar/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { type CSSProperties } from 'react';

function progressBarPercent(value: number, min: number, max: number) {
  const range = max - min;
  if (range <= 0) {
    return 0;
  }

  return Math.min(100, Math.max(0, ((value - min) / range) * 100));
}

export function ProgressBar({
  size = PROGRESS_BAR_DEFAULT_SIZE,
  variant = PROGRESS_BAR_DEFAULT_VARIANT,
  value = PROGRESS_BAR_DEFAULT_MIN,
  min = PROGRESS_BAR_DEFAULT_MIN,
  max = PROGRESS_BAR_DEFAULT_MAX,
  isLoading = PROGRESS_BAR_DEFAULT_IS_LOADING,
  className,
  style,
  children,
  ...rest
}: ProgressBarProps) {
  const percent = progressBarPercent(value, min, max);

  return (
    <data
      {...rest}
      role='progressbar'
      value={isLoading ? undefined : String(value)}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={isLoading ? undefined : value}
      data-size={size}
      data-variant={variant}
      data-min={min}
      data-max={max}
      data-value={isLoading ? undefined : value}
      data-loading={isLoading || undefined}
      style={
        {
          '--progress-bar-size': size,
          ...(isLoading
            ? undefined
            : { '--progress-bar-value': `${percent}%` }),
          ...style,
        } as CSSProperties
      }
      className={classNames(
        'mosuk-progress-bar',
        'group/progress-bar',
        styles.progressBar,
        className,
      )}
    >
      {children}
    </data>
  );
}
