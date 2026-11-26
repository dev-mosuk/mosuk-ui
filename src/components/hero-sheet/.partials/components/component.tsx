'use client';

import { HeroSheetProps } from '@/components/hero-sheet/.partials/components/component.interface';
import {
  HERO_SHEET_DEFAULT_CLOSE_THRESHOLD,
  HERO_SHEET_DEFAULT_DIRECTION,
  HERO_SHEET_DEFAULT_IS_DISABLED,
  HERO_SHEET_DEFAULT_OPEN_THRESHOLD,
  HERO_SHEET_DEFAULT_VARIANT,
} from '@/components/hero-sheet/.partials/constants/component.constants';
import { useHeroSheet } from '@/components/hero-sheet/.partials/hooks/hook';
import { HeroSheetProvider } from '@/components/hero-sheet/.partials/providers/provider';
import styles from '@/components/hero-sheet/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

function HeroSheetRootHost<C extends ElementType = 'div'>({
  as,
  children,
  ...rest
}: Omit<
  HeroSheetProps<C>,
  | 'direction'
  | 'variant'
  | 'openThreshold'
  | 'closeThreshold'
  | 'progress'
  | 'isDisabled'
  | 'isOpen'
  | 'onOpenChange'
  | 'onProgressChange'
>) {
  const { direction, variant, rootRef, isSwiping, progress } = useHeroSheet();
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      ref={rootRef}
      data-direction={direction}
      data-variant={variant}
      data-progress={progress}
      data-swiping={isSwiping ? '' : undefined}
      className={classNames(
        'mosuk-hero-sheet',
        '@container/hero-sheet',
        'group/hero-sheet',
        styles.heroSheet,
        rest?.className,
      )}
    >
      {children}
    </Component>
  );
}

export function HeroSheet({
  direction = HERO_SHEET_DEFAULT_DIRECTION,
  variant = HERO_SHEET_DEFAULT_VARIANT,
  openThreshold = HERO_SHEET_DEFAULT_OPEN_THRESHOLD,
  closeThreshold = HERO_SHEET_DEFAULT_CLOSE_THRESHOLD,
  progress,
  isDisabled = HERO_SHEET_DEFAULT_IS_DISABLED,
  isOpen,
  onOpenChange,
  onProgressChange,
  children,
  ...rest
}: HeroSheetProps) {
  return (
    <HeroSheetProvider
      direction={direction}
      variant={variant}
      openThreshold={openThreshold}
      closeThreshold={closeThreshold}
      progress={progress}
      isDisabled={isDisabled}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onProgressChange={onProgressChange}
    >
      <HeroSheetRootHost {...rest}>{children}</HeroSheetRootHost>
    </HeroSheetProvider>
  );
}
