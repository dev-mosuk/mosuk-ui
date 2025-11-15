import classNames from 'classnames';
import React from 'react';
import { Button } from '../../../../actions/button/component/component';
import styles from '../component.module.css';
import { BreadcrumbsButtonProps } from './component.interface';

export function BreadcrumbsButton({ ...rest }: BreadcrumbsButtonProps) {
  return (
    <Button
      {...rest}
      as={rest?.as ?? 'span'}
      className={classNames('mosuk-breadcrumbs-button', styles.button, rest?.className)}
    >
      {rest?.children}
    </Button>
  );
}
