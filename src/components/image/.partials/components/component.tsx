'use client';

import { ImageProps } from '@/components/image/.partials/components/component.interface';
import { ImageDots } from '@/components/image/.partials/components/dots/component';
import { ImageDotsProps } from '@/components/image/.partials/components/dots/component.interface';
import {
  IMAGE_DEFAULT_ANIMATION,
  IMAGE_DEFAULT_IS_LOADING,
  IMAGE_DEFAULT_PRESS,
  IMAGE_DEFAULT_VARIANT,
} from '@/components/image/.partials/constants/component.constants';
import { ImagePress } from '@/components/image/.partials/enums/component.enums';
import { useImage } from '@/components/image/.partials/hooks/hook';
import { ImageProvider } from '@/components/image/.partials/providers/provider';
import styles from '@/components/image/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, {
  Children,
  ElementType,
  cloneElement,
  isValidElement,
  type CSSProperties,
} from 'react';

export function Image<C extends ElementType = 'div'>(props: ImageProps<C>) {
  return (
    <ImageProvider
      isLoading={props.isLoading ?? IMAGE_DEFAULT_IS_LOADING}
    >
      <ImageFrame<C> {...props} />
    </ImageProvider>
  );
}

function ImageFrame<C extends ElementType = 'div'>({
  as,
  ref,
  isLoading: _isLoading,
  size,
  variant = IMAGE_DEFAULT_VARIANT,
  animation = IMAGE_DEFAULT_ANIMATION,
  press = IMAGE_DEFAULT_PRESS,
  style,
  className,
  children,
  onPointerDown,
  ...rest
}: ImageProps<C>) {
  const { shown, visibleDots, node } = useImage();
  const Component = (as || 'div') as ElementType;
  const pressMode = press === false ? ImagePress.None : press;
  const needsRippleCoords = pressMode === ImagePress.Ripple;

  const resolvedChildren = Children.map(children, (child) => {
    if (!isValidElement(child) || child.type !== ImageDots) {
      return child;
    }

    if (!visibleDots) {
      return null;
    }

    const props = child.props as ImageDotsProps;

    return cloneElement(child, {
      className: classNames(styles.dots, props.className),
      exiting: shown,
    });
  });

  return (
    <Component
      {...rest}
      ref={(value: HTMLElement | null) => {
        node.current = value;

        if (typeof ref === 'function') {
          ref(value);

          return;
        }

        if (ref) {
          ref.current = value;
        }
      }}
      data-variant={variant}
      data-size={size}
      data-animation={animation}
      data-press={pressMode}
      style={
        {
          ...(size != null ? { '--image-size': size } : undefined),
          ...style,
        } as CSSProperties
      }
      onPointerDown={(event: React.PointerEvent<HTMLElement>) => {
        if (needsRippleCoords) {
          const rect = event.currentTarget.getBoundingClientRect();

          event.currentTarget.style.setProperty(
            '--press-x',
            `${event.clientX - rect.left}px`,
          );
          event.currentTarget.style.setProperty(
            '--press-y',
            `${event.clientY - rect.top}px`,
          );
        }

        onPointerDown?.(event as never);
      }}
      className={classNames(
        'mosuk-image',
        '@container/image',
        'group/image',
        styles.image,
        className,
      )}
    >
      {resolvedChildren}
    </Component>
  );
}
