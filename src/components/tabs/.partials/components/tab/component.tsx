import { TabsTabProps } from '@/components/tabs/.partials/components/tab/component.interface';
import styles from '@/components/tabs/.partials/styles/component.module.css';
import { Tabs as BaseUiTabs } from '@base-ui/react/tabs';
import classNames from 'classnames';
import React from 'react';

export function TabsTab({ ...rest }: TabsTabProps) {
  return (
    <BaseUiTabs.Tab
      {...rest}
      className={classNames('mosuk-tabs-tab', styles.tab, rest?.className)}
    >
      {rest?.children}
    </BaseUiTabs.Tab>
  );
}
