import { BreadcrumbsIconProps } from '@/blocks/breadcrumbs/.partials/components/icon/component.interface';
import styles from '@/blocks/breadcrumbs/.partials/styles/component.module.css';
import { Button } from '@/components/button';
import classNames from 'classnames';
import React from 'react';

export function BreadcrumbsIcon<C = 'span'>({
  ...rest
}: BreadcrumbsIconProps<C>) {
  return (
    <Button
      {...rest}
      as={(rest.as ?? 'figure') as C}
      format={rest.format ?? Button.ENUMS.Format.Icon}
      variant={rest.variant ?? Button.ENUMS.Variant.Ghost}
      press={rest.press ?? Button.ENUMS.Press.None}
      className={classNames(
        'mosuk-breadcrumbs-icon',
        styles.icon,
        rest?.className,
      )}
    >
      {rest?.children}
    </Button>
  );
}
