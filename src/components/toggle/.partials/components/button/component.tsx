import { Button } from '@/components/button';
import { ToggleButtonProps } from '@/components/toggle/.partials/components/button/component.interface';
import { TOGGLE_DEFAULT_SIZE } from '@/components/toggle/.partials/constants/component.constants';
import { useToggle } from '@/components/toggle/.partials/hooks/hook';
import styles from '@/components/toggle/.partials/styles/component.module.css';
import { Tabs } from '@base-ui/react/tabs';
import classNames from 'classnames';
import React from 'react';

export function ToggleButton<C = 'button'>({
  value,
  isDisabled,
  className,
  ...rest
}: ToggleButtonProps<C>) {
  const { size: toggleSize } = useToggle();
  const nativeButton = !rest.as || rest.as === 'button';

  return (
    <Tabs.Tab
      value={value}
      disabled={isDisabled}
      nativeButton={nativeButton}
      data-value={value}
      className={classNames('mosuk-toggle-button', styles.button, className)}
      render={
        <Button
          {...(rest as Button.Props<C>)}
          as={(rest.as ?? 'button') as C}
          size={toggleSize ?? rest.size ?? TOGGLE_DEFAULT_SIZE}
          variant={rest.variant ?? Button.ENUMS.Variant.Ghost}
          press={rest.press ?? Button.ENUMS.Press.None}
          isDisabled={isDisabled}
        />
      }
    />
  );
}
