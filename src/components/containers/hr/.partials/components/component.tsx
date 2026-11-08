import { HrComponentProps } from '@/components/containers/hr/.partials/components/component.interface';
import styles from '@/components/containers/hr/.partials/styles/style.module.css';
import classNames from 'classnames';
import React from 'react';

export default function HrComponent({ ...rest }: HrComponentProps) {
  return <hr {...rest} className={classNames(styles.hr, rest?.className)} />;
}
