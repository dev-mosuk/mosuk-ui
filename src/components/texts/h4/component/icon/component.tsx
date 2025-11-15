import classNames from 'classnames';
import React from 'react';
import { Icon } from '../../../../actions/icon/component/index';
import styles from '../component.module.css';
import { H4IconProps } from './component.interface';

export function H4Icon({ ...rest }: H4IconProps) {
  return (
    <Icon
      {...rest}
      className={classNames('mosuk-h4-icon', styles.icon, rest?.className)}
    >
      {rest?.children}
    </Icon>
  );
}
