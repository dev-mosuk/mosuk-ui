import { SwitchProps } from '@/components/switch/.partials/components/component.interface';
import {
  SWITCH_DEFAULT_SIZE,
  SWITCH_DEFAULT_VARIANT,
} from '@/components/switch/.partials/constants/component.constants';
import styles from '@/components/switch/.partials/styles/component.module.css';
import { Switch as BaseSwitch } from '@base-ui/react/switch';
import classNames from 'classnames';
import React, { type CSSProperties, useId } from 'react';

export function Switch({
  ref,
  size = SWITCH_DEFAULT_SIZE,
  variant = SWITCH_DEFAULT_VARIANT,
  defaultSelected,
  isSelected,
  isDisabled,
  isReadOnly,
  isRequired,
  isInvalid,
  onChange,
  id,
  name,
  className,
  style,
  children,
  ...rest
}: SwitchProps) {
  const generatedId = useId();
  const resolvedId = id ?? generatedId;

  return (
    <BaseSwitch.Root
      {...rest}
      ref={ref}
      id={resolvedId}
      name={name ?? resolvedId}
      checked={isSelected}
      defaultChecked={defaultSelected}
      disabled={isDisabled}
      readOnly={isReadOnly}
      required={isRequired}
      aria-invalid={isInvalid || undefined}
      data-invalid={isInvalid || undefined}
      data-size={size}
      data-variant={variant}
      style={
        {
          '--switch-size': size,
          ...style,
        } as CSSProperties
      }
      onCheckedChange={(checked) => onChange?.(checked)}
      className={classNames(
        'mosuk-switch',
        '@container/switch',
        'group/switch',
        styles.switch,
        className,
      )}
    >
      {children}
    </BaseSwitch.Root>
  );
}
