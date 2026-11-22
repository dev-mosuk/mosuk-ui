import { InputProps } from '@/components/input/.partials/components/component.interface';
import {
  INPUT_DEFAULT_SIZE,
  INPUT_DEFAULT_VARIANT,
  INPUT_DEFAULT_WIDTH,
} from '@/components/input/.partials/constants/component.constants';
import styles from '@/components/input/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, {
  type CSSProperties,
  ElementType,
  useId,
  useRef,
  useState,
} from 'react';

export function Input<C extends ElementType = 'input'>({
  as,
  variant = INPUT_DEFAULT_VARIANT,
  size = INPUT_DEFAULT_SIZE,
  width = INPUT_DEFAULT_WIDTH,
  isDisabled,
  isReadOnly,
  isRequired,
  isInvalid,
  style,
  onPointerDown,
  onFocus,
  onBlur,
  ...rest
}: InputProps<C>) {
  const Component = (as || 'input') as ElementType;

  const id = rest?.id ?? useId();
  const name = rest?.name ?? id;

  const iosZoomLockRef = useRef(false);
  const [isIosZoomLocked, setIsIosZoomLocked] = useState(false);

  const unlockIosZoom = () => {
    iosZoomLockRef.current = false;
    setIsIosZoomLocked(false);
  };

  return (
    <Component
      {...rest}
      ref={rest?.ref}
      id={id}
      name={name}
      disabled={isDisabled}
      readOnly={isReadOnly}
      required={isRequired}
      aria-invalid={isInvalid || undefined}
      data-variant={variant}
      data-width={width}
      data-invalid={isInvalid || undefined}
      data-ios-zoom-lock={isIosZoomLocked || undefined}
      style={
        {
          '--input-size': size,
          ...style,
        } as CSSProperties
      }
      onPointerDown={(event: React.PointerEvent<HTMLElement>) => {
        if (event.pointerType === 'touch') {
          iosZoomLockRef.current = true;
          setIsIosZoomLocked(true);
        }

        onPointerDown?.(event as never);
      }}
      onFocus={(event: React.FocusEvent<HTMLElement>) => {
        if (iosZoomLockRef.current) {
          requestAnimationFrame(() => {
            requestAnimationFrame(unlockIosZoom);
          });
        }

        onFocus?.(event as never);
      }}
      onBlur={(event: React.FocusEvent<HTMLElement>) => {
        unlockIosZoom();
        onBlur?.(event as never);
      }}
      className={classNames(
        'mosuk-input',
        '@container/input',
        'group/input',
        styles.input,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
