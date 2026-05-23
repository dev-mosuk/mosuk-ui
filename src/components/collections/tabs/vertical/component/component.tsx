import { TabsVerticalProps } from '@/components/collections/tabs/vertical/component/component.interface';
import styles from '@/components/collections/tabs/vertical/component/component.module.css';
import { Tabs as TabsComponent } from '@base-ui/react/tabs';
import classNames from 'classnames';
import React from 'react';

export function TabsVertical({ ...rest }: TabsVerticalProps) {
  return (
    <TabsComponent.Root
      {...rest}
      className={classNames(
        'mosuk-tabs-vertical',
        styles.tabs,
        rest?.className,
      )}
    >
      {rest?.children}
    </TabsComponent.Root>
  );
}
