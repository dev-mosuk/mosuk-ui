import { Tabs as TabsComponent } from '@base-ui/react/tabs';
import classNames from 'classnames';
import React from 'react';
import styles from '../../component.module.css';
import { TabsHorizontalHeadIndicatorProps } from './component.interface';

export function TabsHorizontalHeadIndicator({
  ...rest
}: TabsHorizontalHeadIndicatorProps) {
  return (
    <TabsComponent.Indicator
      className={classNames(
        'mosuk-tabs-horizontal-head-indicator',
        styles.indicator,
        rest?.className
      )}
    />
  );
}
