import classNames from 'classnames';
import React, { ElementType } from 'react';
import { ArticleProps } from './component.interface';
import styles from './component.module.css';

export function Article<C extends ElementType = 'div'>({
  as,
  ...rest
}: ArticleProps<C>) {
  const Component = (as || 'article') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-article', styles.article, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
