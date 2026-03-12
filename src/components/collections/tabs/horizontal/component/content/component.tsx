import { Tabs as TabsComponent } from '@base-ui/react/tabs';
import classNames from 'classnames';
import React from 'react';
import styles from '../component.module.css';
import { TabsHorizontalContentProps } from './component.interface';

export function TabsHorizontalContent({ ...rest }: TabsHorizontalContentProps) {
  return (
    <TabsComponent.Panel
      {...rest}
      className={classNames(
        'mosuk-tabs-horizontal-content',
        styles.content,
        rest?.className
      )}
    >
      {rest?.children}
    </TabsComponent.Panel>
  );
}
