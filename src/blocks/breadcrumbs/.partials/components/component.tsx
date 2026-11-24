import { BreadcrumbsButton } from '@/blocks/breadcrumbs/.partials/components/button/component';
import { BreadcrumbsProps } from '@/blocks/breadcrumbs/.partials/components/component.interface';
import { BreadcrumbsIcon } from '@/blocks/breadcrumbs/.partials/components/icon/component';
import {
  BREADCRUMBS_ARIA_LABEL,
  BREADCRUMBS_DEFAULT_SIZE,
  BREADCRUMBS_DEFAULT_VARIANT,
} from '@/blocks/breadcrumbs/.partials/constants/component.constants';
import { useScroll } from '@/blocks/breadcrumbs/.partials/hooks/scroll';
import styles from '@/blocks/breadcrumbs/.partials/styles/component.module.css';
import { Button } from '@/components/button';
import classNames from 'classnames';
import React, {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from 'react';

type InheritProps = {
  size?: BreadcrumbsProps['size'];
  variant?: BreadcrumbsProps['variant'];
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

function isCrumb(child: ReactElement) {
  return child.type === BreadcrumbsButton || child.type === BreadcrumbsIcon;
}

export function Breadcrumbs({
  size = BREADCRUMBS_DEFAULT_SIZE,
  variant = BREADCRUMBS_DEFAULT_VARIANT,
  children,
  className,
  'aria-label': ariaLabel = BREADCRUMBS_ARIA_LABEL,
  ...rest
}: BreadcrumbsProps) {
  const {
    ref,
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
    if (!isValidElement(child) || !isCrumb(child)) {
      return child;
    }

    const props = child.props as InheritProps;
    const isCurrent = index === currentIndex;

    return cloneElement(child as ReactElement<InheritProps>, {
      size,
      ...(props.variant == null
        ? {
            variant: isCurrent
              ? Button.ENUMS.Variant.Tertiary
              : variant,
          }
        : null),
      ...(isCurrent ? { 'aria-current': 'page' as const } : null),
    });
  });

  return (
    <nav
      {...rest}
      ref={ref}
      aria-label={ariaLabel}
      data-size={size}
      data-variant={variant || undefined}
      data-dragging={isDragging || undefined}
      className={classNames(
        'mosuk-breadcrumbs',
        '@container/breadcrumbs',
        'group/breadcrumbs',
        styles.root,
        className,
      )}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      onClickCapture={onClickCapture}
    >
      {crumbs}
    </nav>
  );
}
