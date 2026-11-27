import type { ArticleProps } from '@/components/article/.partials/components/component.interface';
import {
  ARTICLE_DEFAULT_AS,
  ARTICLE_DEFAULT_IS_DISABLED,
  ARTICLE_DEFAULT_ORIENTATION,
} from '@/components/article/.partials/constants/component.constants';
import styles from '@/components/article/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function Article<C = 'article'>({
  as,
  orientation = ARTICLE_DEFAULT_ORIENTATION,
  isDisabled = ARTICLE_DEFAULT_IS_DISABLED,
  ...rest
}: ArticleProps<C>) {
  const Component = (as ?? ARTICLE_DEFAULT_AS) as ElementType;

  return (
    <Component
      {...rest}
      data-orientation={orientation}
      data-disabled={isDisabled || undefined}
      aria-disabled={isDisabled || undefined}
      className={classNames(
        'mosuk-article',
        'group/article',
        styles.article,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
