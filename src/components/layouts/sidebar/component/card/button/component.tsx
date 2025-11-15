import classNames from 'classnames';
import { ChevronRight } from 'lucide-react';
import React, { ElementType } from 'react';
import { Button } from '../../../../../actions/button/component/component';
import styles from '../../component.module.css';
import { SidebarCardButtonProps } from './component.interface';

export function SidebarCardButton<C extends ElementType = 'button'>({
  active,
  ...rest
}: SidebarCardButtonProps<C>) {
  return (
    <Button
      {...(rest as any)}
      className={classNames(
        'mosuk-sidebar-card-button',
        styles.button,
        rest?.className,
        {
          [styles.active]: active,
        }
      )}
    >
      {rest?.children}

      <ChevronRight className={styles.right} />
    </Button>
  );
}
