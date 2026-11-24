import type { EmptyProps } from '@/components/empty/.partials/components/component.interface';
import {
  EMPTY_DEFAULT_ANIMATION,
  EMPTY_DEFAULT_PRESS,
  EMPTY_DEFAULT_VARIANT,
} from '@/components/empty/.partials/constants/component.constants';
import styles from '@/components/empty/.partials/styles/component.module.css';
import { Card } from '@/components/card';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function Empty<C extends ElementType = 'section'>({
  ...rest
}: EmptyProps<C>) {
  return (
    <Card
      {...rest}
      as={(rest.as ?? 'section') as C}
      variant={rest.variant ?? EMPTY_DEFAULT_VARIANT}
      animation={rest.animation ?? EMPTY_DEFAULT_ANIMATION}
      press={rest.press ?? EMPTY_DEFAULT_PRESS}
      className={classNames(
        'mosuk-empty',
        '@container/empty',
        'group/empty',
        styles.empty,
        rest?.className,
      )}
    >
      {rest?.children}
    </Card>
  );
}
