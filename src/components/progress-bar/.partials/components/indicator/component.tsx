import { ProgressBarIndicatorProps } from '@/components/progress-bar/.partials/components/indicator/component.interface';
import styles from '@/components/progress-bar/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function ProgressBarIndicator({
  className,
  ...rest
}: ProgressBarIndicatorProps) {
  return (
    <span
      {...rest}
      className={classNames(
        'mosuk-progress-bar-indicator',
        styles.indicator,
        className,
      )}
    />
  );
}
