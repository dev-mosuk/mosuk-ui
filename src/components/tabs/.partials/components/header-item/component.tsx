'use client';

import { Button } from '@/components/button';
import { TabsHeaderItemProps } from '@/components/tabs/.partials/components/header-item/component.interface';
import { TABS_DEFAULT_SIZE } from '@/components/tabs/.partials/constants/component.constants';
import { useTabs } from '@/components/tabs/.partials/hooks/hook';
import styles from '@/components/tabs/.partials/styles/component.module.css';
import { Tabs as BaseUiTabs } from '@base-ui/react/tabs';
import classNames from 'classnames';
import React from 'react';

export function TabsHeaderItem<C = 'button'>({
  value,
  isDisabled,
  className,
  ...rest
}: TabsHeaderItemProps<C>) {
  const { size: tabsSize } = useTabs();
  const nativeButton = !rest.as || rest.as === 'button';

  return (
    <BaseUiTabs.Tab
      value={value}
      disabled={isDisabled}
      nativeButton={nativeButton}
      data-value={value}
      className={classNames(
        'mosuk-tabs-header-item',
        styles.headerItem,
        className,
      )}
      render={
        <Button
          {...(rest as Button.Props<C>)}
          as={(rest.as ?? 'button') as C}
          size={tabsSize ?? rest.size ?? TABS_DEFAULT_SIZE}
          variant={rest.variant ?? Button.ENUMS.Variant.Ghost}
          press={rest.press ?? Button.ENUMS.Press.None}
          isDisabled={isDisabled}
        />
      }
    />
  );
}
