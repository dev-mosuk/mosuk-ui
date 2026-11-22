'use client';

import { SelectProps } from '@/components/select/.partials/components/component.interface';
import { SelectProvider } from '@/components/select/.partials/providers/provider';
import { createSelectClearDetails } from '@/components/select/.partials/utilities/util';
import { Select as SelectPrimitive } from '@base-ui/react/select';
import React, { useCallback, useRef, useState } from 'react';

export function Select<Value, Multiple extends boolean | undefined = false>({
  placeholder,
  value,
  defaultValue,
  onValueChange,
  multiple,
  isOpen,
  isDisabled,
  isReadOnly,
  isRequired,
  ...rest
}: SelectProps<Value, Multiple>) {
  const multipleEnabled = multiple === true;
  const isControlled = value !== undefined;
  const clearMounted = useRef(false);
  const [uncontrolledValue, setUncontrolledValue] = useState<
    SelectProps<Value, Multiple>['value']
  >(defaultValue ?? (multipleEnabled ? ([] as never) : null));
  const currentValue = isControlled ? value : uncontrolledValue;
  const isEmpty = multipleEnabled
    ? !Array.isArray(currentValue) || currentValue.length === 0
    : currentValue == null;

  const commitValue = useCallback(
    (
      next: SelectProps<Value, Multiple>['value'],
      details: SelectPrimitive.Root.ChangeEventDetails,
    ) => {
      if (!isControlled) {
        setUncontrolledValue(next);
      }

      onValueChange?.(next as never, details);
    },
    [isControlled, onValueChange],
  );

  const clear = useCallback(() => {
    commitValue(
      multipleEnabled ? ([] as never) : null,
      createSelectClearDetails(),
    );
  }, [commitValue, multipleEnabled]);

  return (
    <SelectProvider
      placeholder={placeholder}
      isEmpty={isEmpty}
      clear={clear}
      clearMounted={clearMounted}
    >
      <SelectPrimitive.Root
        {...rest}
        multiple={multiple}
        open={isOpen}
        disabled={isDisabled}
        readOnly={isReadOnly}
        required={isRequired}
        value={currentValue}
        onValueChange={(next, details) => {
          commitValue(next, details);
        }}
      >
        {rest?.children}
      </SelectPrimitive.Root>
    </SelectProvider>
  );
}
