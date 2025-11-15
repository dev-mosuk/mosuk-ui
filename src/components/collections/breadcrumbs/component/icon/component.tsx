import classNames from 'classnames';
import React from 'react';
import { Icon } from '../../../../actions/icon/component/component';
import styles from '../component.module.css';
import { BreadcrumbsIconProps } from './component.interface';

export function BreadcrumbsIcon({ ...rest }: BreadcrumbsIconProps) {
  return (
    <Icon
      {...rest}
      as={rest?.as ?? 'span'}
      className={classNames('mosuk-breadcrumbs-icon', styles.icon, rest?.className)}
    >
      {rest?.children}
    </Icon>
  );
}
