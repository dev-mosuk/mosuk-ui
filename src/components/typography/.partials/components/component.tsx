import { TypographyProps } from '@/components/typography/.partials/components/component.interface';
import {
  TYPOGRAPHY_DEFAULT_ALIGN,
  TYPOGRAPHY_DEFAULT_ELEMENT_BY_TYPE,
  TYPOGRAPHY_DEFAULT_TYPE,
} from '@/components/typography/.partials/constants/component.constants';
import {
  TypographyAlign,
  TypographyType,
} from '@/components/typography/.partials/enums/component.enums';
import styles from '@/components/typography/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

const typeClassName: Record<TypographyType, string> = {
  [TypographyType.H1]: styles.h1,
  [TypographyType.H2]: styles.h2,
  [TypographyType.H3]: styles.h3,
  [TypographyType.H4]: styles.h4,
  [TypographyType.H5]: styles.h5,
  [TypographyType.H6]: styles.h6,
  [TypographyType.Lead]: styles.lead,
  [TypographyType.Text]: styles.text,
  [TypographyType.Detail]: styles.detail,
  [TypographyType.Meta]: styles.meta,
  [TypographyType.Caption]: styles.caption,
  [TypographyType.Fine]: styles.fine,
};

const alignClassName: Record<TypographyAlign, string> = {
  [TypographyAlign.Start]: styles.alignStart,
  [TypographyAlign.Center]: styles.alignCenter,
  [TypographyAlign.End]: styles.alignEnd,
  [TypographyAlign.Justify]: styles.alignJustify,
};

export function Typography<C extends ElementType = 'p'>({
  as,
  type = TYPOGRAPHY_DEFAULT_TYPE,
  align = TYPOGRAPHY_DEFAULT_ALIGN,
  size,
  color,
  weight,
  lineHeight,
  muted,
  truncate,
  ...rest
}: TypographyProps<C>) {
  const Component = (as ||
    TYPOGRAPHY_DEFAULT_ELEMENT_BY_TYPE[type as TypographyType]) as ElementType;

  return (
    <Component
      {...rest}
      data-size={size}
      data-color={color}
      data-weight={weight}
      data-leading={lineHeight}
      data-muted={muted || undefined}
      className={classNames(
        'mosuk-typography',
        '@container/typography',
        'group/typography',
        styles.typography,
        typeClassName[type as TypographyType],
        alignClassName[align as TypographyAlign],
        truncate && styles.truncate,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
