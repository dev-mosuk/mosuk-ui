import {
  TypographyAlign,
  TypographyProps,
  TypographyType,
  TypographyWeight,
} from '@/components/texts/typography/.partials/components/component.interface';
import styles from '@/components/texts/typography/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

const defaultElementByType: Record<TypographyType, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'p',
  'body-sm': 'p',
  'body-xs': 'p',
  code: 'code',
};

const typeClassName: Record<TypographyType, string> = {
  h1: styles.h1,
  h2: styles.h2,
  h3: styles.h3,
  h4: styles.h4,
  h5: styles.h5,
  h6: styles.h6,
  body: styles.body,
  'body-sm': styles.description,
  'body-xs': styles.comment,
  code: styles.code,
};

const alignClassName: Record<TypographyAlign, string> = {
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd,
  justify: styles.alignJustify,
};

const weightClassName: Record<TypographyWeight, string> = {
  normal: styles.weightNormal,
  medium: styles.weightMedium,
  semibold: styles.weightSemibold,
  bold: styles.weightBold,
};

export function Typography<C extends ElementType = 'p'>({
  as,
  type = 'body',
  align = 'start',
  muted = false,
  weight,
  truncate,
  ...rest
}: TypographyProps<C>) {
  const Component = (as || defaultElementByType[type]) as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-typography',
        '@container/typography',
        'group/typography',
        styles.root,
        typeClassName[type],
        alignClassName[align],
        muted && styles.muted,
        weight ? weightClassName[weight] : undefined,
        truncate && styles.truncate,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
