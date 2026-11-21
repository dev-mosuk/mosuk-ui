import { TabsListProps } from '@/components/tabs/.partials/components/list/component.interface';
import styles from '@/components/tabs/.partials/styles/component.module.css';
import { Tabs as BaseUiTabs } from '@base-ui/react/tabs';
import classNames from 'classnames';
import React from 'react';

export function TabsList({ ...rest }: TabsListProps) {
  return (
    <BaseUiTabs.List
      {...rest}
      className={classNames(
        'mosuk-tabs-list',
        styles.list,
        rest?.className,
      )}
    >
      {rest?.children}
    </BaseUiTabs.List>
  );
}
