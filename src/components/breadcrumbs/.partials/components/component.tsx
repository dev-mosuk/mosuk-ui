import { BreadcrumbsProps } from '@/components/breadcrumbs/.partials/components/component.interface';
import { BREADCRUMBS_ARIA_LABEL } from '@/components/breadcrumbs/.partials/constants/component.constants';
import { useScroll } from '@/components/breadcrumbs/.partials/hooks/scroll';
import styles from '@/components/breadcrumbs/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
} from 'react';

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
  const lastIndex = items.length - 1;

  const crumbs = items.map((child, index) => {
    if (!isValidElement(child)) {
      return child;
    }

    const isLast = index === lastIndex;

    return cloneElement(child as ReactElement<Record<string, unknown>>, {
      'aria-current': isLast ? 'page' : undefined,
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
