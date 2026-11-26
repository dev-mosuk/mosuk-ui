import { HeroSheetContentProps } from '@/components/hero-sheet/.partials/components/content/component.interface';
import { HERO_SHEET_CONTENT_MARKER } from '@/components/hero-sheet/.partials/constants/component.constants';
import { useHeroSheet } from '@/components/hero-sheet/.partials/hooks/hook';
import styles from '@/components/hero-sheet/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function HeroSheetContent<C extends ElementType = 'div'>({
  as,
  ...rest
}: HeroSheetContentProps<C>) {
  const { direction, variant, isSwiping } = useHeroSheet();
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      {...{ [HERO_SHEET_CONTENT_MARKER]: '' }}
      data-direction={direction}
      data-variant={variant}
      data-swiping={isSwiping ? '' : undefined}
      className={classNames(
        'mosuk-hero-sheet-content',
        styles.content,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}

HeroSheetContent.displayName = 'HeroSheet.Content';
