import { ImageProps } from '@/components/display/file/(files)/component/file/component.interface';
import { Image } from '@/components/display/image/component/components/component';
import classNames from 'classnames';
import React from 'react';

export function File({ ...rest }: ImageProps) {
  return (
    <Image {...rest} className={classNames('files-file', rest?.className)}>
      {rest?.children}
    </Image>
  );
}
