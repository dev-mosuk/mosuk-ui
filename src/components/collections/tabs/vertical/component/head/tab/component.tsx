import styles from '@/components/collections/tabs/vertical/component/component.module.css';
import { TabsVerticalHeadTabProps } from '@/components/collections/tabs/vertical/component/head/tab/component.interface';
import { Tabs as TabsComponent } from '@base-ui/react/tabs';
import classNames from 'classnames';
import React from 'react';

export function TabsVerticalHeadTab({ ...rest }: TabsVerticalHeadTabProps) {
  return (
    <TabsComponent.Tab
      {...rest}
      className={classNames(
        'mosuk-tabs-vertical-head-tab',
        styles.tab,
        rest?.className,
      )}
    >
      {rest?.children}
    </TabsComponent.Tab>
  );
}
