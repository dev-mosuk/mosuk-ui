import { EmptyContentProps } from '@/components/empty/.partials/components/content/component.interface';
import styles from '@/components/empty/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function EmptyContent<C extends ElementType = 'article'>({
  as,
  ...rest
}: EmptyContentProps<C>) {
  const Component = (as || 'article') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-empty-content',
        styles.content,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
