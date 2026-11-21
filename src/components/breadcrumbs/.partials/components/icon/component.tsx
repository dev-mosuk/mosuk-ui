import { BreadcrumbsIconProps } from '@/components/breadcrumbs/.partials/components/icon/component.interface';
import { BREADCRUMBS_DEFAULT_SIZE } from '@/components/breadcrumbs/.partials/constants/component.constants';
import styles from '@/components/breadcrumbs/.partials/styles/component.module.css';
import { Icon } from '@/components/icon';
import classNames from 'classnames';
import React from 'react';

export function BreadcrumbsIcon<C = 'span'>({
  ...rest
}: BreadcrumbsIconProps<C>) {
  return (
    <Icon
      {...rest}
      as={(rest.as ?? 'span') as C}
      size={rest.size ?? BREADCRUMBS_DEFAULT_SIZE}
      variant={rest.variant ?? Icon.ENUMS.Variant.Ghost}
      press={rest.press ?? Icon.ENUMS.Press.None}
      className={classNames(
        'mosuk-breadcrumbs-icon',
        styles.icon,
        rest?.className,
      )}
    >
      {rest?.children}
    </Icon>
  );
}
