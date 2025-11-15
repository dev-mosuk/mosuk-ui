import classNames from 'classnames';
import React from 'react';
import { Icon } from '../../../../actions/icon/component/index';
import styles from '../component.module.css';
import { PIconProps } from './component.interface';

export function PIcon({ ...rest }: PIconProps) {
  return (
    <Icon
      {...rest}
      className={classNames('mosuk-p-icon', styles.icon, rest?.className)}
    >
      {rest?.children}
    </Icon>
  );
}
