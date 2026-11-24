import { BreadcrumbsButtonProps } from '@/blocks/breadcrumbs/.partials/components/button/component.interface';
import styles from '@/blocks/breadcrumbs/.partials/styles/component.module.css';
import { Button } from '@/components/button';
import classNames from 'classnames';
import React from 'react';

export function BreadcrumbsButton<C = 'span'>({
  ...rest
}: BreadcrumbsButtonProps<C>) {
  return (
    <Button
      {...rest}
      as={(rest.as ?? 'span') as C}
      variant={rest.variant ?? Button.ENUMS.Variant.Ghost}
      press={rest.press ?? Button.ENUMS.Press.None}
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
