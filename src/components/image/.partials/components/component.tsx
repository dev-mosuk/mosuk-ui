'use client';

import { ImageProps } from '@/components/image/.partials/components/component.interface';
import { ImageFallback } from '@/components/image/.partials/components/fallback/component';
import { ImageLoader } from '@/components/image/.partials/components/loader/component';
import { ImageLoaderProps } from '@/components/image/.partials/components/loader/component.interface';
import { ImageView } from '@/components/image/.partials/components/view/component';
import {
  IMAGE_DEFAULT_ANIMATION,
  IMAGE_DEFAULT_IS_DISABLED,
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
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
  type CSSProperties,
} from 'react';

export function Image<C extends ElementType = 'div'>(props: ImageProps<C>) {
  return (
    <ImageProvider isLoading={props.isLoading ?? IMAGE_DEFAULT_IS_LOADING}>
      <ImageFrame<C> {...props} />
    </ImageProvider>
  );
}

function ImageFrame<C extends ElementType = 'div'>({
  as,
  ref,
  isDisabled = IMAGE_DEFAULT_IS_DISABLED,
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
  const { shown, visibleLoader, status, node } = useImage();
  const Component = (as || 'div') as ElementType;
  const pressMode = press === false ? ImagePress.None : press;
  const needsRippleCoords = pressMode === ImagePress.Ripple;
  const needsInlineSize = pressMode === ImagePress.Scale;
  const locked = Boolean(isDisabled);
  const isNativeButton = (as || 'div') === 'button';

  let loader: ReactElement<ImageLoaderProps> | null = null;
  let view: ReactNode = null;
  let fallback: ReactNode = null;
  const restChildren: ReactNode[] = [];

  Children.forEach(children, (child) => {
    if (!isValidElement(child)) {
      restChildren.push(child);

      return;
    }

    if (child.type === ImageLoader) {
      loader = child as ReactElement<ImageLoaderProps>;

      return;
    }

    if (child.type === ImageView) {
      view = child;

      return;
    }

    if (child.type === ImageFallback) {
      fallback = child;

      return;
    }

    restChildren.push(child);
  });

  const showFallback = fallback !== null && status !== 'loaded';

  const resolvedLoader =
    loader && visibleLoader
      ? cloneElement(loader as ReactElement<ImageLoaderProps>, {
          className: classNames(
            styles.loader,
            (loader as ReactElement<ImageLoaderProps>).props.className,
          ),
          exiting: shown,
        })
      : null;

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
      disabled={isNativeButton ? locked : undefined}
      aria-disabled={!isNativeButton && locked ? true : undefined}
      data-variant={variant}
      data-size={size}
      data-animation={animation}
      data-press={pressMode}
      data-disabled={locked || undefined}
      style={
        {
          ...(size != null ? { '--image-size': size } : undefined),
          ...style,
        } as CSSProperties
      }
      onPointerDown={(event: React.PointerEvent<HTMLElement>) => {
        if ((needsRippleCoords || needsInlineSize) && !locked) {
          const rect = event.currentTarget.getBoundingClientRect();

          if (needsInlineSize) {
            event.currentTarget.style.setProperty(
              '--press-inline-size',
              `${rect.width}px`,
            );
          }

          if (needsRippleCoords) {
            event.currentTarget.style.setProperty(
              '--press-x',
              `${event.clientX - rect.left}px`,
            );
            event.currentTarget.style.setProperty(
              '--press-y',
              `${event.clientY - rect.top}px`,
            );
          }
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
      {view}
      {showFallback ? fallback : null}
      {resolvedLoader}
      {restChildren}
    </Component>
  );
}
