import styles from '@/components/collections/tabs/horizontal/component/component.module.css';
import { TabsHorizontalHeadIndicatorProps } from '@/components/collections/tabs/horizontal/component/head/indicator/component.interface';
import { Tabs as TabsComponent } from '@base-ui/react/tabs';
import classNames from 'classnames';
import React from 'react';

export function TabsHorizontalHeadIndicator({
  ...rest
}: TabsHorizontalHeadIndicatorProps) {
  return (
    <TabsComponent.Indicator
      className={classNames(
        'mosuk-tabs-horizontal-head-indicator',
        styles.indicator,
        rest?.className,
      )}
    />
  );
}
