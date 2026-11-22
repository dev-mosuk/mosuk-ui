import { BreadcrumbsIconProps } from '@/components/breadcrumbs/.partials/components/icon/component.interface';
import { BREADCRUMBS_DEFAULT_SIZE } from '@/components/breadcrumbs/.partials/constants/component.constants';
import styles from '@/components/breadcrumbs/.partials/styles/component.module.css';
import { Button } from '@/components/button';
import classNames from 'classnames';
import React from 'react';

export function BreadcrumbsIcon<C = 'span'>({
  ...rest
}: BreadcrumbsIconProps<C>) {
  return (
    <Button
      {...rest}
      as={(rest.as ?? 'span') as C}
      size={rest.size ?? BREADCRUMBS_DEFAULT_SIZE}
      width={rest.width ?? Button.ENUMS.Width.Square}
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
