'use client';

import { TabsProps } from '@/components/tabs/.partials/components/component.interface';
import {
  TABS_DEFAULT_ORIENTATION,
  TABS_DEFAULT_VARIANT,
} from '@/components/tabs/.partials/constants/component.constants';
import { useTabs } from '@/components/tabs/.partials/hooks/hook';
import { TabsProvider } from '@/components/tabs/.partials/providers/provider';
import styles from '@/components/tabs/.partials/styles/component.module.css';
import { Tabs as BaseUiTabs } from '@base-ui/react/tabs';
import classNames from 'classnames';
import React, {
  ElementType,
  createElement,
  useCallback,
  useEffect,
  useState,
} from 'react';

function TabsValueSync() {
  const { value, slideToValue } = useTabs();

  useEffect(() => {
    slideToValue(value);
  }, [value, slideToValue]);

  return null;
}

export function Tabs<C extends ElementType = 'div'>({
  as,
  size,
  variant = TABS_DEFAULT_VARIANT,
  orientation = TABS_DEFAULT_ORIENTATION,
  activateOnFocus,
  loopFocus,
  value: valueProp,
  defaultValue,
  onChange,
  className,
  style,
  ref,
  children,
  ...rest
}: TabsProps<C>) {
  const isControlled = valueProp !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState(
    defaultValue ?? null,
  );
  const value = isControlled ? valueProp : uncontrolledValue;

  const setValue = useCallback(
    (next: any) => {
      if (!isControlled) {
        setUncontrolledValue(next);
      }
      onChange?.(next);
    },
    [isControlled, onChange],
  );

  const rootRender = as ? createElement(as) : undefined;

  return (
    <TabsProvider
      size={size}
      orientation={orientation}
      variant={variant}
      value={value}
      setValue={setValue}
      activateOnFocus={activateOnFocus}
      loopFocus={loopFocus}
    >
      <BaseUiTabs.Root
        {...rest}
        ref={ref}
        value={value}
        orientation={orientation}
        onValueChange={setValue}
        render={rootRender}
        data-orientation={orientation}
        data-variant={variant}
        data-size={size != null ? size : undefined}
        style={style}
        className={classNames(
          'mosuk-tabs',
          'group/tabs',
          styles.tabs,
          className,
        )}
      >
        <TabsValueSync />
        {children}
      </BaseUiTabs.Root>
    </TabsProvider>
  );
}
