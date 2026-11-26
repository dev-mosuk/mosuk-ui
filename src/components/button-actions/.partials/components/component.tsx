import type { ButtonActionsProps } from '@/components/button-actions/.partials/components/component.interface';
import {
  BUTTON_ACTIONS_DEFAULT_ALIGN,
  BUTTON_ACTIONS_DEFAULT_AS,
  BUTTON_ACTIONS_DEFAULT_IS_DISABLED,
  BUTTON_ACTIONS_DEFAULT_ORIENTATION,
} from '@/components/button-actions/.partials/constants/component.constants';
import styles from '@/components/button-actions/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, {type ElementType} from 'react';

export function ButtonActions<C extends ElementType = 'nav'>({
  as,
  orientation = BUTTON_ACTIONS_DEFAULT_ORIENTATION,
  align = BUTTON_ACTIONS_DEFAULT_ALIGN,
  isDisabled = BUTTON_ACTIONS_DEFAULT_IS_DISABLED,
  ...rest
}: ButtonActionsProps<C>) {
  const Component = (as ?? BUTTON_ACTIONS_DEFAULT_AS) as ElementType;

  return (
    <Component
      {...rest}
      data-orientation={orientation}
      data-align={align}
      data-disabled={isDisabled || undefined}
      aria-disabled={isDisabled || undefined}
      className={classNames(
        'mosuk-button-actions',
        '@container/button-actions',
        'group/button-actions',
        styles.buttonActions,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
