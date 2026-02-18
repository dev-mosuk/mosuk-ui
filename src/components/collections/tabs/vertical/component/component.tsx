import { Tabs as TabsComponent } from '@base-ui/react/tabs';
import classNames from 'classnames';
import React from 'react';
import {
    TabsVerticalProps
} from './component.interface';
import styles from './component.module.css';

export function TabsVertical({ ...rest }: TabsVerticalProps) {
  return (
    <TabsComponent.Root
      {...rest}
      className={classNames(
        'mosuk-tabs-vertical',
        styles.tabs,
        rest?.className
      )}
    >
      {rest?.children}
    </TabsComponent.Root>
  );
}
