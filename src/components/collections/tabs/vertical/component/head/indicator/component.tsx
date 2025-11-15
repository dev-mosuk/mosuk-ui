import { Tabs as TabsComponent } from '@base-ui-components/react/tabs';
import classNames from 'classnames';
import React from 'react';
import styles from '../../component.module.css';
import { TabsVerticalHeadIndicatorProps } from './component.interface';

export function TabsVerticalHeadIndicator({
  ...rest
}: TabsVerticalHeadIndicatorProps) {
  return (
    <TabsComponent.Indicator
      className={classNames(
        'mosuk-tabs-vertical-head-indicator',
        styles.indicator,
        rest?.className
      )}
    />
  );
}
