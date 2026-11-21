import { TabsIndicatorProps } from '@/components/tabs/.partials/components/indicator/component.interface';
import styles from '@/components/tabs/.partials/styles/component.module.css';
import { Tabs as BaseUiTabs } from '@base-ui/react/tabs';
import classNames from 'classnames';
import React from 'react';

export function TabsIndicator({ ...rest }: TabsIndicatorProps) {
  return (
    <BaseUiTabs.Indicator
      {...rest}
      className={classNames(
        'mosuk-tabs-indicator',
        styles.indicator,
        rest?.className,
      )}
    />
  );
}
