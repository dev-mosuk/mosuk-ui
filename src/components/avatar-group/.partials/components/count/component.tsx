import { Avatar } from '@/components/avatar';
import type { AvatarGroupCountProps } from '@/components/avatar-group/.partials/components/count/component.interface';
import styles from '@/components/avatar-group/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function AvatarGroupCount({
  size,
  variant,
  className,
  children,
}: AvatarGroupCountProps) {
  return (
    <Avatar
      size={size}
      variant={variant}
      className={classNames(
        'mosuk-avatar-group-count',
        styles.count,
        className,
      )}
    >
      <Avatar.Fallback>{children}</Avatar.Fallback>
    </Avatar>
  );
}
