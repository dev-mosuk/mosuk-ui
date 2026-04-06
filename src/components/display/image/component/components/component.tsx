import classNames from 'classnames';
import React, { ElementType, SyntheticEvent, useEffect, useState } from 'react';
import { ImagePlaceholderConstants } from '../constants/placeholder/constants';
import styles from '../styles/styles.module.css';
import { ImageProps } from './component.interface';

export function Image<C extends ElementType = 'img'>({
  as,
  src,
  alt,
  ...rest
}: ImageProps<C>) {
  const Component = (as || 'img') as ElementType;

  const [activeSrc, setActiveSrc] = useState<string | undefined>(
    src as string | undefined,
  );

  useEffect(() => {
    setActiveSrc(src);
  }, [src]);

  const handleLoad = (event: SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    const isValid = img.naturalWidth > 5 && img.naturalHeight > 5;

    if (!isValid) {
      setActiveSrc(ImagePlaceholderConstants.default);
    }
  };

  const handleError = () => {
    setActiveSrc(ImagePlaceholderConstants.default);
  };

  return (
    <Component
      {...rest}
      src={activeSrc ?? ImagePlaceholderConstants.default}
      alt={alt || 'Изображение'}
      onLoad={handleLoad}
      onError={handleError}
      className={classNames(styles.image, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
