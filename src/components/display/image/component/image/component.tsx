import classNames from 'classnames';
import { ImageMinusIcon } from 'lucide-react';
import React, { ElementType, SyntheticEvent, useState } from 'react';
import styles from '../component.module.css';
import { ImageImageProps } from './component.interface';

export function ImageImage<C extends ElementType = 'img'>({
  as,
  src,
  alt,
  ...rest
}: ImageImageProps<C>) {
  const Component = (as || 'img') as ElementType;

  const [imageValid, setImageValid] = useState<boolean | null>(
    src ? null : false
  );

  const handleLoad = (event: SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    const isValid = img.naturalWidth > 5 && img.naturalHeight > 5;
    setImageValid(isValid);
  };

  const handleError = () => {
    setImageValid(false);
  };

  if (!src || imageValid === false) {
    return (
      <ImageMinusIcon     
        className={classNames(styles.svg, rest?.className)}
      />
    );
  }

  return (
    <Component
      {...rest}
      src={src}
      alt={alt || 'Изображение'}
      onLoad={handleLoad}
      onError={handleError}
      className={classNames(styles.image, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
