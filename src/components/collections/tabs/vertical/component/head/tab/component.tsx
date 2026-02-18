import { Tabs as TabsComponent } from '@base-ui/react/tabs';
import classNames from 'classnames';
import React from 'react';
import styles from '../../component.module.css';
import { TabsVerticalHeadTabProps } from './component.interface';

export function TabsVerticalHeadTab({ ...rest }: TabsVerticalHeadTabProps) {
  return (
    <TabsComponent.Tab
      {...rest}
      className={classNames(
        'mosuk-tabs-vertical-head-tab',
        styles.tab,
        rest?.className
      )}
    >
      {rest?.children}
    </TabsComponent.Tab>
  );
}
