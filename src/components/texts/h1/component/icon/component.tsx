import classNames from 'classnames';
import React from 'react';
import { Icon } from '../../../../actions/icon/component/index';
import styles from '../component.module.css';
import { H1IconProps } from './component.interface';

export function H1Icon({ ...rest }: H1IconProps) {
  return (
    <Icon
      {...rest}
      className={classNames('mosuk-h1-icon', styles.icon, rest?.className)}
    >
      {rest?.children}
    </Icon>
  );
}
