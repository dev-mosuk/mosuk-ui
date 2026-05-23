import { TabsHorizontalProps } from '@/components/collections/tabs/horizontal/component/component.interface';
import styles from '@/components/collections/tabs/horizontal/component/component.module.css';
import { Tabs as TabsComponent } from '@base-ui/react/tabs';
import classNames from 'classnames';
import React from 'react';

export function TabsHorizontal({ ...rest }: TabsHorizontalProps) {
  return (
    <TabsComponent.Root
      {...rest}
      className={classNames(
        'mosuk-tabs-horizontal',
        styles.tabs,
        rest?.className,
      )}
    >
      {rest?.children}
    </TabsComponent.Root>
  );
}
