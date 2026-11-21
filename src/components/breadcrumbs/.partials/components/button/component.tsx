import { BreadcrumbsButtonProps } from '@/components/breadcrumbs/.partials/components/button/component.interface';
import { BREADCRUMBS_DEFAULT_SIZE } from '@/components/breadcrumbs/.partials/constants/component.constants';
import styles from '@/components/breadcrumbs/.partials/styles/component.module.css';
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
      size={rest.size ?? BREADCRUMBS_DEFAULT_SIZE}
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
