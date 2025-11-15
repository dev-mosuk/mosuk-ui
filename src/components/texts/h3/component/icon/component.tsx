import classNames from 'classnames';
import React from 'react';
import { Icon } from '../../../../actions/icon/component/index';
import styles from '../component.module.css';
import { H3IconProps } from './component.interface';

export function H3Icon({ ...rest }: H3IconProps) {
  return (
    <Icon
      {...rest}
      className={classNames('mosuk-h3-icon', styles.icon, rest?.className)}
    >
      {rest?.children}
    </Icon>
  );
}
