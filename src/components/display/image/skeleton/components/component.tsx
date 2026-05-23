import { ImagePlaceholderConstants } from '@/components/display/image/component/constants/placeholder/constants';
import styles from '@/components/display/image/component/styles/styles.module.css';
import { ImageSkeletonProps } from '@/components/display/image/skeleton/components/component.interface';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function ImageSkeleton<C extends ElementType = 'img'>({
  as,
  src,
  alt,
  ...rest
}: ImageSkeletonProps<C>) {
  const Component = (as || 'img') as ElementType;

  return (
    <Component
      {...rest}
      src={src ?? ImagePlaceholderConstants.default}
      alt={alt || 'Изображение'}
      className={classNames(styles.image, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
