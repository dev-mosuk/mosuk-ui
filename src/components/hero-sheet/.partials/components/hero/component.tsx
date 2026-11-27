'use client';

import { HeroSheetHeroProps } from '@/components/hero-sheet/.partials/components/hero/component.interface';
import { useHeroSheet } from '@/components/hero-sheet/.partials/hooks/hook';
import styles from '@/components/hero-sheet/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function HeroSheetHero<C = 'div'>({
  as,
  ...rest
}: HeroSheetHeroProps<C>) {
  const { stageRef, isSwiping } = useHeroSheet();
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      ref={stageRef}
      data-swiping={isSwiping ? '' : undefined}
      className={classNames(
        'mosuk-hero-sheet-hero',
        styles.hero,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}

HeroSheetHero.displayName = 'HeroSheet.Hero';
