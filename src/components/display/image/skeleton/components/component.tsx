import classNames from 'classnames';
import React, { ElementType } from 'react';
import { ImagePlaceholderConstants } from '../../component/constants/placeholder/constants';
import styles from '../../component/styles/styles.module.css';
import { ImageSkeletonProps } from './component.interface';

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
