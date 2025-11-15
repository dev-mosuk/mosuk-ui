import classNames from 'classnames';
import React from 'react';
import { Icon } from '../../../../actions/icon/component/index';
import styles from '../component.module.css';
import { H2IconProps } from './component.interface';

export function H2Icon({ ...rest }: H2IconProps) {
  return (
    <Icon
      {...rest}
      className={classNames('mosuk-h2-icon', styles.icon, rest?.className)}
    >
      {rest?.children}
    </Icon>
  );
}
