import classNames from 'classnames';
import React from 'react';
import { Icon } from '../../../../actions/icon/component/index';
import styles from '../component.module.css';
import { AIconProps } from './component.interface';

export function AIcon({ ...rest }: AIconProps) {
  return (
    <Icon
      {...rest}
      className={classNames('mosuk-a-icon', styles.icon, rest?.className)}
    >
      {rest?.children}
    </Icon>
  );
}
