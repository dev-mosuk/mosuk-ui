import { EmptyButtonsProps } from '@/components/display/empty/buttons/component.interface';
import styles from '@/components/display/empty/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function EmptyButtons<C extends ElementType = 'div'>({
  as,
  ...rest
}: EmptyButtonsProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-empty-buttons',
        styles.buttons,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
