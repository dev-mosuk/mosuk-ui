import { EmptyContentDescriptionProps } from '@/components/empty/.partials/components/content-description/component.interface';
import styles from '@/components/empty/.partials/styles/component.module.css';
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
