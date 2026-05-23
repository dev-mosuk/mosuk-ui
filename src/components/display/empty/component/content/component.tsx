import styles from '@/components/display/empty/component/component.module.css';
import { EmptyContentProps } from '@/components/display/empty/component/content/component.interface';
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
