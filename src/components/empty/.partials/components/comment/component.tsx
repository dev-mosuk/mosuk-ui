import type { EmptyCommentProps } from '@/components/empty/.partials/components/comment/component.interface';
import styles from '@/components/empty/.partials/styles/component.module.css';
import { Typography } from '@/components/typography';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function EmptyComment<C extends ElementType = 'p'>({
  ...rest
}: EmptyCommentProps<C>) {
  return (
    <Typography
      {...rest}
      type={rest.type ?? Typography.ENUMS.Type.P3}
      color={rest.color ?? Typography.ENUMS.Color.Tertiary}
      className={classNames(
        'mosuk-empty-comment',
        styles.comment,
        rest?.className,
      )}
    >
      {rest?.children}
    </Typography>
  );
}
