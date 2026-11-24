import { InputProps } from '@/components/input/.partials/components/component.interface';
import {
  INPUT_DEFAULT_ANIMATION,
  INPUT_DEFAULT_IS_ACTIVE,
  INPUT_DEFAULT_IS_FOCUSED,
  INPUT_DEFAULT_PRESS,
  INPUT_DEFAULT_SIZE,
  INPUT_DEFAULT_VARIANT,
} from '@/components/input/.partials/constants/component.constants';
import { InputPress } from '@/components/input/.partials/enums/component.enums';
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
  size = INPUT_DEFAULT_SIZE,
  variant = INPUT_DEFAULT_VARIANT,
  animation = INPUT_DEFAULT_ANIMATION,
  press = INPUT_DEFAULT_PRESS,
  isDisabled,
  isReadOnly,
  isRequired,
  isDanger,
  isActive = INPUT_DEFAULT_IS_ACTIVE,
  isFocused = INPUT_DEFAULT_IS_FOCUSED,
  style,
  onPointerDown,
  onFocus,
  onBlur,
  ...rest
}: InputProps<C>) {
  const {
    'data-active': dataActiveAttr,
    'data-focus': dataFocusAttr,
    ...domRest
  } = rest as typeof rest & {
    'data-active'?: string | boolean;
    'data-focus'?: string | boolean;
  };

  const Component = (as || 'input') as ElementType;

  const id = domRest?.id ?? useId();
  const name = domRest?.name ?? id;

  const pressMode = press === false ? InputPress.None : press;
  const needsRippleCoords = pressMode === InputPress.Ripple;
  const hasDataActive =
    isActive || (dataActiveAttr !== undefined && dataActiveAttr !== false);
  const hasDataFocus =
    isFocused || (dataFocusAttr !== undefined && dataFocusAttr !== false);

  const iosZoomLockRef = useRef(false);
  const [isIosZoomLocked, setIsIosZoomLocked] = useState(false);

  const unlockIosZoom = () => {
    iosZoomLockRef.current = false;
    setIsIosZoomLocked(false);
  };

  return (
    <Component
      {...domRest}
      ref={domRest?.ref}
      id={id}
      name={name}
      disabled={isDisabled}
      readOnly={isReadOnly}
      required={isRequired}
      aria-invalid={isDanger || undefined}
      data-variant={variant}
      data-press={pressMode}
      data-animation={animation}
      data-danger={isDanger || undefined}
      data-active={hasDataActive ? true : undefined}
      data-focus={hasDataFocus ? true : undefined}
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
        domRest?.className,
      )}
    >
      {domRest?.children}
    </Component>
  );
}
