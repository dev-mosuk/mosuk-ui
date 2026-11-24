import { TypographyProps } from '@/components/typography/.partials/components/component.interface';
import {
  TYPOGRAPHY_DEFAULT_ANIMATION,
  TYPOGRAPHY_DEFAULT_COLOR,
  TYPOGRAPHY_DEFAULT_ELEMENT_BY_TYPE,
  TYPOGRAPHY_DEFAULT_PRESS,
  TYPOGRAPHY_DEFAULT_TYPE,
} from '@/components/typography/.partials/constants/component.constants';
import {
  TypographyPress,
  TypographyType,
} from '@/components/typography/.partials/enums/component.enums';
import styles from '@/components/typography/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

const typeClassName: Record<TypographyType, string> = {
  [TypographyType.H1]: styles.h1,
  [TypographyType.H2]: styles.h2,
  [TypographyType.H3]: styles.h3,
  [TypographyType.H4]: styles.h4,
  [TypographyType.H5]: styles.h5,
  [TypographyType.H6]: styles.h6,
  [TypographyType.P1]: styles.p1,
  [TypographyType.P2]: styles.p2,
  [TypographyType.P3]: styles.p3,
  [TypographyType.P4]: styles.p4,
  [TypographyType.P5]: styles.p5,
  [TypographyType.P6]: styles.p6,
};

export function Typography<C extends ElementType = 'p'>({
  as,
  type = TYPOGRAPHY_DEFAULT_TYPE,
  color = TYPOGRAPHY_DEFAULT_COLOR,
  animation = TYPOGRAPHY_DEFAULT_ANIMATION,
  press = TYPOGRAPHY_DEFAULT_PRESS,
  isMuted,
  isTruncate,
  onPointerDown,
  ...rest
}: TypographyProps<C>) {
  const resolvedType = type as TypographyType;
  const Component = (as ||
    TYPOGRAPHY_DEFAULT_ELEMENT_BY_TYPE[resolvedType]) as ElementType;
  const pressMode = press === false ? TypographyPress.None : press;
  const needsRippleCoords = pressMode === TypographyPress.Ripple;

  return (
    <Component
      {...rest}
      data-color={color}
      data-animation={animation}
      data-press={pressMode}
      data-muted={isMuted || undefined}
      onPointerDown={(event: React.PointerEvent<HTMLElement>) => {
        if (needsRippleCoords) {
          const rect = event.currentTarget.getBoundingClientRect();
          event.currentTarget.style.setProperty(
            '--press-x',
            `${event.clientX - rect.left}px`,
          );
          event.currentTarget.style.setProperty(
            '--press-y',
            `${event.clientY - rect.top}px`,
          );
        }

        onPointerDown?.(event as never);
      }}
      className={classNames(
        'mosuk-typography',
        '@container/typography',
        'group/typography',
        styles.typography,
        typeClassName[resolvedType],
        isTruncate && styles.truncate,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
