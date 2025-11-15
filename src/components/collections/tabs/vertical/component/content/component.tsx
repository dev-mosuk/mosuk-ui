import { Tabs as TabsComponent } from '@base-ui-components/react/tabs';
import classNames from 'classnames';
import React from 'react';
import styles from '../component.module.css';
import { TabsVerticalContentProps } from './component.interface';

export function TabsVerticalContent({ ...rest }: TabsVerticalContentProps) {
  return (
    <TabsComponent.Panel
      {...rest}
      className={classNames(
        'mosuk-tabs-vertical-content',
        styles.content,
        rest?.className
      )}
    >
      {rest?.children}
    </TabsComponent.Panel>
  );
}
