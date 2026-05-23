import styles from '@/components/collections/tabs/vertical/component/component.module.css';
import { TabsVerticalContentProps } from '@/components/collections/tabs/vertical/component/content/component.interface';
import { Tabs as TabsComponent } from '@base-ui/react/tabs';
import classNames from 'classnames';
import React from 'react';

export function TabsVerticalContent({ ...rest }: TabsVerticalContentProps) {
  return (
    <TabsComponent.Panel
      {...rest}
      className={classNames(
        'mosuk-tabs-vertical-content',
        styles.content,
        rest?.className,
      )}
    >
      {rest?.children}
    </TabsComponent.Panel>
  );
}
