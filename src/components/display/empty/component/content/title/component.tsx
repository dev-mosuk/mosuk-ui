import styles from '@/components/display/empty/component/component.module.css';
import { EmptyContentTitleProps } from '@/components/display/empty/component/content/title/component.interface';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function EmptyContentTitle<C extends ElementType = 'h3'>({
  as,
  ...rest
}: EmptyContentTitleProps<C>) {
  const Component = (as || 'h3') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-empty-content-title',
        styles.title,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
