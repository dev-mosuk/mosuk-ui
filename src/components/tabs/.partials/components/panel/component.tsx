import { TabsPanelProps } from '@/components/tabs/.partials/components/panel/component.interface';
import styles from '@/components/tabs/.partials/styles/component.module.css';
import { Tabs as BaseUiTabs } from '@base-ui/react/tabs';
import classNames from 'classnames';
import React from 'react';

export function TabsPanel({ ...rest }: TabsPanelProps) {
  return (
    <BaseUiTabs.Panel
      {...rest}
      className={classNames(
        'mosuk-tabs-panel',
        styles.panel,
        rest?.className,
      )}
    >
      {rest?.children}
    </BaseUiTabs.Panel>
  );
}
