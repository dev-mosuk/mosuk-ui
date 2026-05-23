import styles from '@/components/collections/tabs/horizontal/component/component.module.css';
import { TabsHorizontalContentProps } from '@/components/collections/tabs/horizontal/component/content/component.interface';
import { Tabs as TabsComponent } from '@base-ui/react/tabs';
import classNames from 'classnames';
import React from 'react';

export function TabsHorizontalContent({ ...rest }: TabsHorizontalContentProps) {
  return (
    <TabsComponent.Panel
      {...rest}
      className={classNames(
        'mosuk-tabs-horizontal-content',
        styles.content,
        rest?.className,
      )}
    >
      {rest?.children}
    </TabsComponent.Panel>
  );
}
