import { Tabs as TabsComponent } from '@base-ui-components/react/tabs';
import classNames from 'classnames';
import React from 'react';
import styles from '../component.module.css';
import { TabsVerticalHeadProps } from './component.interface';

export function TabsVerticalHead({ ...rest }: TabsVerticalHeadProps) {
  return (
    <TabsComponent.List
      {...rest}
      className={classNames(
        'mosuk-tabs-vertical-head',
        styles.head,
        rest?.className
      )}
    >
      {rest?.children}
    </TabsComponent.List>
  );
}
