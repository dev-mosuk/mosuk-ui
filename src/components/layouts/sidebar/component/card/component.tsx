import classNames from 'classnames';
import React from 'react';
import { Card } from '../../../../display/card/component/component';
import styles from '../component.module.css';
import { SidebarCardProps } from './component.interface';

export function SidebarCard({ ...rest }: SidebarCardProps) {
  return (
    <Card
      {...rest}
      className={classNames(
        'mosuk-sidebar-card',
        styles.card,
        rest?.className
      )}
    >
      {rest?.children}
    </Card>
  );
}
