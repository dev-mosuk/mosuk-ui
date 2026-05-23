import { Button } from '@/components/actions/button/component/component';
import { SidebarCardButtonProps } from '@/components/layouts/sidebar/component/card/button/component.interface';
import styles from '@/components/layouts/sidebar/component/component.module.css';
import classNames from 'classnames';
import { ChevronRight } from 'lucide-react';
import React, { ElementType } from 'react';

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
        },
      )}
    >
      {rest?.children}

      <ChevronRight className={styles.right} />
    </Button>
  );
}
