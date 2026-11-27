import { SeparatorProps } from '@/components/separator/.partials/components/component.interface';
import {
  SEPARATOR_DEFAULT_ORIENTATION,
  SEPARATOR_DEFAULT_VARIANT,
} from '@/components/separator/.partials/constants/component.constants';
import styles from '@/components/separator/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function Separator<C = 'hr'>({
  as,
  orientation = SEPARATOR_DEFAULT_ORIENTATION,
  variant = SEPARATOR_DEFAULT_VARIANT,
  ...rest
}: SeparatorProps<C>) {
  const Component = (as || 'hr') as ElementType;

  return (
    <Component
      {...rest}
      data-orientation={orientation}
      data-variant={variant}
      aria-orientation={orientation}
      className={classNames(
        'mosuk-separator',
        styles.separator,
        rest?.className,
      )}
    />
  );
}
