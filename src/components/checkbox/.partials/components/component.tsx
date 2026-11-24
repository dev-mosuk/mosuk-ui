import { CheckboxProps } from '@/components/checkbox/.partials/components/component.interface';
import {
  CHECKBOX_DEFAULT_ANIMATION,
  CHECKBOX_DEFAULT_SIZE,
  CHECKBOX_DEFAULT_VARIANT,
} from '@/components/checkbox/.partials/constants/component.constants';
import styles from '@/components/checkbox/.partials/styles/component.module.css';
import { Checkbox as BaseCheckbox } from '@base-ui/react';
import classNames from 'classnames';
import React, { type CSSProperties, useId } from 'react';

export function Checkbox({
  ref,
  size = CHECKBOX_DEFAULT_SIZE,
  variant = CHECKBOX_DEFAULT_VARIANT,
  animation = CHECKBOX_DEFAULT_ANIMATION,
  defaultSelected,
  isSelected,
  isIndeterminate,
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
}: CheckboxProps) {
  const generatedId = useId();
  const resolvedId = id ?? generatedId;

  return (
    <BaseCheckbox.Root
      {...rest}
      ref={ref}
      id={resolvedId}
      name={name ?? resolvedId}
      checked={isSelected}
      defaultChecked={defaultSelected}
      indeterminate={isIndeterminate}
      disabled={isDisabled}
      readOnly={isReadOnly}
      required={isRequired}
      aria-invalid={isInvalid || undefined}
      data-invalid={isInvalid || undefined}
      data-variant={variant}
      data-animation={animation}
      data-size={size}
      style={
        {
          '--checkbox-size': size,
          ...style,
        } as CSSProperties
      }
      onCheckedChange={(checked) => onChange?.(checked)}
      className={classNames(
        'mosuk-checkbox',
        '@container/checkbox',
        'group/checkbox',
        styles.checkbox,
        className,
      )}
    >
      {children}
    </BaseCheckbox.Root>
  );
}
