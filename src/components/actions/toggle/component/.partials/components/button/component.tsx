import { ToggleButtonProps } from '@/components/actions/toggle/component/.partials/components/button/component.interface';
import styles from '@/components/actions/toggle/component/.partials/styles/component.module.css';
import { Tabs } from '@base-ui/react/tabs';
import classNames from 'classnames';
import React, { ElementType, createElement } from 'react';

export function ToggleButton<C extends ElementType = 'button'>({
  as,
  value,
  disabled,
  ...rest
}: ToggleButtonProps<C>) {
  const render = as ? createElement(as) : undefined;
  const nativeButton = !as || as === 'button';

  return (
    <Tabs.Tab
      {...rest}
      value={value}
      disabled={disabled}
      nativeButton={nativeButton}
      render={render}
      data-value={value}
      className={classNames(
        'mosuk-toggle-button',
        styles.button,
        rest.className,
      )}
    />
  );
}
