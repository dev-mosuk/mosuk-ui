import styles from '@/components/display/empty/component.module.css';
import { EmptyContentDescriptionProps } from '@/components/display/empty/content/description/component.interface';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function EmptyContentDescription<C extends ElementType = 'p'>({
  as,
  ...rest
}: EmptyContentDescriptionProps<C>) {
  const Component = (as || 'p') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-empty-content-description',
        styles.description,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
