import { Icon } from '@/components/actions/icon/component/component';
import { BreadcrumbsIconProps } from '@/components/collections/breadcrumbs/component/.partials/components/icon/component.interface';
import styles from '@/components/collections/breadcrumbs/component/.partials/styles/style.module.css';
import classNames from 'classnames';
import React from 'react';

export function BreadcrumbsIcon({ ...rest }: BreadcrumbsIconProps) {
  return (
    <Icon
      {...rest}
      as={rest?.as ?? 'span'}
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
