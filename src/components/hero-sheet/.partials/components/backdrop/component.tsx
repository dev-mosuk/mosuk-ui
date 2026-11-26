import { HeroSheetBackdropProps } from '@/components/hero-sheet/.partials/components/backdrop/component.interface';
import { useHeroSheet } from '@/components/hero-sheet/.partials/hooks/hook';
import styles from '@/components/hero-sheet/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function HeroSheetBackdrop<C extends ElementType = 'div'>({
  as,
  ...rest
}: HeroSheetBackdropProps<C>) {
  const { isSwiping } = useHeroSheet();
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      aria-hidden
      data-swiping={isSwiping ? '' : undefined}
      className={classNames(
        'mosuk-hero-sheet-backdrop',
        styles.backdrop,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
