import { SeparatorComponentProps } from '@/components/containers/separator/.partials/components/component.interface';
import styles from '@/components/containers/separator/.partials/styles/style.module.css';
import classNames from 'classnames';
import React from 'react';

export default function SeparatorComponent({ ...rest }: SeparatorComponentProps) {
  return <hr {...rest} className={classNames(styles.separator, rest?.className)} />;
}
