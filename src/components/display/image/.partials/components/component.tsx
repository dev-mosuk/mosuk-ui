'use client';

import { ImageProps } from '@/components/display/image/.partials/components/component.interface';
import { ImageDots } from '@/components/display/image/.partials/components/dots/component';
import { ImageDotsProps } from '@/components/display/image/.partials/components/dots/component.interface';
import { ImageContext } from '@/components/display/image/.partials/providers/context/context';
import { ImageProvider } from '@/components/display/image/.partials/providers/provider';
import styles from '@/components/display/image/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, {
  Children,
  ElementType,
  cloneElement,
  isValidElement,
  useContext,
} from 'react';

export function Image<C extends ElementType = 'div'>(props: ImageProps<C>) {
  return (
    <ImageProvider isLoading={props.isLoading ?? false}>
      <ImageFrame<C> {...props} />
    </ImageProvider>
  );
}

function ImageFrame<C extends ElementType = 'div'>({
  as,
  ref,
  isLoading: _isLoading,
  ...rest
}: ImageProps<C>) {
  const context = useContext(ImageContext);
  const Component = (as || 'div') as ElementType;

  if (!context) {
    throw new Error('Image must be used inside ImageProvider');
  }

  const { shown, visibleDots, node } = context;

  const children = Children.map(rest.children, (child) => {
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
      className={classNames('mosuk-image', styles.image, rest?.className)}
    >
      {children}
    </Component>
  );
}
