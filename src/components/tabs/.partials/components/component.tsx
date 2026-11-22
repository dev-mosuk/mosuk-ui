import { TabsProps } from '@/components/tabs/.partials/components/component.interface';
import { TABS_DEFAULT_VARIANT } from '@/components/tabs/.partials/constants/component.constants';
import styles from '@/components/tabs/.partials/styles/component.module.css';
import { Tabs as BaseUiTabs } from '@base-ui/react/tabs';
import classNames from 'classnames';
import React from 'react';

export function Tabs({
  variant = TABS_DEFAULT_VARIANT,
  orientation = 'horizontal',
  ...rest
}: TabsProps) {
  return (
    <BaseUiTabs.Root
      {...rest}
      orientation={orientation}
      data-variant={variant}
      data-orientation={orientation}
      className={classNames(
        'mosuk-tabs',
        '@container/tabs',
        'group/tabs',
        styles.root,
        rest?.className,
      )}
    >
      {rest?.children}
    </BaseUiTabs.Root>
  );
}
