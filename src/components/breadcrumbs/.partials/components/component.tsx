import { BreadcrumbsButton } from '@/components/breadcrumbs/.partials/components/button/component';
import { BreadcrumbsProps } from '@/components/breadcrumbs/.partials/components/component.interface';
import { BreadcrumbsIcon } from '@/components/breadcrumbs/.partials/components/icon/component';
import { BREADCRUMBS_ARIA_LABEL } from '@/components/breadcrumbs/.partials/constants/component.constants';
import { useScroll } from '@/components/breadcrumbs/.partials/hooks/scroll';
import styles from '@/components/breadcrumbs/.partials/styles/component.module.css';
import { Button } from '@/components/button';
import classNames from 'classnames';
import React, {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from 'react';

type CrumbProps = {
  variant?: string;
};

function findCurrentPageIndex(items: ReactNode[]) {
  for (let index = items.length - 1; index >= 0; index -= 1) {
    const child = items[index];
    if (isValidElement(child) && child.type === BreadcrumbsButton) {
      return index;
    }
  }

  for (let index = items.length - 1; index >= 0; index -= 1) {
    const child = items[index];
    if (isValidElement(child) && child.type === BreadcrumbsIcon) {
      return index;
    }
  }

  return -1;
}

export function Breadcrumbs({
  children,
  className,
  'aria-label': ariaLabel = BREADCRUMBS_ARIA_LABEL,
  ...rest
}: BreadcrumbsProps) {
  const {
    ref: trackRef,
    isDragging,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onPointerCancel,
    onClickCapture,
  } = useScroll();

  const items = Children.toArray(children);
  const currentIndex = findCurrentPageIndex(items);

  const crumbs = items.map((child, index) => {
    if (!isValidElement(child)) {
      return child;
    }

    const isCurrent = index === currentIndex;
    if (!isCurrent) {
      return child;
    }

    const props = child.props as CrumbProps;
    const secondary = Button.ENUMS.Variant.Secondary;

    return cloneElement(child as ReactElement<Record<string, unknown>>, {
      'aria-current': 'page',
      variant: props.variant ?? secondary,
    });
  });

  return (
    <nav
      {...rest}
      aria-label={ariaLabel}
      className={classNames(
        'mosuk-breadcrumbs',
        '@container/breadcrumbs',
        'group/breadcrumbs',
        styles.root,
        className,
      )}
    >
      <div
        ref={trackRef}
        data-dragging={isDragging || undefined}
        className={styles.track}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        onClickCapture={onClickCapture}
      >
        {crumbs}
      </div>
    </nav>
  );
}
