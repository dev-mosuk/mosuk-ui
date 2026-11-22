import { ProgressCircleIndicatorProps } from '@/components/progress-circle/.partials/components/indicator/component.interface';
import { useProgressCircle } from '@/components/progress-circle/.partials/hooks/hook';
import styles from '@/components/progress-circle/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function ProgressCircleIndicator({
  className,
  ...rest
}: ProgressCircleIndicatorProps) {
  const { percent, isLoading } = useProgressCircle();

  return (
    <svg
      {...rest}
      viewBox='0 0 36 36'
      aria-hidden
      className={classNames(
        'mosuk-progress-circle-indicator',
        styles.indicator,
        className,
      )}
    >
      <circle className={styles.track} cx={18} cy={18} r={15.5} />
      <circle
        className={styles.fill}
        cx={18}
        cy={18}
        r={15.5}
        pathLength={100}
        strokeDasharray={isLoading ? '25 75' : 100}
        strokeDashoffset={isLoading ? 0 : 100 - percent}
      />
    </svg>
  );
}
