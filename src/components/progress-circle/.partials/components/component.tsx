import { ProgressCircleProps } from '@/components/progress-circle/.partials/components/component.interface';
import {
  PROGRESS_CIRCLE_DEFAULT_IS_LOADING,
  PROGRESS_CIRCLE_DEFAULT_MAX,
  PROGRESS_CIRCLE_DEFAULT_MIN,
  PROGRESS_CIRCLE_DEFAULT_SIZE,
  PROGRESS_CIRCLE_DEFAULT_STROKE,
  PROGRESS_CIRCLE_DEFAULT_VARIANT,
} from '@/components/progress-circle/.partials/constants/component.constants';
import { ProgressCircleContext } from '@/components/progress-circle/.partials/providers/context/context';
import styles from '@/components/progress-circle/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { useMemo, type CSSProperties } from 'react';

function progressCirclePercent(value: number, min: number, max: number) {
  const range = max - min;
  if (range <= 0) {
    return 0;
  }

  return Math.min(100, Math.max(0, ((value - min) / range) * 100));
}

export function ProgressCircle({
  size = PROGRESS_CIRCLE_DEFAULT_SIZE,
  stroke = PROGRESS_CIRCLE_DEFAULT_STROKE,
  variant = PROGRESS_CIRCLE_DEFAULT_VARIANT,
  value = PROGRESS_CIRCLE_DEFAULT_MIN,
  min = PROGRESS_CIRCLE_DEFAULT_MIN,
  max = PROGRESS_CIRCLE_DEFAULT_MAX,
  isLoading = PROGRESS_CIRCLE_DEFAULT_IS_LOADING,
  className,
  style,
  children,
  ...rest
}: ProgressCircleProps) {
  const percent = progressCirclePercent(value, min, max);
  const progressCircle = useMemo(
    () => ({ percent, isLoading }),
    [percent, isLoading],
  );

  return (
    <ProgressCircleContext.Provider value={progressCircle}>
      <data
        {...rest}
        role='progressbar'
        value={isLoading ? undefined : String(value)}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={isLoading ? undefined : value}
        data-size={size}
        data-stroke={stroke}
        data-variant={variant}
        data-min={min}
        data-max={max}
        data-value={isLoading ? undefined : value}
        data-loading={isLoading || undefined}
        data-empty={(!isLoading && percent === 0) || undefined}
        style={
          {
            '--progress-circle-size': size,
            '--progress-circle-stroke': stroke,
            ...(isLoading ? undefined : { '--progress-circle-value': percent }),
            ...style,
          } as CSSProperties
        }
        className={classNames(
          'mosuk-progress-circle',
          '@container/progress-circle',
          'group/progress-circle',
          styles.progressCircle,
          className,
        )}
      >
        {children}
      </data>
    </ProgressCircleContext.Provider>
  );
}
