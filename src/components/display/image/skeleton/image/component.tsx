import classNames from 'classnames';
import { ImageIcon } from 'lucide-react';
import React from 'react';
import { ImageImageSkeletonProps } from './component.interface';

export function ImageImageSkeleton({ ...rest }: ImageImageSkeletonProps) {
  return (
    <ImageIcon
      {...rest}
      className={classNames(rest?.className)}
    />
  );
}

