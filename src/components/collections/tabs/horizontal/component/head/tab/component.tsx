import styles from '@/components/collections/tabs/horizontal/component/component.module.css';
import { TabsHorizontalHeadTabProps } from '@/components/collections/tabs/horizontal/component/head/tab/component.interface';
import { Tabs as TabsComponent } from '@base-ui/react/tabs';
import classNames from 'classnames';
import React from 'react';

export function TabsHorizontalHeadTab({ ...rest }: TabsHorizontalHeadTabProps) {
  return (
    <TabsComponent.Tab
      {...rest}
      className={classNames(
        'mosuk-tabs-horizontal-head-tab',
        styles.tab,
        rest?.className,
      )}
    >
      {rest?.children}
    </TabsComponent.Tab>
  );
}
