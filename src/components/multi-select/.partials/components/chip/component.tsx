'use client';

import { Button } from '@/components/button';
import type { MultiSelectChipProps } from '@/components/multi-select/.partials/components/chip/component.interface';
import { MULTI_SELECT_CHIP_SIZE } from '@/components/multi-select/.partials/constants/component.constants';
import { useMultiSelect } from '@/components/multi-select/.partials/hooks/hook';
import styles from '@/components/multi-select/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function MultiSelectChip({
  value,
  className,
  children,
  size = MULTI_SELECT_CHIP_SIZE,
  variant = Button.ENUMS.Variant.Secondary,
  press = Button.ENUMS.Press.None,
  isDisabled: isDisabledProp,
  onClick,
  ...rest
}: MultiSelectChipProps) {
  const { isDisabled, removeSelected } = useMultiSelect();
  const locked = Boolean(isDisabledProp ?? isDisabled);

  return (
    <Button
      {...rest}
      type='button'
      size={size}
      variant={variant}
      press={press}
      isDisabled={locked}
      aria-label={rest['aria-label'] ?? `Remove ${value}`}
      className={classNames('mosuk-multi-select-chip', styles.chip, className)}
      onClick={(event) => {
        onClick?.(event);

        if (event.defaultPrevented || locked) {
          return;
        }

        removeSelected(value);
      }}
    >
      {children}
    </Button>
  );
}
