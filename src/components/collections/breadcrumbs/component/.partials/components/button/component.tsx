import { Button } from '@/components/actions/button/component/component';
import { BreadcrumbsButtonProps } from '@/components/collections/breadcrumbs/component/.partials/components/button/component.interface';
import styles from '@/components/collections/breadcrumbs/component/.partials/styles/style.module.css';
import classNames from 'classnames';
import React from 'react';

export function BreadcrumbsButton({ ...rest }: BreadcrumbsButtonProps) {
  return (
    <Button
      {...rest}
      as={rest?.as ?? 'span'}
      className={classNames(
        'mosuk-breadcrumbs-button',
        styles.button,
        rest?.className,
      )}
    >
      {rest?.children}
    </Button>
  );
}
