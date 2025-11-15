import { Tabs as TabsComponent } from '@base-ui-components/react/tabs';
import classNames from 'classnames';
import React from 'react';
import styles from '../component.module.css';
import { TabsHorizontalHeadProps } from './component.interface';

export function TabsHorizontalHead({ ...rest }: TabsHorizontalHeadProps) {
  return (
    <TabsComponent.List
      {...rest}
      className={classNames(
        'mosuk-tabs-horizontal-head',
        styles.head,
        rest?.className
      )}
    >
      {rest?.children}
    </TabsComponent.List>
  );
}
