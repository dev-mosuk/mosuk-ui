import { Card } from '@/components/display/card/component/component';
import { SidebarCardProps } from '@/components/layouts/sidebar/component/card/component.interface';
import styles from '@/components/layouts/sidebar/component/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function SidebarCard({ ...rest }: SidebarCardProps) {
  return (
    <Card
      {...rest}
      className={classNames('mosuk-sidebar-card', styles.card, rest?.className)}
    >
      {rest?.children}
    </Card>
  );
}
