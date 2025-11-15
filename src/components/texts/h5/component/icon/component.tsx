import classNames from 'classnames';
import React from 'react';
import { Icon } from '../../../../actions/icon/component/index';
import styles from '../component.module.css';
import { H5IconProps } from './component.interface';

export function H5Icon({ ...rest }: H5IconProps) {
  return (
    <Icon
      {...rest}
      className={classNames('mosuk-h5-icon', styles.icon, rest?.className)}
    >
      {rest?.children}
    </Icon>
  );
}
