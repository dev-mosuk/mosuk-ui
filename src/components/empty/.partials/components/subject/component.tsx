import type { EmptySubjectProps } from '@/components/empty/.partials/components/subject/component.interface';
import styles from '@/components/empty/.partials/styles/component.module.css';
import { Typography } from '@/components/typography';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function EmptySubject<C extends ElementType = 'p'>({
  ...rest
}: EmptySubjectProps<C>) {
  return (
    <Typography
      {...rest}
      type={rest.type ?? Typography.ENUMS.Type.H5}
      color={rest.color ?? Typography.ENUMS.Color.Primary}
      className={classNames(
        'mosuk-empty-subject',
        styles.subject,
        rest?.className,
      )}
    >
      {rest?.children}
    </Typography>
  );
}
