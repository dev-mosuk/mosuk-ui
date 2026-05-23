import styles from '@/components/collections/tabs/vertical/component/component.module.css';
import { TabsVerticalHeadIndicatorProps } from '@/components/collections/tabs/vertical/component/head/indicator/component.interface';
import { Tabs as TabsComponent } from '@base-ui/react/tabs';
import classNames from 'classnames';
import React from 'react';

export function TabsVerticalHeadIndicator({
  ...rest
}: TabsVerticalHeadIndicatorProps) {
  return (
    <TabsComponent.Indicator
      className={classNames(
        'mosuk-tabs-vertical-head-indicator',
        styles.indicator,
        rest?.className,
      )}
    />
  );
}
