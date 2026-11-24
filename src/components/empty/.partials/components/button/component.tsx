import { Button } from '@/components/button';
import type { EmptyButtonProps } from '@/components/empty/.partials/components/button/component.interface';
import styles from '@/components/empty/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function EmptyButton<C = 'button'>({
  ...rest
}: EmptyButtonProps<C>) {
  return (
    <Button
      {...rest}
      size={rest.size ?? 8}
      variant={rest.variant ?? Button.ENUMS.Variant.Primary}
      className={classNames(
        'mosuk-empty-button',
        styles.button,
        rest?.className,
      )}
    >
      {rest?.children}
    </Button>
  );
}
