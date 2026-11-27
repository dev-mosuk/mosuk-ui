import { Avatar } from '@/components/avatar';
import type { AvatarGroupProps } from '@/components/avatar-group/.partials/components/component.interface';
import { AvatarGroupCount } from '@/components/avatar-group/.partials/components/count/component';
import {
  AVATAR_GROUP_DEFAULT_IS_GRID,
  AVATAR_GROUP_DEFAULT_OVERLAP,
} from '@/components/avatar-group/.partials/constants/component.constants';
import styles from '@/components/avatar-group/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, {
  Children,
  cloneElement,
  isValidElement,
  type ElementType,
  type ReactElement,
} from 'react';

type InheritProps = {
  size?: AvatarGroupProps['size'];
  variant?: AvatarGroupProps['variant'];
};

export function AvatarGroup<C = 'nav'>({
  as,
  ref,
  size,
  variant,
  max,
  isGrid = AVATAR_GROUP_DEFAULT_IS_GRID,
  overlap = AVATAR_GROUP_DEFAULT_OVERLAP,
  className,
  children,
  ...rest
}: AvatarGroupProps<C>) {
  const Component = (as ?? 'nav') as ElementType;

  const avatarChildren: ReactElement[] = [];
  const countChildren: ReactElement[] = [];

  for (const child of Children.toArray(children)) {
    if (!isValidElement(child)) {
      continue;
    }

    if (child.type === AvatarGroupCount) {
      countChildren.push(child);

      continue;
    }

    if (child.type === Avatar) {
      avatarChildren.push(child);
    }
  }

  const visibleChildren =
    max == null ? avatarChildren : avatarChildren.slice(0, Math.max(0, max));
  const remaining =
    max == null
      ? 0
      : Math.max(0, avatarChildren.length - visibleChildren.length);

  const wrapInherit = (child: ReactElement) => {
    const props = child.props as InheritProps;

    return cloneElement(child as ReactElement<InheritProps>, {
      size: props.size ?? size,
      variant: props.variant ?? variant,
    });
  };

  const wrappedAvatars = visibleChildren.map(wrapInherit);
  const hasExplicitCount = countChildren.length > 0;
  const wrappedCounts = countChildren.map(wrapInherit);

  const countContent = hasExplicitCount ? (
    wrappedCounts
  ) : remaining > 0 ? (
    <AvatarGroupCount size={size} variant={variant}>
      +{remaining}
    </AvatarGroupCount>
  ) : null;

  return (
    <Component
      {...rest}
      ref={ref}
      data-grid={isGrid || undefined}
      data-overlap={isGrid ? undefined : overlap}
      className={classNames(
        'mosuk-avatar-group',
        'group/avatar-group',
        styles.avatarGroup,
        className,
      )}
    >
      {wrappedAvatars}
      {countContent}
    </Component>
  );
}
