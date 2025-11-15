import classNames from 'classnames';
import React from 'react';
import { Icon } from '../../../../actions/icon/component/index';
import styles from '../component.module.css';
import { H6IconProps } from './component.interface';

export function H6Icon({ ...rest }: H6IconProps) {
  return (
    <Icon
      {...rest}
      className={classNames('mosuk-h6-icon', styles.icon, rest?.className)}
    >
      {rest?.children}
    </Icon>
  );
}
