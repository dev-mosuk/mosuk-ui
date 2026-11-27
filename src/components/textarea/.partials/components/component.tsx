import { TextareaProps } from '@/components/textarea/.partials/components/component.interface';
import {
  TEXTAREA_DEFAULT_ANIMATION,
  TEXTAREA_DEFAULT_IS_AUTO_SIZE,
  TEXTAREA_DEFAULT_PRESS,
  TEXTAREA_DEFAULT_SIZE,
  TEXTAREA_DEFAULT_VARIANT,
} from '@/components/textarea/.partials/constants/component.constants';
import { TextareaPress } from '@/components/textarea/.partials/enums/component.enums';
import styles from '@/components/textarea/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, {
  type CSSProperties,
  ElementType,
  useId,
  useRef,
  useState,
} from 'react';
import TextareaAutosizePrimitive from 'react-textarea-autosize';

export function Textarea<C extends ElementType = 'textarea'>({
  as,
  size = TEXTAREA_DEFAULT_SIZE,
  variant = TEXTAREA_DEFAULT_VARIANT,
  animation = TEXTAREA_DEFAULT_ANIMATION,
  press = TEXTAREA_DEFAULT_PRESS,
  minRows,
  maxRows,
  isDisabled,
  isReadOnly,
  isRequired,
  isDanger,
  isAutoSize = TEXTAREA_DEFAULT_IS_AUTO_SIZE,
  style,
  onPointerDown,
  onFocus,
  onBlur,
  ...rest
}: TextareaProps<C>) {
  const Component = (
    isAutoSize ? TextareaAutosizePrimitive : as || 'textarea'
  ) as ElementType;

  const id = rest?.id ?? useId();
  const name = rest?.name ?? id;

  const pressMode = press === false ? TextareaPress.None : press;
  const needsRippleCoords = pressMode === TextareaPress.Ripple;
  const needsInlineSize = pressMode === TextareaPress.Scale;

  const iosZoomLockRef = useRef(false);
  const [isIosZoomLocked, setIsIosZoomLocked] = useState(false);

  const unlockIosZoom = () => {
    iosZoomLockRef.current = false;
    setIsIosZoomLocked(false);
  };

  return (
    <Component
      {...rest}
      {...(isAutoSize ? { minRows, maxRows } : {})}
      ref={rest?.ref}
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
      data-autosize={isAutoSize || undefined}
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

        if (needsRippleCoords || needsInlineSize) {
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
        'mosuk-textarea',
        'group/textarea',
        styles.textarea,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
