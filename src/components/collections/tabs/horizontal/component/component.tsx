import { Tabs as TabsComponent } from '@base-ui-components/react/tabs';
import classNames from 'classnames';
import React from 'react';
import {
  TabsHorizontalProps
} from './component.interface';
import styles from './component.module.css';

export function TabsHorizontal({ ...rest }: TabsHorizontalProps) {
  return (
    <TabsComponent.Root
      {...rest}
      className={classNames(
        'mosuk-tabs-horizontal',
        styles.tabs,
        rest?.className
      )}
    >
      {rest?.children}
    </TabsComponent.Root>
  );
}
