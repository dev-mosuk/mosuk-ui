import { Tabs as TabsComponent } from '@base-ui-components/react/tabs';
import classNames from 'classnames';
import React from 'react';
import styles from '../../component.module.css';
import { TabsHorizontalHeadTabProps } from './component.interface';

export function TabsHorizontalHeadTab({ ...rest }: TabsHorizontalHeadTabProps) {
  return (
    <TabsComponent.Tab
      {...rest}
      className={classNames(
        'mosuk-tabs-horizontal-head-tab',
        styles.tab,
        rest?.className
      )}
    >
      {rest?.children}
    </TabsComponent.Tab>
  );
}
