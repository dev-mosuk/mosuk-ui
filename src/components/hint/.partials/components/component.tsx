import type { HintProps } from '@/components/hint/.partials/components/component.interface';
import {
  HINT_DEFAULT_ANIMATION,
  HINT_DEFAULT_PRESS,
  HINT_DEFAULT_TYPE,
  HINT_DEFAULT_VARIANT,
} from '@/components/hint/.partials/constants/component.constants';
import styles from '@/components/hint/.partials/styles/component.module.css';
import { Typography } from '@/components/typography';
import classNames from 'classnames';
import React from 'react';

export function Hint<C = 'p'>({
  as,
  ref,
  type = HINT_DEFAULT_TYPE,
  variant = HINT_DEFAULT_VARIANT,
  animation = HINT_DEFAULT_ANIMATION,
  press = HINT_DEFAULT_PRESS,
  onPointerDown,
  className,
  ...rest
}: HintProps<C>) {
  return (
    <Typography
      {...({
        ...rest,
        as,
        ref,
        type,
        variant,
        animation,
        press,
        onPointerDown,
        className: classNames(
          'mosuk-hint',
          'group/hint',
          styles.hint,
          className,
        ),
      } as Typography.Props<C>)}
    />
  );
}
